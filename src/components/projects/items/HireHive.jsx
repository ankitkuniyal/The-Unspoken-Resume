import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Database,
  Users,
  Briefcase,
  CheckCircle,
  XCircle,
  Search,
  LayoutDashboard,
  PieChart,
} from 'lucide-react';
import AnimatedHeading from '../../ui/AnimatedHeading';
import ScrollText from '../../ui/ScrollText';

const HireHive = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('applicant'); // 'applicant' | 'employer'

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section className="relative z-40 h-screen bg-gradient-to-br from-blue-950/30 via-[#0f1115] to-neutral-950">
      <motion.div
        ref={sectionRef}
        style={{ opacity }}
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden rounded-t-3xl text-slate-50"
      >
        {/* Background Ambience */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_50%)]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[60vh] w-full bg-gradient-to-b from-[#161b22] to-transparent" />

      <motion.div
        style={{ scale }}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 md:px-20 lg:grid-cols-2"
      >
        {/* Left: Dashboard Simulator */}
        <div className="relative order-1 flex justify-center lg:order-1 lg:justify-start">
          {/* Window Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-slate-700/50 bg-[#1e232e] shadow-2xl"
          >
            {/* Browser Toolbar */}
            <div className="flex h-10 items-center gap-2 border-b border-slate-700/50 bg-[#161a22] px-4">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 flex h-6 flex-1 items-center justify-center rounded bg-[#0d1016] font-mono text-[10px] text-slate-500">
                hirehive/dashboard
              </div>
            </div>

            {/* Interactive Toggle */}
            <div className="flex border-b border-slate-700/50 bg-[#161a22]">
              <button
                onClick={() => setActiveTab('applicant')}
                className={`flex-1 py-3 text-xs font-medium transition-colors ${activeTab === 'applicant' ? 'border-t-2 border-blue-400 bg-[#1e232e] text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Applicant View
              </button>
              <button
                onClick={() => setActiveTab('employer')}
                className={`flex-1 py-3 text-xs font-medium transition-colors ${activeTab === 'employer' ? 'border-t-2 border-blue-400 bg-[#1e232e] text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Employer View
              </button>
            </div>

            {/* Simulator Content */}
            <div className="min-h-[380px] bg-[#1e232e] p-6">
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
                      <h4 className="font-semibold text-white">Recommended Jobs</h4>
                      <div className="flex gap-2">
                        <span className="h-6 w-20 animate-pulse rounded bg-slate-800" />
                      </div>
                    </div>

                    {/* Job Card with Match Score */}
                    <div className="group relative overflow-hidden rounded-lg border border-slate-700/50 bg-[#252b36] p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-medium text-blue-100">Senior Python Developer</h5>
                          <p className="mt-1 text-xs text-slate-400">TechFlow Systems • Remote</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-500 text-[10px] font-bold text-green-400">
                            92%
                          </div>
                          <span className="mt-1 text-[9px] text-slate-500">Match</span>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <span className="rounded border border-green-500/20 bg-green-500/10 px-2 py-1 text-[10px] text-green-400">
                          Flask
                        </span>
                        <span className="rounded border border-green-500/20 bg-green-500/10 px-2 py-1 text-[10px] text-green-400">
                          SQL
                        </span>
                        <span className="rounded border border-red-500/20 bg-red-500/10 px-2 py-1 text-[10px] text-red-400">
                          Docker (Missing)
                        </span>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-slate-700/50 pt-3">
                        <span className="text-[10px] text-slate-500">Posted 2 days ago</span>
                        <button className="rounded bg-blue-600 px-3 py-1 text-xs text-white transition-colors hover:bg-blue-500">
                          Apply Now
                        </button>
                      </div>
                    </div>

                    {/* Application Status */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-white">My Applications</h4>
                      <div className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-[#252b36] p-3">
                        <div>
                          <p className="text-sm text-slate-200">Backend Engineer</p>
                          <p className="text-[10px] text-slate-400">Innovate AI</p>
                        </div>
                        <span className="rounded border border-yellow-500/20 bg-yellow-500/10 px-2 py-1 text-[10px] text-yellow-500">
                          Pending
                        </span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-[#252b36] p-3 opacity-60">
                        <div>
                          <p className="text-sm text-slate-200">Data Analyst</p>
                          <p className="text-[10px] text-slate-400">DataCorp</p>
                        </div>
                        <span className="rounded border border-red-500/20 bg-red-500/10 px-2 py-1 text-[10px] text-red-500">
                          Rejected
                        </span>
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
                      <h4 className="font-semibold text-white">Applicant Screening</h4>
                      <div className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] text-white">
                        New: 3
                      </div>
                    </div>

                    {/* Filters */}
                    <div className="flex gap-2">
                      <div className="flex h-8 flex-1 items-center gap-2 rounded border border-slate-700/50 bg-[#252b36] px-2 text-xs text-slate-400">
                        <Search size={12} />
                        <span>Filter by skill...</span>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded border border-slate-700/50 bg-[#252b36] text-slate-400">
                        <Briefcase size={12} />
                      </div>
                    </div>

                    {/* Applicant List */}
                    <div className="space-y-3">
                      {[
                        {
                          name: 'Ankit Kuniyal',
                          role: 'Python Dev',
                          match: '95%',
                          status: 'Shortlist',
                        },
                        { name: 'Sarah Chen', role: 'Python Dev', match: '88%', status: 'Pending' },
                        { name: 'Mike Ross', role: 'Python Dev', match: '45%', status: 'Reject' },
                      ].map((applicant, idx) => (
                        <div
                          key={idx}
                          className="group flex items-center justify-between rounded-lg border border-slate-700/50 bg-[#252b36] p-3 transition-colors hover:border-blue-500/30"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-slate-300">
                              {applicant.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-200">{applicant.name}</p>
                              <p className="text-[10px] text-slate-400">
                                {applicant.role} •{' '}
                                <span
                                  className={
                                    parseInt(applicant.match) > 80
                                      ? 'text-green-400'
                                      : 'text-slate-400'
                                  }
                                >
                                  {applicant.match} Match
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                            <button className="rounded p-1 text-green-500 hover:bg-green-500/20">
                              <CheckCircle size={14} />
                            </button>
                            <button className="rounded p-1 text-red-500 hover:bg-red-500/20">
                              <XCircle size={14} />
                            </button>
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
        <div className="order-2 space-y-8 lg:order-2">
          <ScrollText delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-800/30 bg-blue-900/20 px-3 py-1 font-mono text-xs text-blue-400">
              <Database size={12} />
              <span>Flask Web Application</span>
            </div>
          </ScrollText>

          <div className="space-y-2">
            <AnimatedHeading
              text="HireHive"
              className="text-5xl font-bold tracking-tighter text-white md:text-7xl"
            />
            <ScrollText delay={0.05}>
              <h3 className="text-2xl font-medium text-blue-400/80 md:text-3xl">
                Smart Recruitment Platform
              </h3>
            </ScrollText>
          </div>

          <ScrollText delay={0.1}>
            <p className="max-w-xl text-lg leading-relaxed text-slate-400">
              A full-stack recruitment portal that streamlines the hiring process. Features role-based
              dashboards, automated skill matching algorithms, and real-time application tracking for
              employers and job seekers.
            </p>
          </ScrollText>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, label: 'Multi-User Roles' },
              { icon: PieChart, label: 'Skill Matching Score' },
              { icon: LayoutDashboard, label: 'Separate Dashboards' },
              { icon: CheckCircle, label: 'Application Tracking' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
                className="flex cursor-default items-center gap-3 rounded-lg border border-slate-800/60 bg-slate-900/40 p-3 transition-colors"
              >
                <item.icon size={18} className="text-blue-500" />
                <span className="text-sm font-medium text-slate-300">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 pt-2">
            {['Flask', 'Python', 'SQLAlchemy', 'Jinja2', 'SQLite'].map((tech) => (
              <span
                key={tech}
                className="cursor-default rounded border border-slate-800 bg-[#0b0d10] px-3 py-1 font-mono text-xs text-slate-400 transition-colors hover:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/ankitkuniyal/HireHive"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-500"
            >
              <Github size={18} /> Source Code
            </a>
            <a
              href="https://drive.google.com/file/d/1KbiDpmTQkaHIU5bykHs3kqJN4GGtTyVI/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-300 transition-colors hover:bg-slate-800"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          </div>
        </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HireHive;
