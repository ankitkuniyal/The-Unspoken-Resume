import { useState, useEffect,useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Smartphone, CloudSun, Leaf, Bot, ShieldCheck, MapPin, TrendingUp, Droplets } from 'lucide-react';
import AnimatedHeading from '../../ui/AnimatedHeading';

const KrishiSakhi = () => {
    const timeoutsRef = useRef([]);
    const [notifications, setNotifications] = useState([]);
    
    // Clear all timeouts on unmount
    useEffect(() => {
        return () => {
            timeoutsRef.current.forEach(clearTimeout);
            timeoutsRef.current = [];
        };
    }, []);

    const setTrackedTimeout = (fn, delay) => {
        const id = setTimeout(() => {
            fn();
            // Optional: remove id from ref after execution to keep array small, 
            // but for simple loop it's fine to just clear all on unmount
        }, delay);
        timeoutsRef.current.push(id);
        return id;
    };

    useEffect(() => {
        const scheduleNotifications = () => {
             // 1. Irrigation Alert
            setTrackedTimeout(() => {
                addNotification({
                    id: Date.now(),
                    icon: Droplets,
                    color: "bg-blue-100 text-blue-500",
                    title: "Irrigation Advisory",
                    message: "Low soil moisture. Water today.",
                    duration: 4000
                });
            }, 5000);

            // 2. Market Alert
            setTrackedTimeout(() => {
                addNotification({
                    id: Date.now() + 1,
                    icon: TrendingUp,
                    color: "bg-orange-100 text-orange-500",
                    title: "Market Update",
                    message: "Wheat price up by 5% in Mandi.",
                    duration: 4000
                });
            }, 7000);
        };

        scheduleNotifications();
        const intervalId = setInterval(scheduleNotifications, 14000); // 14s to ensure no overlap

        return () => clearInterval(intervalId);
    }, []);

    const addNotification = (notif) => {
        setNotifications(prev => [notif, ...prev]);
        // Auto dismiss with tracked timeout
        setTrackedTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== notif.id));
        }, notif.duration);
    };

  return (
    <section className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden bg-[#0a1f10] text-emerald-50">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#050f08] to-transparent pointer-events-none" />


      <div className="max-w-7xl mx-auto w-full px-6 md:px-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Content */}
        <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/30 border border-emerald-800/50 rounded-full text-xs font-mono text-emerald-400">
                <Smartphone size={12} />
                <span>React Native Mobile App</span>
            </div>

            <div className="space-y-2">
                <AnimatedHeading 
                    text="Krishi Sakhi"
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
                />
                <h3 className="text-2xl md:text-3xl text-emerald-400/80 font-medium">The Farmer's Digital Companion</h3>
            </div>

            <p className="text-lg text-emerald-100/60 leading-relaxed max-w-xl">
                A localized, intelligent assistant designed to bridge the information gap for farmers. 
                Provides real-time crop advisories, weather alerts, and pest identification powered by AI.
            </p>

            {/* Feature Grid - Interactive */}
            <div className="grid grid-cols-2 gap-4">
                {[
                    { icon: Bot, label: "AI Assistant for Farmers" },
                    { icon: CloudSun, label: "Weather Alerts" },
                    { icon: Leaf, label: "Crop Advisory" },
                    { icon: MapPin, label: "Location-based Advice" },
                ].map((item, i) => (
                    <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 78, 59, 0.3)" }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-emerald-900/10 border border-emerald-800/20 cursor-default transition-colors"
                    >
                        <item.icon size={18} className="text-emerald-400" />
                        <span className="text-sm font-medium">{item.label}</span>
                    </motion.div>
                ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 pt-2">
                {["React Native", "Firebase", "Express API","Gemini","Vision API"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-black/40 border border-emerald-900 rounded text-xs font-mono text-emerald-300">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4">
                <a href="https://github.com/ankitkuniyal/Krishi-Sakhi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-500 transition-colors">
                    <Github size={18} /> Source Code
                </a>
                <a href="https://youtu.be/scz2iePHu_Y" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-emerald-800 text-emerald-300 rounded-full font-medium hover:bg-emerald-900/30 transition-colors">
                    <ExternalLink size={18} /> View Demo
                </a>
            </div>
        </div>

        {/* Right: Mobile Simulator */}
        <div className="relative flex justify-center lg:justify-end">
            {/* Phone Frame */}
            <motion.div 
                initial={{ rotateY: 0, rotateX: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-[320px] h-[640px] bg-white rounded-[2.5rem] border-8 border-neutral-900 shadow-2xl overflow-hidden font-sans select-none"
            >
                {/* Status Bar */}
                <div className="absolute top-0 w-full h-8 bg-white z-20 flex justify-between px-6 items-center text-[10px] text-neutral-800 font-medium">
                    <span>11:48</span>
                    <div className="flex gap-1 items-center">
                        <span className="font-bold">5G</span>
                        <div className="w-5 h-3 bg-neutral-800 rounded-[2px] relative overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-[80%] bg-white" />
                        </div>
                    </div>
                </div>

                {/* App Content */}
                <div className="relative h-full w-full bg-[#f8f9fa] overflow-y-auto pb-20 no-scrollbar">
                    
                    Notifications Container
                    <div className="absolute top-14 left-0 right-0 px-4 z-50 flex flex-col gap-2 pointer-events-none">
                        <AnimatePresence>
                            {notifications.map((n) => (
                                <motion.div 
                                    key={n.id}
                                    initial={{ y: -20, opacity: 0, scale: 0.9 }}
                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                    exit={{ y: -20, opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] border border-emerald-100 flex gap-3 items-center"
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${n.color}`}>
                                        <n.icon size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-neutral-800">{n.title}</p>
                                        <p className="text-[10px] text-neutral-500 leading-tight">{n.message}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* App Header */}
                    <div className="pt-12 px-6 pb-4 flex justify-between items-center bg-white sticky top-0 z-10">
                        <div>
                            <h2 className="text-lg font-bold text-emerald-800">Krishi Sakhi</h2>
                            <p className="text-[10px] text-neutral-400 font-medium tracking-wide">SMART AGRICULTURE</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <motion.div 
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white" 
                                />
                                <Bot className="text-neutral-600" size={20} />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 overflow-hidden flex items-center justify-center">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ankit" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="px-5 space-y-6 pt-2">
                        
                        {/* Greeting Card */}
                        <div className="bg-white p-5 rounded-3xl shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] border border-neutral-100">
                             <h3 className="text-xl font-bold text-neutral-800 leading-tight">
                                Good Evening, <br /> Ankit Kuniyal ! 👋
                             </h3>
                             <p className="text-xs text-neutral-400 mt-1 font-medium">Monday 29 September, 2025</p>
                        </div>

                        {/* Weather Card */}
                        <div className="relative overflow-hidden rounded-3xl p-5 text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)] group">
                            {/* Background Image/Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 z-0" />
                            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1625246333195-58f21a408b59?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay z-0" />
                            
                            {/* Content */}
                            <div className="relative z-10 flex flex-col gap-4">
                                <div className="flex items-center gap-1.5 text-[10px] bg-white/20 backdrop-blur-md w-fit px-2 py-1 rounded-full border border-white/10">
                                    <MapPin size={10} className="text-emerald-100" />
                                    <span className="font-medium">Lat: 28.79, Lon: 77.54</span>
                                </div>

                                <div className="flex justify-between items-center mt-2">
                                    <div>
                                        <h1 className="text-5xl font-bold tracking-tighter">30°<span className="text-3xl opacity-60">C</span></h1>
                                        <p className="text-sm font-medium opacity-90 mt-1">Partly cloudy</p>
                                    </div>
                                    <motion.div
                                        animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <CloudSun size={56} className="text-yellow-300 drop-shadow-lg" />
                                    </motion.div>
                                </div>

                                {/* Mini Forecast */}
                                <div className="flex justify-between mt-4 pt-4 border-t border-white/20">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                                        <div key={day} className="flex flex-col items-center gap-1">
                                            <span className="text-[9px] font-medium opacity-80">{day}</span>
                                            {i % 2 === 0 ? <CloudSun size={12} /> : <Leaf size={12} />}
                                            <span className="text-[10px] font-bold">{28 + i}°</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Insights Section */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center px-1">
                                <h4 className="font-bold text-neutral-800">Agricultural Insights</h4>
                                <span className="text-[10px] bg-neutral-100 px-2 py-1 rounded-full text-neutral-500 font-medium">English ▼</span>
                            </div>
                            
                            <div className="h-32 rounded-2xl bg-neutral-200 relative overflow-hidden group">
                                <img 
                                    src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?q=80&w=1000&auto=format&fit=crop" 
                                    alt="Farming" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                                    <p className="text-white text-sm font-bold">Modern Irrigation Techniques</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-0 w-full bg-white border-t border-neutral-100 py-3 px-6 flex justify-between items-end z-30 pb-6 rounded-b-[2rem]">
                    {[
                        { icon: Leaf, label: "Home", active: true },
                        { icon: CloudSun, label: "Activity" },
                        { icon: Bot, label: "Chat" },
                        { icon: ShieldCheck, label: "Market" }
                    ].map((item) => (
                        <div key={item.label} className="flex flex-col items-center gap-1 group cursor-pointer hover:scale-110 transition-transform">
                            <div className={`p-2 rounded-full transition-colors ${item.active ? 'bg-emerald-100 text-emerald-600' : 'text-neutral-400 group-hover:text-emerald-500'}`}>
                                <item.icon size={20} />
                            </div>
                            <span className={`text-[9px] font-medium ${item.active ? 'text-emerald-800' : 'text-neutral-400'}`}>{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-neutral-200 rounded-full z-40" />

            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default KrishiSakhi;
