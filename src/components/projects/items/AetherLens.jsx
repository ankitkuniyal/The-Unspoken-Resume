import { motion } from 'framer-motion';
import { Smartphone, Zap, Eye } from 'lucide-react';

const AetherLens = () => {
  return (
    <section className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-neutral-900 text-white">
      {/* Background Blob */}
      <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[60vh] w-[60vh] rounded-full bg-blue-600/30 blur-[100px]" />

      {/* Split Layout */}
      <div className="z-10 mx-auto grid w-full max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Left: Product Copy */}
        <div>
          <div className="mb-6 w-fit rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold backdrop-blur">
            iOS // COMPUTER VISION
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-white to-white/50 bg-clip-text text-6xl font-bold tracking-tighter text-transparent md:text-8xl">
            Aether Lens
          </h2>
          <p className="mb-8 max-w-md text-xl leading-relaxed text-neutral-400">
            AR platform delivering sub-centimeter styling precision using custom Visual SLAM
            algorithms on edge devices.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-600/20 p-3 text-blue-400">
                <Eye size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold">Visual SLAM</h3>
                <p className="text-sm text-neutral-500">
                  Markerless tracking with &lt; 1cm drift per minute.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-600/20 p-3 text-blue-400">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold">Metal Shaders</h3>
                <p className="text-sm text-neutral-500">
                  Direct-to-metal occlusion and lighting effects.
                </p>
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
          <div className="rotate-[-5deg] rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-1 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:rotate-0">
            <div className="relative aspect-[9/16] max-h-[60vh] overflow-hidden rounded-[2.3rem] bg-black p-8">
              {/* Fake UI Elements */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-b from-blue-900/20 to-transparent" />

              <div className="mb-8 flex items-center justify-between">
                <div className="h-8 w-8 rounded-full bg-white/20" />
                <div className="h-2 w-20 rounded-full bg-white/20" />
              </div>

              <div className="space-y-4">
                <div className="flex h-40 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <span className="animate-pulse font-mono text-xs text-neutral-500">
                    Scanning Surface...
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 rounded-2xl bg-white/5" />
                  <div className="h-24 rounded-2xl bg-white/5" />
                </div>
              </div>

              {/* Code Snippet Overlay */}
              <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-[#111111]/90 p-6 backdrop-blur">
                <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500">
                  <Smartphone size={12} /> CoreML Inference
                </div>
                <div className="mb-4 h-1 w-1/3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                <code className="block font-mono text-[10px] leading-relaxed text-neutral-400 opacity-70">
                  func extract_features(texture: Texture) -&gt; [Feature] {'{'} <br />
                  &nbsp;&nbsp;let intensity = dot(pixel, float3(0.3, 0.6, 0.1)); <br />
                  &nbsp;&nbsp;return intensity &gt; THRESHOLD ? feature : nil; <br />
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
