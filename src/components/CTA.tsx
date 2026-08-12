import { motion } from 'motion/react';
import { Smartphone, CircleDollarSign, Gem } from 'lucide-react';

const LOOT = Array.from({ length: 60 }).map((_, i) => {
  const isGem = Math.random() > 0.6; // 40% gems
  const gemColors = [
    { outer: 'text-rose-400', inner: 'fill-rose-300 text-rose-600', dropShadow: 'drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]' },
    { outer: 'text-purple-400', inner: 'fill-purple-300 text-purple-600', dropShadow: 'drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]' },
    { outer: 'text-cyan-400', inner: 'fill-cyan-300 text-cyan-600', dropShadow: 'drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]' },
    { outer: 'text-emerald-300', inner: 'fill-emerald-200 text-emerald-500', dropShadow: 'drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]' }
  ];
  const gemColor = gemColors[Math.floor(Math.random() * gemColors.length)];
  
  return {
    id: i,
    type: isGem ? 'gem' : 'coin',
    color: isGem ? gemColor : { outer: 'text-amber-400', inner: 'fill-amber-300 text-amber-600', dropShadow: 'drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]' },
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 4 + Math.random() * 4,
    size: isGem ? 18 + Math.random() * 16 : 24 + Math.random() * 24,
    rotation: Math.random() * 360,
  };
});

export default function CTA() {
  return (
    <section id="join-beta" className="py-32 bg-emerald-700 text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950/50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-400/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Raining Loot */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {LOOT.map((item) => (
          <motion.div
            key={item.id}
            animate={{ 
              y: ['-100px', '1000px'],
              opacity: [0, 1, 1, 0],
              rotate: [item.rotation, item.rotation + 360]
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute ${item.color.outer} ${item.color.dropShadow}`}
            style={{ 
              left: `${item.left}%`,
              top: '-100px'
            }}
          >
            {item.type === 'coin' ? (
              <CircleDollarSign size={item.size} className={item.color.inner} />
            ) : (
              <Gem size={item.size} className={item.color.inner} />
            )}
          </motion.div>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20 shadow-lg backdrop-blur-sm">
            <Smartphone className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">Ready to hoard some loot?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Join the exclusive Beta test today and get early access to the most powerful valuation engine on the market. Available natively for iOS and Android.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white border border-transparent rounded-xl px-4 py-4 text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:ring-4 focus:ring-emerald-400/30 transition-shadow shadow-md"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-xl transition-all shadow-lg whitespace-nowrap active:scale-95"
            >
              Get Beta Access
            </button>
          </form>
          
          <p className="text-xs text-emerald-200 mt-6 font-medium">
            Spots are limited. We'll never sell your data to the big corporations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
