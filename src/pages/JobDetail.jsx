import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, MapPin, Briefcase, Clock, DollarSign, UploadCloud, CheckCircle, AlertCircle } from 'lucide-react';
import jobsData from '../data/jobs.json';

const JobDetail = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        coverLetter: ''
    });
    const [resumeFile, setResumeFile] = useState(null);

    // Submission State
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    useEffect(() => {
        // Find job from imported JSON
        const foundJob = jobsData.find(j => j.id.toString() === id);
        setJob(foundJob);
        setLoading(false);
    }, [id]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                setStatus({ type: 'error', message: 'File size must be less than 5MB.' });
                setResumeFile(null);
                return;
            }
            setResumeFile(file);
            setStatus({ type: '', message: '' });
        }
    };

    const convertFileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            if (!resumeFile) {
                throw new Error('Please attach your resume (PDF or DOCX).');
            }

            const base64Resume = await convertFileToBase64(resumeFile);

            const payload = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                jobId: job.id,
                jobTitle: job.title,
                resumeBase64: base64Resume,
                resumeName: resumeFile.name,
                resumeMimeType: resumeFile.type
            };

            const response = await fetch('/api/apply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong. Please try again.');
            }

            setStatus({ type: 'success', message: 'Application transmission successful. Our talent specialists will review your credentials and initiate a follow-up protocol.' });
            setFormData({ name: '', email: '', phone: '', coverLetter: '' });
            setResumeFile(null);
            // Reset file input
            document.getElementById('file-upload').value = '';

        } catch (error) {
            setStatus({ type: 'error', message: error.message });
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div className="min-h-screen pt-24 bg-slate-50 dark:bg-navy-900 flex items-center justify-center">Loading...</div>;

    if (!job) {
        return (
            <div className="min-h-screen pt-24 bg-slate-50 dark:bg-navy-900 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">Job Not Found</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">The technical position you are seeking may have reached its conclusion or the specific resource identifier is invalid.</p>
                <Link to="/careers" className="text-primary hover:underline flex items-center gap-2 font-medium">
                    <ChevronLeft className="w-5 h-5" /> Back to Careers
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50 dark:bg-navy-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link to="/careers" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary mb-8 transition-colors">
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back to all jobs
                </Link>

                {/* Job Header */}
                <div className="bg-white dark:bg-navy-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-navy-700 mb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-light-teal text-primary">
                            {job.department}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 dark:text-white mb-6">
                        {job.title}
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-slate-200 dark:border-navy-700">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-slate-100 dark:bg-navy-700 rounded-lg text-slate-500 dark:text-slate-400 text-primary">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Location</p>
                                <p className="text-sm font-semibold text-navy-900 dark:text-white">{job.location}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-slate-100 dark:bg-navy-700 rounded-lg text-slate-500 dark:text-slate-400 text-primary">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Job Type</p>
                                <p className="text-sm font-semibold text-navy-900 dark:text-white">{job.type}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-slate-100 dark:bg-navy-700 rounded-lg text-slate-500 dark:text-slate-400 text-primary">
                                <DollarSign className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Salary</p>
                                <p className="text-sm font-semibold text-navy-900 dark:text-white">{job.salaryRange ? `${job.currency || '$'}${job.salaryRange}` : 'Competitive'}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-slate-100 dark:bg-navy-700 rounded-lg text-slate-500 dark:text-slate-400 text-primary">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Experience</p>
                                <p className="text-sm font-semibold text-navy-900 dark:text-white">{job.experienceLevel || 'Not specified'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Layout */}
                <div className="grid lg:grid-cols-12 gap-8">

                    {/* Job Description */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="bg-white dark:bg-navy-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-navy-700 prose prose-slate dark:prose-invert max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: job.description }} />

                            {/* Fallback rendering if description wasn't formatted as HTML */}
                            {!job.description.includes('<') && (
                                <div className="whitespace-pre-wrap text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {job.description}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Application Form */}
                    <div className="lg:col-span-5">
                        <div className="bg-white dark:bg-navy-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-navy-700 sticky top-28">
                            <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">Apply for this position</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                                Complete the submission architecture below; our technical talent strategists will initiate a discovery session shortly.
                            </p>

                            <AnimatePresence>
                                {status.message && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`mb-6 p-4 rounded-xl flex items-start gap-3 text-sm ${status.type === 'success'
                                            ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20'
                                            : 'bg-red-50 text-red-800 dark:bg-red-500/10 dark:text-red-400 border border-red-200 dark:border-red-500/20'
                                            }`}
                                    >
                                        {status.type === 'success' ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                                        <p className="mt-0.5">{status.message}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="block w-full rounded-xl border-slate-300 dark:border-navy-600 bg-slate-50 dark:bg-navy-900/50 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm py-2.5 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="block w-full rounded-xl border-slate-300 dark:border-navy-600 bg-slate-50 dark:bg-navy-900/50 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm py-2.5 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="block w-full rounded-xl border-slate-300 dark:border-navy-600 bg-slate-50 dark:bg-navy-900/50 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm py-2.5 transition-colors"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Resume / CV *</label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 dark:border-navy-600 border-dashed rounded-xl bg-slate-50 dark:bg-navy-900/50 hover:bg-slate-100 dark:hover:bg-navy-900 transition-colors group relative cursor-pointer">
                                        <div className="space-y-2 text-center">
                                            <UploadCloud className="mx-auto h-10 w-10 text-slate-400 group-hover:text-primary transition-colors" />
                                            <div className="flex text-sm text-slate-600 dark:text-slate-400 items-center justify-center">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer bg-transparent rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                                                >
                                                    <span className="px-1 text-center block">
                                                        {resumeFile ? resumeFile.name : "Upload a file"}
                                                    </span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" required={!resumeFile} />
                                                </label>
                                            </div>
                                            <p className="text-xs text-slate-500 dark:text-slate-500">
                                                {resumeFile ? `${(resumeFile.size / 1024 / 1024).toFixed(2)} MB` : "PDF, DOCX up to 5MB"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                                    >
                                        {submitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </span>
                                        ) : (
                                            'Submit Application'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobDetail;
