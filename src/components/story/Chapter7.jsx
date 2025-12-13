import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import ScrollRevealText from '../ui/ScrollRevealText';
import { motion } from 'framer-motion';
import { LineChart, Coins, Rocket } from 'lucide-react';

const BusinessCard = ({ icon: Icon, title, subtitle, desc, delay }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="flex-1 p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-900/10 border border-neutral-800 hover:border-emerald-500/30 transition-all group text-left relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Icon size={64} className="text-white" />
        </div>
        
        <div className="relative z-10">
            <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <Icon size={20} />
            </div>
            <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
            <p className="text-xs font-mono text-emerald-500 mb-3 uppercase tracking-wider">{subtitle}</p>
            <p className="text-sm text-neutral-400 leading-relaxed text-balance">{desc}</p>
        </div>
    </motion.div>
);

const Chapter7 = () => {
    return (
        <StorySection id="chapter-7" className="min-h-[90vh] flex flex-col justify-center py-24 relative">
             {/* Background Hint of "Finance" - Green/Emerald Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto w-full text-center space-y-20 relative z-10">
                
                {/* Header Area */}
                <div className="space-y-8">
                    <div>
                        <span className="text-emerald-500 font-mono text-sm mb-4 block">Chapter 7</span>
                        <AnimatedHeading text="Beyond Engineering" className="text-4xl md:text-7xl justify-center font-bold tracking-tight" />
                    </div>
                    
                    <ScrollRevealText><p className="text-xl md:text-2xl text-neutral-300 font-light  leading-relaxed">Tech without business sense is just a hobby.<span className="text-white font-medium">I build assets,not just repos.</span></p></ScrollRevealText>
                </div>

                {/* Key Focus Areas - Finance/Startup/Business */}
                <div className="grid md:grid-cols-3 gap-6">
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
                <div className="max-w-2xl mx-auto space-y-6">
                     <ScrollRevealText>
                        <p className="text-neutral-400 text-lg">
                            My interest spans beyond the IDE—into <span className="text-white">markets, finance, and strategy</span>.
                        </p>
                    </ScrollRevealText>

                    <ScrollRevealText>
                        <p className="text-white font-medium text-lg italic">
                            "The best code is the one that builds a sustainable business."
                        </p>
                    </ScrollRevealText>
                </div>

            </div>
        </StorySection>
    );
};

export default Chapter7;
