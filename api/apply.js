import nodemailer from 'nodemailer';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10mb', // Base64 strings can be large
        },
    },
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, phone, jobId, jobTitle, resumeBase64, resumeName, resumeMimeType } = req.body;

    if (!name || !email || !resumeBase64) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const { GMAIL_USER, GMAIL_PASS, CLIENT_EMAIL } = process.env;

    if (!GMAIL_USER || !GMAIL_PASS || !CLIENT_EMAIL) {
        console.error('Missing email configuration in environment variables');
        return res.status(500).json({ message: 'Server Configuration Error: Missing email setup in Environment Variables' });
    }

    try {
        // Configure transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_PASS, // The 16-character App Password
            },
        });

        // Prepare email content
        const mailOptions = {
            from: `"Zest Portal" <${GMAIL_USER}>`,
            to: CLIENT_EMAIL, // Send to the client's destination email
            replyTo: email,
            subject: `New Application for ${jobTitle || 'Job'} - ${name}`,
            text: `
New Job Application Received

Applicant Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Job ID: ${jobId || 'N/A'}
- Job Title: ${jobTitle || 'N/A'}

Please find the applicant's resume attached.
      `,
            html: `
        <h2>New Job Application Received</h2>
        <table style="text-align: left; border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <th style="padding: 8px; border-bottom: 1px solid #ddd;">Field</th>
            <th style="padding: 8px; border-bottom: 1px solid #ddd;">Details</th>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Job Applied For</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${jobTitle || 'N/A'} (ID: ${jobId || 'N/A'})</td>
          </tr>
        </table>
        <p>Please find the applicant's resume attached to this email.</p>
      `,
            attachments: [
                {
                    filename: resumeName || 'resume.pdf',
                    content: resumeBase64.split('base64,').pop(), // Remove the data url prefix if exists
                    encoding: 'base64',
                    contentType: resumeMimeType || 'application/pdf',
                },
            ],
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Application submitted successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Failed to send application', error: error.message });
    }
}
