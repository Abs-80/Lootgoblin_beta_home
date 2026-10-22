import { motion } from 'motion/react';
import { Brain, Search, Book, Disc, TrendingUp, Languages } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-emerald-600" />,
      title: "Visual Identification",
      description: "Powered by our Smart-Sync engine, the app instantly analyzes photos to identify brands, models, and conditional damage. Generates ready-to-copy listing descriptions."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      title: "AI Resale Estimates",
      description: "Get an estimated resale price range (low, typical, and high) for your find. Estimates are AI-generated and informational. They are not guarantees or formal appraisals."
    },
    {
      icon: <Book className="w-6 h-6 text-emerald-600" />,
      title: "The Book Pipeline",
      description: "Helps identify the edition from photos of the cover and copyright page, so you can double-check the details before you list or buy."
    },
    {
      icon: <Disc className="w-6 h-6 text-emerald-600" />,
      title: "Media Integration",
      description: "Helps identify vinyl records and CDs from photos of the cover and label, so you can look up the exact pressing yourself."
    },
    {
      icon: <Search className="w-6 h-6 text-emerald-600" />,
      title: "Ranges, Not Guarantees",
      description: "Real selling prices depend on condition, timing, and buyer demand, so Loot Goblin gives you an estimated range instead of a single exact number."
    },
    {
      icon: <Languages className="w-6 h-6 text-emerald-600" />,
      title: "Reseller Workflow Tools",
      description: "Auto-saves history locally. Generates listings in English, Spanish, and Dutch. Choose your tone: Professional, Enthusiast, or Quick Sale."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white text-zinc-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Ultimate Reselling Arsenal</h2>
          <p className="text-zinc-600 text-lg">We packed AI item identification and resale estimates into an app that's quick enough to use without breaking stride down the thrift store aisle.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 hover:border-emerald-300 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-emerald-100/50 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
