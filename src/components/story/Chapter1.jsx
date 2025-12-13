import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import ScrollRevealText from '../ui/ScrollRevealText';
import { motion } from 'framer-motion';

const Chapter1 = () => {
    return (
        <StorySection id="chapter-1" className="bg-neutral-900/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="text-accent font-mono text-sm mb-4 block">Chapter 1</span>
                    <AnimatedHeading text="Learning without clarity" className="text-3xl md:text-5xl" />
                    
                    <div className="space-y-6 mt-8">
                        <ScrollRevealText>
                            <p>
                                I started where most people do — learning syntax, solving small problems, and 
                                trying to understand why code behaves the way it does.
                            </p>
                        </ScrollRevealText>
                        <ScrollRevealText>
                            <p className="font-mono text-accent/80">
                                Python, Java, JavaScript. <br/>
                                Data structures, databases, operating systems.
                            </p>
                        </ScrollRevealText>
                        <ScrollRevealText>
                            <p>
                                At that stage, I didn’t know what I wanted to build.
                                I only knew I wanted to understand how things work underneath.
                            </p>
                        </ScrollRevealText>
                        <ScrollRevealText>
                            <p className="font-semibold text-white">
                                Curiosity came before direction.
                            </p>
                        </ScrollRevealText>
                    </div>
                </div>

                {/* Visual / Decor for Chapter 1 */}
                <div className="relative h-[400px] w-full hidden md:block">
                     <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent rounded-2xl border border-neutral-800/50 backdrop-blur-sm p-6 overflow-hidden">
                        {/* Floating code fragments */}
                        <motion.div 
                            initial={{ opacity: 0.3, y: 50 }}
                            whileInView={{ opacity: 0.6, y: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="font-mono text-xs text-neutral-500 space-y-2"
                        >
                           <p>const start = () ={'>'} {"{"}</p>
                           <p className="pl-4">try {"{"}</p>
                           <p className="pl-8">buildEverything();</p>
                           <p className="pl-4">{"}"} catch (error) {"{"}</p>
                           <p className="pl-8">console.log("Why??", error);</p>
                           <p className="pl-4">{"}"}</p>
                           <p>{"}"}</p>
                        </motion.div>

                         <motion.div 
                            className="absolute top-20 right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                     </div>
                </div>
            </div>
            {/* Connecting Timeline Line */}
            <div className="absolute bottom-0 left-8 md:left-[50%] transform -translate-x-1/2 translate-y-full h-32 w-px bg-neutral-800 overflow-hidden">
                <motion.div 
                    initial={{ y: "-100%" }}
                    whileInView={{ y: "0%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="w-full h-full bg-gradient-to-b from-accent to-transparent"
                />
            </div>
        </StorySection>
    );
};

export default Chapter1;
