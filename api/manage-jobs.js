export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { action, job, jobId, adminPassword } = req.body;

    if (!adminPassword || adminPassword !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ message: 'Unauthorized: Invalid Admin Password' });
    }

    if (action === 'delete' && !jobId) {
        return res.status(400).json({ message: 'Bad Request: Job ID is required for deletion' });
    } else if (action !== 'delete' && !job) {
        return res.status(400).json({ message: 'Bad Request: Job data is required' });
    }

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_OWNER = process.env.VERCEL_GIT_REPO_OWNER || process.env.GITHUB_OWNER;
    const GITHUB_REPO = process.env.VERCEL_GIT_REPO_SLUG || process.env.GITHUB_REPO;
    const FILE_PATH = 'src/data/jobs.json';

    if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
        console.error('Server Configuration Error: Missing GitHub setup', {
            hasToken: !!GITHUB_TOKEN,
            owner: GITHUB_OWNER,
            repo: GITHUB_REPO
        });
        return res.status(500).json({ message: 'Server Configuration Error: Missing GitHub setup in Environment Variables' });
    }

    try {
        // 1. Get the current file SHA and content
        const getRes = await fetch(
            `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    Accept: 'application/vnd.github.v3+json',
                },
            }
        );

        if (!getRes.ok) {
            throw new Error(`Failed to fetch file from GitHub: ${getRes.statusText}`);
        }

        const fileData = await getRes.json();
        const currentSha = fileData.sha;

        // Decode base64 content
        const currentContent = Buffer.from(fileData.content, 'base64').toString('utf-8');
        let jobs = [];
        try {
            jobs = JSON.parse(currentContent);
        } catch (e) {
            console.error('Error parsing current jobs.json', e);
            jobs = [];
        }

        let commitMessage = '';

        if (action === 'delete') {
            const initialLength = jobs.length;
            jobs = jobs.filter(j => j.id.toString() !== jobId.toString());
            if (jobs.length === initialLength) {
                return res.status(404).json({ message: 'Job not found in database' });
            }
            commitMessage = `Delete job ID: ${jobId}`;
        } else {
            // 2. Append the new job
            const newJob = {
                ...job,
                id: job.id || Date.now().toString(), // Ensure ID exists
                createdAt: new Date().toISOString()
            };
            jobs.push(newJob);
            commitMessage = `Add new job: ${job.title || 'Untitled'}`;
        }

        // 3. Commit the change back to the repo
        const updatedContent = Buffer.from(JSON.stringify(jobs, null, 2)).toString('base64');

        const putRes = await fetch(
            `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`,
            {
                method: 'PUT',
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    Accept: 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: commitMessage,
                    content: updatedContent,
                    sha: currentSha,
                }),
            }
        );

        if (!putRes.ok) {
            const errorText = await putRes.text();
            console.error('GitHub API Error:', errorText);
            throw new Error(`Failed to commit file to GitHub: ${putRes.statusText}`);
        }

        return res.status(200).json({
            message: action === 'delete'
                ? 'Job deleted! The site repository has been updated and will redeploy in about 60 seconds.'
                : 'Job published! The site repository has been updated and will redeploy in about 60 seconds.'
        });

    } catch (error) {
        console.error('Error in manage-jobs:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}
