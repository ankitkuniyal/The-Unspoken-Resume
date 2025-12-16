import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Smartphone,
  CloudSun,
  Leaf,
  Bot,
  ShieldCheck,
  MapPin,
  TrendingUp,
  Droplets,
} from 'lucide-react';
import AnimatedHeading from '../../ui/AnimatedHeading';
import ScrollText from '../../ui/ScrollText';

const KrishiSakhi = () => {
  const sectionRef = useRef(null);
  const timeoutsRef = useRef([]);
  const [notifications, setNotifications] = useState([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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

  const addNotification = useCallback((notif) => {
    setNotifications((prev) => [notif, ...prev]);
    // Auto dismiss with tracked timeout
    setTrackedTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== notif.id));
    }, notif.duration);
  }, []);


  useEffect(() => {
    const scheduleNotifications = () => {
      // 1. Irrigation Alert
      setTrackedTimeout(() => {
        addNotification({
          id: Date.now(),
          icon: Droplets,
          color: 'bg-blue-100 text-blue-500',
          title: 'Irrigation Advisory',
          message: 'Low soil moisture. Water today.',
          duration: 4000,
        });
      }, 5000);

      // 2. Market Alert
      setTrackedTimeout(() => {
        addNotification({
          id: Date.now() + 1,
          icon: TrendingUp,
          color: 'bg-orange-100 text-orange-500',
          title: 'Market Update',
          message: 'Wheat price up by 5% in Mandi.',
          duration: 4000,
        });
      }, 7000);
    };

    scheduleNotifications();
    const intervalId = setInterval(scheduleNotifications, 14000); // 14s to ensure no overlap

    return () => clearInterval(intervalId);
  }, [addNotification]);


  return (
    <section className="relative z-30 h-screen bg-gradient-to-br from-emerald-950/40 via-[#0a1f10] to-neutral-950">
      <motion.div
        ref={sectionRef}
        style={{ opacity }}
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden rounded-t-3xl text-emerald-50"
      >
        {/* Background Ambience */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[50vh] w-full bg-gradient-to-t from-[#050f08] to-transparent" />

      <motion.div
        style={{ scale }}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 md:px-20 lg:grid-cols-2"
      >
        {/* Left: Content */}
        <div className="space-y-8">
          <ScrollText delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/50 bg-emerald-900/30 px-3 py-1 font-mono text-xs text-emerald-400">
              <Smartphone size={12} />
              <span>React Native Mobile App</span>
            </div>
          </ScrollText>

          <div className="space-y-2">
            <AnimatedHeading
              text="Krishi Sakhi"
              className="text-5xl font-bold tracking-tighter text-white md:text-7xl"
            />
            <ScrollText delay={0.05}>
              <h3 className="text-2xl font-medium text-emerald-400/80 md:text-3xl">
                AI-Powered Farm Companion
              </h3>
            </ScrollText>
          </div>

          <ScrollText delay={0.1}>
            <p className="max-w-xl text-lg leading-relaxed text-emerald-100/80">
              A mobile-first agricultural assistant leveraging AI to provide personalized crop
              recommendations, real-time weather insights, and market price alerts for farmers.
            </p>
          </ScrollText>

          {/* Feature Grid - Interactive */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Bot, label: 'AI Assistant for Farmers' },
              { icon: CloudSun, label: 'Weather Alerts' },
              { icon: Leaf, label: 'Crop Advisory' },
              { icon: MapPin, label: 'Location-based Advice' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 78, 59, 0.3)' }}
                className="flex cursor-default items-center gap-3 rounded-lg border border-emerald-800/20 bg-emerald-900/10 p-3 transition-colors"
              >
                <item.icon size={18} className="text-emerald-400" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 pt-2">
            {['React Native', 'Firebase', 'Express API', 'Gemini', 'Vision API'].map((tech) => (
              <span
                key={tech}
                className="rounded border border-emerald-900 bg-black/40 px-3 py-1 font-mono text-xs text-emerald-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/ankitkuniyal/Krishi-Sakhi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-500"
            >
              <Github size={18} /> Source Code
            </a>
            <a
              href="https://youtu.be/scz2iePHu_Y"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-emerald-800 px-6 py-3 font-medium text-emerald-300 transition-colors hover:bg-emerald-900/30"
            >
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
            className="relative h-[640px] w-[320px] select-none overflow-hidden rounded-[2.5rem] border-8 border-neutral-900 bg-white font-sans shadow-2xl"
          >
            {/* Status Bar */}
            <div className="absolute top-0 z-20 flex h-8 w-full items-center justify-between bg-white px-6 text-[10px] font-medium text-neutral-800">
              <span>11:48</span>
              <div className="flex items-center gap-1">
                <span className="font-bold">5G</span>
                <div className="relative h-3 w-5 overflow-hidden rounded-[2px] bg-neutral-800">
                  <div className="absolute left-0 top-0 h-full w-[80%] bg-white" />
                </div>
              </div>
            </div>

            {/* App Content */}
            <div className="no-scrollbar relative h-full w-full overflow-y-auto bg-[#f8f9fa] pb-20">
              Notifications Container
              <div className="pointer-events-none absolute left-0 right-0 top-14 z-50 flex flex-col gap-2 px-4">
                <AnimatePresence>
                  {notifications.map((n) => (
                    <motion.div
                      key={n.id}
                      initial={{ y: -20, opacity: 0, scale: 0.9 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -20, opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white/95 p-3 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] backdrop-blur-md"
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${n.color}`}
                      >
                        <n.icon size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-neutral-800">{n.title}</p>
                        <p className="text-[10px] leading-tight text-neutral-500">{n.message}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              {/* App Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-6 pb-4 pt-12">
                <div>
                  <h2 className="text-lg font-bold text-emerald-800">Krishi Sakhi</h2>
                  <p className="text-[10px] font-medium tracking-wide text-neutral-400">
                    SMART AGRICULTURE
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -right-1 -top-1 h-2 w-2 rounded-full border border-white bg-red-500"
                    />
                    <Bot className="text-neutral-600" size={20} />
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-emerald-200 bg-emerald-100">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ankit"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6 px-5 pt-2">
                {/* Greeting Card */}
                <div className="rounded-3xl border border-neutral-100 bg-white p-5 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)]">
                  <h3 className="text-xl font-bold leading-tight text-neutral-800">
                    Good Evening, <br /> Ankit Kuniyal ! 👋
                  </h3>
                  <p className="mt-1 text-xs font-medium text-neutral-400">
                    Monday 29 September, 2025
                  </p>
                </div>

                {/* Weather Card */}
                <div className="group relative overflow-hidden rounded-3xl p-5 text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)]">
                  {/* Background Image/Gradient */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-500 to-emerald-700" />
                  <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1625246333195-58f21a408b59?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/20 px-2 py-1 text-[10px] backdrop-blur-md">
                      <MapPin size={10} className="text-emerald-100" />
                      <span className="font-medium">Lat: 28.79, Lon: 77.54</span>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <div>
                        <h1 className="text-5xl font-bold tracking-tighter">
                          30°<span className="text-3xl opacity-60">C</span>
                        </h1>
                        <p className="mt-1 text-sm font-medium opacity-90">Partly cloudy</p>
                      </div>
                      <motion.div
                        animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <CloudSun size={56} className="text-yellow-300 drop-shadow-lg" />
                      </motion.div>
                    </div>

                    {/* Mini Forecast */}
                    <div className="mt-4 flex justify-between border-t border-white/20 pt-4">
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
                  <div className="flex items-center justify-between px-1">
                    <h4 className="font-bold text-neutral-800">Agricultural Insights</h4>
                    <span className="rounded-full bg-neutral-100 px-2 py-1 text-[10px] font-medium text-neutral-500">
                      English ▼
                    </span>
                  </div>

                  <div className="group relative h-32 overflow-hidden rounded-2xl bg-neutral-200">
                    <img
                      src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?q=80&w=1000&auto=format&fit=crop"
                      alt="Farming"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-sm font-bold text-white">Modern Irrigation Techniques</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 z-30 flex w-full items-end justify-between rounded-b-[2rem] border-t border-neutral-100 bg-white px-6 py-3 pb-6">
              {[
                { icon: Leaf, label: 'Home', active: true },
                { icon: CloudSun, label: 'Activity' },
                { icon: Bot, label: 'Chat' },
                { icon: ShieldCheck, label: 'Market' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group flex cursor-pointer flex-col items-center gap-1 transition-transform hover:scale-110"
                >
                  <div
                    className={`rounded-full p-2 transition-colors ${item.active ? 'bg-emerald-100 text-emerald-600' : 'text-neutral-400 group-hover:text-emerald-500'}`}
                  >
                    <item.icon size={20} />
                  </div>
                  <span
                    className={`text-[9px] font-medium ${item.active ? 'text-emerald-800' : 'text-neutral-400'}`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-1 left-1/2 z-40 h-1 w-32 -translate-x-1/2 rounded-full bg-neutral-200" />
          </motion.div>
        </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default KrishiSakhi;
