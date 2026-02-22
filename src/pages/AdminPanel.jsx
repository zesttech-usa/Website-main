import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, PlusCircle, CheckCircle, AlertCircle, RefreshCw, Trash2 } from 'lucide-react';
import jobsData from '../data/jobs.json';

const AdminPanel = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const [jobsList, setJobsList] = useState(jobsData || []);

    const [formData, setFormData] = useState({
        title: '',
        department: '',
        location: '',
        location: '',
        type: 'Full-time',
        currency: '$',
        salaryRange: '',
        experienceLevel: '',
        description: '',
        featured: false
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [submitting, setSubmitting] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password.trim() === '') {
            setAuthError('Please enter the admin password');
            return;
        }
        // We'll proceed to show the form. The actual verification happens on the server.
        // If the password is wrong, the API will reject the submission.
        setIsAuthenticated(true);
        setAuthError('');
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmitJob = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setStatus({ type: 'processing', message: 'Publishing to Zest Portal... The site will update in about 60 seconds.' });

        try {
            const payload = {
                adminPassword: password, // Send password to authenticate request
                job: formData
            };

            const response = await fetch('/api/manage-jobs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                if (response.status === 401) {
                    setIsAuthenticated(false);
                    setAuthError('Invalid Admin Password. Please try again.');
                    throw new Error('Unauthorized');
                }
                throw new Error(data.message || 'Failed to publish job.');
            }

            setStatus({ type: 'success', message: data.message || 'Job published successfully!' });

            // Reset form
            setFormData({
                title: '',
                department: '',
                location: '',
                type: 'Full-time',
                currency: '$',
                salaryRange: '',
                experienceLevel: '',
                description: '',
                featured: false
            });

            // Add to UI optimistically
            setJobsList([...jobsList, { ...formData, id: Date.now() }]);

            setTimeout(() => {
                setStatus(prev => prev.type === 'success' ? { type: '', message: '' } : prev);
            }, 5000);
            setSubmitting(false);

        } catch (error) {
            if (error.message !== 'Unauthorized') {
                setStatus({ type: 'error', message: error.message });
            }
            setSubmitting(false);
        }
    };

    const handleDeleteJob = async (id) => {
        if (!window.confirm('Are you sure you want to delete this job posting? This cannot be undone.')) return;

        setSubmitting(true);
        setStatus({ type: 'processing', message: 'Deleting from Zest Portal... The site will update in about 60 seconds.' });

        try {
            const payload = {
                adminPassword: password,
                action: 'delete',
                jobId: id
            };

            const response = await fetch('/api/manage-jobs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                if (response.status === 401) {
                    setIsAuthenticated(false);
                    setAuthError('Invalid Admin Password. Please try again.');
                    throw new Error('Unauthorized');
                }
                throw new Error(data.message || 'Failed to delete job.');
            }

            setStatus({ type: 'success', message: data.message || 'Job deleted successfully!' });

            // Remove from UI list
            setJobsList(jobsList.filter(j => j.id.toString() !== id.toString()));

            setTimeout(() => {
                setStatus(prev => prev.type === 'success' ? { type: '', message: '' } : prev);
            }, 5000);
            setSubmitting(false);

        } catch (error) {
            if (error.message !== 'Unauthorized') {
                setStatus({ type: 'error', message: error.message });
            }
            setSubmitting(false);
        }
    };


    if (!isAuthenticated) {
        return (
            <div className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-navy-900 flex flex-col items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white dark:bg-navy-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-navy-700 w-full max-w-md text-center"
                >
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <ShieldCheck className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">Admin Portal</h1>
                    <p className="text-slate-500 dark:text-slate-400 mb-8">Enter your administrative password to continue to the Zest jobs dashboard.</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                placeholder="Admin Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full text-center px-4 py-3 rounded-xl border border-slate-300 dark:border-navy-600 bg-slate-50 dark:bg-navy-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors dark:text-white"
                            />
                            {authError && <p className="mt-2 text-sm text-red-500">{authError}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-navy-900 dark:bg-primary text-white dark:text-white rounded-xl font-medium hover:bg-navy-800 dark:hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            Access Dashboard
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-navy-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-display font-bold text-navy-900 dark:text-white">Job Publisher</h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">Publish new roles directly to the portal.</p>
                    </div>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                    >
                        Sign Out
                    </button>
                </div>

                <div className="bg-white dark:bg-navy-800 rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 dark:border-navy-700">

                    <AnimatePresence>
                        {status.message && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className={`mb-8 p-4 rounded-xl flex items-start gap-3 text-sm ${status.type === 'success'
                                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20'
                                    : status.type === 'error'
                                        ? 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20'
                                        : 'bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20'
                                    }`}
                            >
                                {status.type === 'success' && <CheckCircle className="w-5 h-5 shrink-0" />}
                                {status.type === 'error' && <AlertCircle className="w-5 h-5 shrink-0" />}
                                {status.type === 'processing' && <RefreshCw className="w-5 h-5 shrink-0 animate-spin" />}
                                <div className="mt-0.5">
                                    <p className="font-semibold mb-1">
                                        {status.type === 'processing' ? 'Processing Action' : status.type === 'success' ? 'Success' : 'Error'}
                                    </p>
                                    <p className={status.type === 'processing' ? 'animate-pulse' : ''}>{status.message}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form onSubmit={handleSubmitJob} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Job Title *</label>
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Senior React Developer"
                                    className="w-full rounded-xl border-slate-300 dark:border-navy-600 bg-slate-50 dark:bg-navy-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Department *</label>
                                <input
                                    type="text"
                                    name="department"
                                    required
                                    value={formData.department}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Engineering"
                                    className="w-full rounded-xl border-slate-300 dark:border-navy-600 bg-slate-50 dark:bg-navy-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Location *</label>
                                <input
                                    type="text"
                                    name="location"
                                    required
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Remote, US"
                                    className="w-full rounded-xl border-slate-300 dark:border-navy-600 bg-slate-50 dark:bg-navy-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Job Type</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleInputChange}
                                    className="w-full rounded-xl border-slate-300 dark:border-navy-600 bg-slate-50 dark:bg-navy-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white transition-colors"
                                >
                                    <option>Full-time</option>
                                    <option>Part-time</option>
                                    <option>Contract</option>
                                    <option>Freelance</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Experience Level</label>
                                <input
                                    type="text"
                                    name="experienceLevel"
                                    value={formData.experienceLevel}
                                    onChange={handleInputChange}
                                    placeholder="e.g. 3-5 Years"
                                    className="w-full rounded-xl border-slate-300 dark:border-navy-600 bg-slate-50 dark:bg-navy-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white transition-colors"
                                />
                            </div>

                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Salary Range</label>
                                <div className="flex relative">
                                    <select
                                        name="currency"
                                        value={formData.currency}
                                        onChange={handleInputChange}
                                        className="rounded-l-xl border-slate-300 dark:border-navy-600 bg-slate-100 dark:bg-navy-800 focus:border-primary focus:ring-primary dark:text-white transition-colors border-r-0 px-4"
                                    >
                                        <option value="$">$(USD)</option>
                                        <option value="₹">₹(INR)</option>
                                        <option value="€">€(EUR)</option>
                                        <option value="£">£(GBP)</option>
                                    </select>
                                    <input
                                        type="text"
                                        name="salaryRange"
                                        value={formData.salaryRange}
                                        onChange={handleInputChange}
                                        placeholder="e.g. 120k - 150k"
                                        className="w-full rounded-r-xl border-slate-300 dark:border-navy-600 bg-slate-50 dark:bg-navy-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Job Description (HTML allowed) *</label>
                                <textarea
                                    name="description"
                                    required
                                    rows="6"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Enter the job description. You can use basic HTML like <ul>, <li>, <strong>, <p>..."
                                    className="w-full rounded-xl border-slate-300 dark:border-navy-600 bg-slate-50 dark:bg-navy-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white transition-colors font-mono text-sm"
                                ></textarea>
                                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                                    Tip: Use &lt;p&gt; for paragraphs and &lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt; for lists to maintain formatting on the job detail page.
                                </p>
                            </div>

                            <div className="col-span-1 md:col-span-2">
                                <div className="flex items-center">
                                    <input
                                        id="featured"
                                        name="featured"
                                        type="checkbox"
                                        checked={formData.featured}
                                        onChange={handleInputChange}
                                        className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded"
                                    />
                                    <label htmlFor="featured" className="ml-2 block text-sm text-slate-700 dark:text-slate-300">
                                        Mark as Featured Job
                                    </label>
                                </div>
                            </div>

                        </div>

                        <div className="pt-6 border-t border-slate-200 dark:border-navy-700">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full sm:w-auto inline-flex justify-center items-center py-3 px-8 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                            >
                                {submitting ? (
                                    <>
                                        <RefreshCw className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                                        Publishing...
                                    </>
                                ) : (
                                    <>
                                        <PlusCircle className="-ml-1 mr-2 h-5 w-5" />
                                        Publish Job to Portal
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                </div>

                {/* Active Jobs List */}
                <div className="mt-12 bg-white dark:bg-navy-800 rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 dark:border-navy-700">
                    <h2 className="text-2xl font-display font-bold text-navy-900 dark:text-white mb-6">Active Jobs</h2>

                    {jobsList.length === 0 ? (
                        <p className="text-slate-500 dark:text-slate-400">No active job postings found.</p>
                    ) : (
                        <div className="space-y-4">
                            {jobsList.map(job => (
                                <div key={job.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-navy-600 bg-slate-50 dark:bg-navy-900/50">
                                    <div>
                                        <h3 className="font-bold text-navy-900 dark:text-white">{job.title}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{job.department} • {job.location}</p>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteJob(job.id)}
                                        disabled={submitting}
                                        className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 rounded-lg transition-colors disabled:opacity-50"
                                    >
                                        <Trash2 className="w-4 h-4 mr-2" />
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default AdminPanel;
