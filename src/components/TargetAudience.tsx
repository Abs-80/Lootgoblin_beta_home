import { motion } from 'motion/react';
import { Tag, MapPin, Store, Home, ShieldCheck, Sparkles } from 'lucide-react';

export default function TargetAudience() {
  const audiences = [
    {
      icon: <MapPin className="w-8 h-8 text-emerald-600" />,
      title: "Thrifters & Resellers",
      description: "Spot underpriced gems in thrift stores, check real sold comps in seconds, and make confident buying decisions before checkout."
    },
    {
      icon: <Store className="w-8 h-8 text-emerald-600" />,
      title: "Vintage & Antique Dealers",
      description: "Instantly identify obscure maker marks, rare hallmarks, and historical pieces without thumbing through physical reference catalogs."
    },
    {
      icon: <Tag className="w-8 h-8 text-emerald-600" />,
      title: "Casual Sellers & Downsizers",
      description: "Clearing out the garage, attic, or an estate? Price electronics, books, and collectibles fairly without endless manual searches."
    },
    {
      icon: <Home className="w-8 h-8 text-emerald-600" />,
      title: "Home Inventory & Organization",
      description: "Build a complete visual catalog of your household valuables, high-end electronics, tools, and heirlooms in just a few taps."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      title: "Insurance & Claim Records",
      description: "Create photo-verified logs with real-time market valuations so you have undeniable proof of ownership and value for policies or claims."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-emerald-600" />,
      title: "Collectors & Hobbyists",
      description: "Catalog specialized collections—from vinyl records and first-edition books to trading cards and retro games—with exact metadata."
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 text-zinc-900 border-t border-zinc-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who is Loot Goblin For?</h2>
          <p className="text-zinc-600">From weekend thrifters and pro dealers to homeowners cataloging valuables for insurance and peace of mind.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-zinc-200 hover:border-emerald-300 transition-all text-center flex flex-col items-center shadow-sm hover:shadow-md"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 shadow-sm">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
