import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Database, Users, Briefcase, CheckCircle, XCircle, Search, LayoutDashboard, PieChart } from 'lucide-react';
import AnimatedHeading from '../../ui/AnimatedHeading';

const HireHive = () => {
    const [activeTab, setActiveTab] = useState('applicant'); // 'applicant' | 'employer'

    return (
        <section className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden bg-[#0f1115] text-slate-50">
            
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none" />
            <div className="absolute top-0 right-0 w-full h-[60vh] bg-gradient-to-b from-[#161b22] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full px-6 md:px-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                
                {/* Left: Dashboard Simulator */}
                <div className="relative flex justify-center lg:justify-start order-1 lg:order-1">
                    
                    {/* Window Frame */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-lg bg-[#1e232e] rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden"
                    >
                        {/* Browser Toolbar */}
                        <div className="h-10 bg-[#161a22] flex items-center px-4 gap-2 border-b border-slate-700/50">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="ml-4 flex-1 bg-[#0d1016] rounded flex items-center justify-center h-6 text-[10px] text-slate-500 font-mono">
                                hirehive/dashboard
                            </div>
                        </div>

                        {/* Interactive Toggle */}
                        <div className="flex border-b border-slate-700/50 bg-[#161a22]">
                            <button 
                                onClick={() => setActiveTab('applicant')}
                                className={`flex-1 py-3 text-xs font-medium transition-colors ${activeTab === 'applicant' ? 'text-blue-400 bg-[#1e232e] border-t-2 border-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                Applicant View
                            </button>
                            <button 
                                onClick={() => setActiveTab('employer')}
                                className={`flex-1 py-3 text-xs font-medium transition-colors ${activeTab === 'employer' ? 'text-blue-400 bg-[#1e232e] border-t-2 border-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                Employer View
                            </button>
                        </div>

                        {/* Simulator Content */}
                        <div className="p-6 min-h-[380px] bg-[#1e232e]">
                            <AnimatePresence mode="wait">
                                {activeTab === 'applicant' ? (
                                    <motion.div 
                                        key="applicant"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-white font-semibold">Recommended Jobs</h4>
                                            <div className="flex gap-2">
                                                <span className="w-20 h-6 bg-slate-800 rounded animate-pulse" />
                                            </div>
                                        </div>

                                        {/* Job Card with Match Score */}
                                        <div className="bg-[#252b36] p-4 rounded-lg border border-slate-700/50 relative overflow-hidden group">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h5 className="text-blue-100 font-medium">Senior Python Developer</h5>
                                                    <p className="text-xs text-slate-400 mt-1">TechFlow Systems • Remote</p>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <div className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-[10px] font-bold text-green-400">
                                                        92%
                                                    </div>
                                                    <span className="text-[9px] text-slate-500 mt-1">Match</span>
                                                </div>
                                            </div>
                                            <div className="mt-4 flex gap-2">
                                                <span className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] rounded border border-green-500/20">Flask</span>
                                                <span className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] rounded border border-green-500/20">SQL</span>
                                                <span className="px-2 py-1 bg-red-500/10 text-red-400 text-[10px] rounded border border-red-500/20">Docker (Missing)</span>
                                            </div>
                                            <div className="mt-4 pt-3 border-t border-slate-700/50 flex justify-between items-center">
                                                <span className="text-[10px] text-slate-500">Posted 2 days ago</span>
                                                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded transition-colors">Apply Now</button>
                                            </div>
                                        </div>

                                        {/* Application Status */}
                                        <div className="space-y-3">
                                            <h4 className="text-white text-sm font-semibold">My Applications</h4>
                                            <div className="bg-[#252b36] p-3 rounded-lg border border-slate-700/50 flex justify-between items-center">
                                                <div>
                                                    <p className="text-sm text-slate-200">Backend Engineer</p>
                                                    <p className="text-[10px] text-slate-400">Innovate AI</p>
                                                </div>
                                                <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-[10px] rounded">Pending</span>
                                            </div>
                                            <div className="bg-[#252b36] p-3 rounded-lg border border-slate-700/50 flex justify-between items-center opacity-60">
                                                <div>
                                                    <p className="text-sm text-slate-200">Data Analyst</p>
                                                    <p className="text-[10px] text-slate-400">DataCorp</p>
                                                </div>
                                                <span className="px-2 py-1 bg-red-500/10 text-red-500 border border-red-500/20 text-[10px] rounded">Rejected</span>
                                            </div>
                                        </div>

                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        key="employer"
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-white font-semibold">Applicant Screening</h4>
                                            <div className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full">New: 3</div>
                                        </div>

                                        {/* Filters */}
                                        <div className="flex gap-2">
                                            <div className="flex-1 bg-[#252b36] h-8 rounded border border-slate-700/50 flex items-center px-2 text-slate-400 text-xs gap-2">
                                                <Search size={12} />
                                                <span>Filter by skill...</span>
                                            </div>
                                            <div className="w-8 h-8 bg-[#252b36] rounded border border-slate-700/50 flex items-center justify-center text-slate-400">
                                                <Briefcase size={12} />
                                            </div>
                                        </div>

                                        {/* Applicant List */}
                                        <div className="space-y-3">
                                            {[
                                                { name: "Ankit Kuniyal", role: "Python Dev", match: "95%", status: "Shortlist" },
                                                { name: "Sarah Chen", role: "Python Dev", match: "88%", status: "Pending" },
                                                { name: "Mike Ross", role: "Python Dev", match: "45%", status: "Reject" },
                                            ].map((applicant, idx) => (
                                                <div key={idx} className="bg-[#252b36] p-3 rounded-lg border border-slate-700/50 flex items-center justify-between group hover:border-blue-500/30 transition-colors">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
                                                            {applicant.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <p className="text-xs font-medium text-slate-200">{applicant.name}</p>
                                                            <p className="text-[10px] text-slate-400">{applicant.role} • <span className={parseInt(applicant.match) > 80 ? 'text-green-400' : 'text-slate-400'}>{applicant.match} Match</span></p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button className="p-1 hover:bg-green-500/20 text-green-500 rounded"><CheckCircle size={14} /></button>
                                                        <button className="p-1 hover:bg-red-500/20 text-red-500 rounded"><XCircle size={14} /></button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Content */}
                <div className="space-y-8 order-2 lg:order-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/20 border border-blue-800/30 rounded-full text-xs font-mono text-blue-400">
                        <Database size={12} />
                        <span>Flask Web Application</span>
                    </div>

                    <div className="space-y-2">
                        <AnimatedHeading 
                            text="HireHive"
                            className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
                        />
                        <h3 className="text-2xl md:text-3xl text-blue-400/80 font-medium">Smart Recruitment Platform</h3>
                    </div>

                    <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                        A full-stack recruitment portal that streamlines the hiring process. 
                        Features role-based dashboards, automated skill matching algorithms, and real-time application tracking for employers and job seekers.
                    </p>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: Users, label: "Multi-User Roles" },
                            { icon: PieChart, label: "Skill Matching Score" },
                            { icon: LayoutDashboard, label: "Separate Dashboards" },
                            { icon: CheckCircle, label: "Application Tracking" },
                        ].map((item, i) => (
                            <motion.div 
                                key={i} 
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.5)" }}
                                className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/60 cursor-default transition-colors"
                            >
                                <item.icon size={18} className="text-blue-500" />
                                <span className="text-sm font-medium text-slate-300">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 pt-2">
                        {["Flask", "Python", "SQLAlchemy", "Jinja2", "SQLite"].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-[#0b0d10] border border-slate-800 rounded text-xs font-mono text-slate-400 hover:text-blue-300 transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                        <a href="https://github.com/ankitkuniyal/HireHive" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-500 transition-colors">
                            <Github size={18} /> Source Code
                        </a>
                        <a href="https://drive.google.com/file/d/1KbiDpmTQkaHIU5bykHs3kqJN4GGtTyVI/view" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 rounded-full font-medium hover:bg-slate-800 transition-colors">
                            <ExternalLink size={18} /> Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HireHive;
