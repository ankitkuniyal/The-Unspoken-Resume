import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import ScrollRevealText from '../ui/ScrollRevealText';
import { motion } from 'framer-motion';
import { LineChart, Rocket, Coins } from 'lucide-react';

const BusinessCard = ({ icon: Icon, title, subtitle, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
    whileHover={{ y: -10 }}
    className="group relative flex-1 overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/40 p-8 backdrop-blur-md transition-all duration-500 hover:border-emerald-500/30 hover:bg-neutral-900/60 hover:shadow-2xl"
  >
    {/* Floating Icon Background */}
    <div className="absolute right-0 top-0 p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-10">
      <Icon size={120} className="text-white" />
    </div>

    <div className="relative z-10 space-y-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-emerald-400 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:bg-emerald-500/10">
        <Icon size={28} />
      </div>
      
      <div>
        <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{title}</h3>
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600/80 group-hover:text-emerald-500">{subtitle}</p>
      </div>
      
      <p className="text-base leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors">{desc}</p>
    </div>
  </motion.div>
);

const BackgroundGraph = () => (
  <svg className="absolute inset-0 h-full w-full opacity-10" preserveAspectRatio="none">
    <motion.path
      d="M0,500 Q200,400 400,500 T800,300 T1200,400 T1600,200 V600 H0 Z"
      fill="url(#grad1)"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 3, ease: "easeInOut" }}
    />
     <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0 }} />
      </linearGradient>
    </defs>
  </svg>
)

const Chapter7 = () => {
  return (
    <StorySection
      id="chapter-7"
      className="relative flex min-h-screen flex-col justify-center py-24"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-900/10 blur-[150px]" />
      <BackgroundGraph />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 space-y-24 text-center">
        {/* Header Area */}
        <div className="space-y-8">
          <div>
            <span className="mb-6 block font-mono text-sm tracking-[0.3em] text-emerald-500 uppercase">Chapter 07</span>
            <AnimatedHeading
              text="Beyond Engineering"
              className="justify-center text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-8xl"
            />
          </div>

          <ScrollRevealText>
            <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-neutral-300 md:text-3xl">
              Tech without business sense is just a hobby. <br/>
              <span className="font-semibold text-white underline decoration-emerald-500/50 underline-offset-8">I build assets, not just repos.</span>
            </p>
          </ScrollRevealText>
        </div>

        {/* Key Focus Areas - Finance/Startup/Business */}
        <div className="grid gap-8 md:grid-cols-3">
          <BusinessCard
            icon={Rocket}
            title="Startup Velocity"
            subtitle="Zero to One"
            desc="Navigating ambiguity. Shipping MVPs that actually validate markets, not just features."
            delay={0.2}
          />
          <BusinessCard
            icon={Coins}
            title="Capital Efficiency"
            subtitle="ROI Focused"
            desc="Treating compute & engineering time as capital allocation. Every line of code has a cost."
            delay={0.4}
          />
          <BusinessCard
            icon={LineChart}
            title="Business Leverage"
            subtitle="Impact > Output"
            desc="Solving problems that move the P&L. If it doesn't help the business grow, why build it?"
            delay={0.6}
          />
        </div>

        {/* Closing Narrative */}
        <div className="mx-auto max-w-2xl space-y-8">
          <ScrollRevealText>
             <div className="flex justify-center">
                <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
             </div>
          </ScrollRevealText>
          
          <ScrollRevealText>
            <p className="text-2xl font-medium italic text-white md:text-3xl">
              "The best code is the one that builds a sustainable business."
            </p>
          </ScrollRevealText>
        </div>
      </div>
    </StorySection>
  );
};

export default Chapter7;

