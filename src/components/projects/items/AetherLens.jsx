import { motion } from 'framer-motion';
import { Smartphone, Zap, Eye } from 'lucide-react';

const AetherLens = () => {
    return (
        <section className="h-screen snap-start bg-neutral-900 text-white relative overflow-hidden flex items-center justify-center">
            
            {/* Background Blob */}
            <div className="absolute right-[-10%] top-[20%] w-[60vh] h-[60vh] bg-blue-600/30 rounded-full blur-[100px] pointer-events-none" />

            {/* Split Layout */}
            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center z-10">
                
                {/* Left: Product Copy */}
                <div>
                     <div className="bg-white/10 w-fit px-4 py-1.5 rounded-full text-xs font-bold mb-6 backdrop-blur">
                         iOS // COMPUTER VISION
                     </div>
                     <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
                         Aether Lens
                     </h2>
                     <p className="text-xl text-neutral-400 mb-8 max-w-md leading-relaxed">
                         AR platform delivering sub-centimeter styling precision using custom Visual SLAM algorithms on edge devices.
                     </p>
                     
                     <div className="space-y-6">
                         <div className="flex items-start gap-4">
                             <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                                 <Eye size={24} />
                             </div>
                             <div>
                                 <h3 className="font-bold text-lg">Visual SLAM</h3>
                                 <p className="text-neutral-500 text-sm">Markerless tracking with &lt; 1cm drift per minute.</p>
                             </div>
                         </div>
                         <div className="flex items-start gap-4">
                             <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                                 <Zap size={24} />
                             </div>
                             <div>
                                 <h3 className="font-bold text-lg">Metal Shaders</h3>
                                 <p className="text-neutral-500 text-sm">Direct-to-metal occlusion and lighting effects.</p>
                             </div>
                         </div>
                     </div>
                </div>

                {/* Right: Glassmorphic Floating Panel (App Simulation) */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="bg-gradient-to-br from-white/10 to-white/5 p-1 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-md rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                         <div className="bg-black rounded-[2.3rem] p-8 aspect-[9/16] max-h-[60vh] relative overflow-hidden">
                             {/* Fake UI Elements */}
                             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
                             
                             <div className="flex justify-between items-center mb-8">
                                 <div className="w-8 h-8 rounded-full bg-white/20" />
                                 <div className="w-20 h-2 rounded-full bg-white/20" />
                             </div>

                             <div className="space-y-4"> 
                                  <div className="w-full h-40 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                      <span className="font-mono text-xs text-neutral-500 animate-pulse">Scanning Surface...</span>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                      <div className="h-24 rounded-2xl bg-white/5" />
                                      <div className="h-24 rounded-2xl bg-white/5" />
                                  </div>
                             </div>

                             {/* Code Snippet Overlay */}
                             <div className="absolute bottom-0 left-0 w-full bg-[#111111]/90 backdrop-blur p-6 border-t border-white/10">
                                 <div className="flex items-center gap-2 mb-2 text-xs text-neutral-500 uppercase tracking-widest">
                                     <Smartphone size={12} /> CoreML Inference
                                 </div>
                                 <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-1/3 mb-4 rounded-full" />
                                 <code className="font-mono text-[10px] text-neutral-400 block leading-relaxed opacity-70">
                                     func extract_features(texture: Texture) -&gt; [Feature] {'{'} <br/>
                                     &nbsp;&nbsp;let intensity = dot(pixel, float3(0.3, 0.6, 0.1)); <br/>
                                     &nbsp;&nbsp;return intensity &gt; THRESHOLD ? feature : nil; <br/>
                                     {'}'}
                                 </code>
                             </div>

                         </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AetherLens;
