import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Search, Filter } from 'lucide-react';
import jobsData from '../data/jobs.json';
import SEO from '../components/SEO';
import { motion } from 'framer-motion'; // Keep motion as it's used

const Careers = () => {
    const [jobs] = useState(jobsData || []);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All');
    const [sortBy, setSortBy] = useState('Newest');

    const filteredJobs = jobs
        .filter(job => {
            const matchesSearch = job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.department?.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = filterType === 'All' || job.type === filterType;
            return matchesSearch && matchesType;
        })
        .sort((a, b) => {
            const dateA = new Date(a.createdAt || 0);
            const dateB = new Date(b.createdAt || 0);
            return sortBy === 'Newest' ? dateB - dateA : dateA - dateB;
        });

    const jobTypes = ['All', 'Full-time', 'Contract', 'Part-time', 'Freelance'];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50 dark:bg-navy-900">
            <SEO
                title="Careers"
                description="Join the Zest Technologies team. Explore your next professional milestone within our ecosystem of elite technical opportunities."
                url="/careers"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold text-navy-900 dark:text-white mb-6"
                    >
                        <div className="flex flex-col gap-3 mb-6">
                            <span>Join the <span className="text-primary">Zest</span> Team</span>
                            <span className="text-primary/70 font-bold tracking-[0.2em] text-sm uppercase">Energy. Expertise. Excellence.</span>
                        </div>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 dark:text-slate-300"
                    >
                        Explore your next professional milestone within our ecosystem of elite technical opportunities.
                    </motion.p>
                </div>

                {/* Search & Filter Bar */}
                <div className="bg-white dark:bg-navy-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-navy-700 mb-10">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search jobs by title or department..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-navy-600 rounded-xl bg-slate-50 dark:bg-navy-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            />
                        </div>
                        <div className="flex sm:w-auto relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Filter className="h-5 w-5 text-slate-400" />
                            </div>
                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="block w-full sm:w-48 pl-10 pr-10 py-3 border border-slate-200 dark:border-navy-600 rounded-xl bg-slate-50 dark:bg-navy-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-colors"
                            >
                                {jobTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex sm:w-auto relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="block w-full sm:w-48 px-4 py-3 border border-slate-200 dark:border-navy-600 rounded-xl bg-slate-50 dark:bg-navy-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            >
                                <option value="Newest">Sort by Newest</option>
                                <option value="Oldest">Sort by Oldest</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Job Listings */}
                <div className="space-y-6">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-navy-700 hover:border-primary/50 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                                    {/* Job Info */}
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-light-teal text-primary">
                                                {job.department}
                                            </span>
                                            {job.featured && (
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-500">
                                                    Featured
                                                </span>
                                            )}
                                        </div>

                                        <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                            <Link to={`/careers/${job.id}`}>{job.title}</Link>
                                        </h2>

                                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Briefcase className="w-4 h-4" />
                                                {job.type}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-4 h-4" />
                                                <span>Experience: {job.experienceLevel || 'Not specified'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-4 md:flex-col md:items-end md:justify-center">
                                        <p className="text-lg font-semibold text-navy-900 dark:text-white">
                                            {job.salaryRange ? `${job.currency || '$'}${job.salaryRange}` : 'Competitive'}
                                        </p>
                                        <Link
                                            to={`/careers/${job.id}`}
                                            className="inline-flex justify-center items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-xl text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary shadow-sm hover:shadow transition-all duration-200"
                                        >
                                            Apply Now
                                        </Link>
                                    </div>

                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white dark:bg-navy-800 rounded-2xl border border-dashed border-slate-300 dark:border-navy-600">
                            <Briefcase className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                            <h3 className="text-lg font-medium text-navy-900 dark:text-white mb-2">No jobs found</h3>
                            <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                                We couldn't find any positions matching your search criteria. Please try adjusting your filters.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Careers;
