import { motion } from 'motion/react';
import { Filter, Zap } from 'lucide-react';

export default function DeepDive() {
  return (
    <section className="py-24 bg-zinc-50 text-zinc-900 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-sm font-medium">
              <Filter className="w-4 h-4" />
              <span>The "No-Nonsense Filter"</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              We filter out the bad comps so you don't have to.
            </h2>
            
            <p className="text-zinc-600 text-lg leading-relaxed">
              eBay search is messy. People mislabel things all the time. Our on-device Machine Learning acts as a no-nonsense filter. 
            </p>
            
            <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 blur-[50px]"></div>
              
              <ul className="space-y-4 relative z-10 text-zinc-700">
                <li className="flex gap-3">
                  <Zap className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Instantly scans recent 'Sold' listings across marketplaces.</span>
                </li>
                <li className="flex gap-3">
                  <Zap className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Visually compares online listings directly against your item's photo.</span>
                </li>
                <li className="flex gap-3">
                  <Zap className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Automatically removes poor matches</strong> so you only see the most accurate pricing data.</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-zinc-100 rounded-3xl p-2 shadow-xl border border-zinc-200">
              <div className="bg-white rounded-2xl border border-zinc-100 aspect-[4/5] flex items-center justify-center text-zinc-400 overflow-hidden">
                 {/* Replace this div with an actual <img> tag when images are provided */}
                 <span className="text-sm font-medium">App Image Placeholder</span>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -inset-4 bg-emerald-200/50 blur-3xl -z-10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
