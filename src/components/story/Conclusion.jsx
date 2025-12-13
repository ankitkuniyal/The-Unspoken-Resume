import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import ScrollRevealText from '../ui/ScrollRevealText';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Conclusion = () => {
    return (
        <StorySection id="conclusion" className="min-h-[50vh] flex flex-col justify-center pb-20 pt-20 border-t border-neutral-900 bg-neutral-950/50">
            <div className="max-w-3xl mx-auto text-center space-y-12">
                
                {/* Visual Separator */}
                <div className="flex justify-center mb-8">
                     <div className="w-1 h-12 bg-gradient-to-b from-neutral-800 to-transparent" />
                </div>

                <AnimatedHeading text="Where I’m Headed" className="text-3xl md:text-5xl justify-center text-neutral-200" />

                <div className="space-y-8">
                    <ScrollRevealText>
                         <p className="text-lg text-neutral-400 font-light">
                            I’m actively looking for problems where:
                        </p>
                    </ScrollRevealText>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        {[
                            "Systems scale beyond assumptions",
                            "Data reveals uncomfortable truths",
                            "Reliability matters more than speed"
                        ].map((text, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                viewport={{ once: true }}
                                className="px-5 py-3 rounded-full border border-neutral-800 bg-neutral-900/40 text-neutral-300 text-sm font-medium hover:border-neutral-700 transition-colors"
                            >
                                {text}
                            </motion.div>
                        ))}
                    </div>

                    <ScrollRevealText>
                        <p className="text-xl text-white font-medium mt-8 leading-relaxed">
                            I’m still learning. <br/>
                            <span className="text-neutral-500 text-base font-normal">Just with better questions — and fewer shortcuts.</span>
                        </p>
                    </ScrollRevealText>
                </div>
                
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
                >
                     <Link to="/projects" className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        See My Work 
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                     </Link>
                     <Link to="/contact" className="px-8 py-4 text-neutral-400 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase">
                        Get in Touch
                     </Link>
                </motion.div>

            </div>
        </StorySection>
    );
};

export default Conclusion;
