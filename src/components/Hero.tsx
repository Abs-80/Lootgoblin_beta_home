import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white text-zinc-900 overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100 rounded-full blur-[120px] mix-blend-multiply opacity-50 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[100px] mix-blend-multiply opacity-50 -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Your Ultimate <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                Reselling
              </span><br/>
              Companion.
            </h1>
            
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-xl">
              Snap a photo. Identify the item. Get exact market valuations instantly. Stop guessing and start hoarding treasures like a true goblin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#join-beta" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-600/20 active:scale-95"
              >
                Join the Beta Test
                <Download className="w-5 h-5" />
              </a>
              <a 
                href="#how-it-works" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-zinc-50 text-zinc-900 font-medium rounded-xl transition-colors border border-zinc-200 shadow-sm active:scale-95"
              >
                See how it works
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm text-zinc-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-zinc-100 border-2 border-white flex items-center justify-center text-xs shadow-sm">
                  👍
                </div>
              </div>
              <p>Be among the first beta testers</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[700px] flex items-center justify-center w-full"
          >
            {/* App Image Placeholder */}
            <div className="w-[320px] h-[650px] bg-white rounded-[3rem] border-[8px] border-zinc-100 shadow-2xl relative overflow-hidden flex items-center justify-center text-zinc-400">
               {/* Replace this div with an actual <img> tag when images are provided */}
               <span className="text-sm font-medium">App Image Placeholder</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
