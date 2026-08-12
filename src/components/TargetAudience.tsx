import { motion } from 'motion/react';
import { Tag, MapPin, Store } from 'lucide-react';

export default function TargetAudience() {
  const audiences = [
    {
      icon: <MapPin className="w-8 h-8 text-emerald-600" />,
      title: "Thrifters & Garage Salers",
      description: "Need to know if an item is worth buying to flip while standing in an aisle? Get instant clarity."
    },
    {
      icon: <Store className="w-8 h-8 text-emerald-600" />,
      title: "Vintage & Antique Dealers",
      description: "Professionals who need help identifying obscure, unmarked, or highly specific objects."
    },
    {
      icon: <Tag className="w-8 h-8 text-emerald-600" />,
      title: "Casual Sellers",
      description: "Cleaning out the garage? Know exactly how much to list your old electronics or books for on marketplace."
    }
  ];

  return (
    <section className="py-24 bg-white text-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who is Loot Goblin For?</h2>
          <p className="text-zinc-600">Whether you do this for a living or just want to clear out your closet without getting ripped off.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200 text-center flex flex-col items-center shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
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
