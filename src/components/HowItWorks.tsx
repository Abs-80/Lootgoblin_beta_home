import { motion } from 'motion/react';
import { Camera, Zap, DollarSign } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Camera className="w-8 h-8 text-emerald-600" />,
      title: "1. Snap",
      description: "Take a photo of that mystery item at the thrift store, yard sale, or back of your closet."
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-600" />,
      title: "2. Identify",
      description: "Our AI helps analyze the item to estimate its brand and features, discovering highly relevant visual matches."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-emerald-600" />,
      title: "3. Profit",
      description: "Get hyper-accurate pricing and a ready-to-copy, SEO-optimized listing description."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-zinc-50 text-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">From Junk to Gold in 10 Seconds</h2>
          <p className="text-zinc-600 text-lg">Leave the guesswork to the goblin.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-emerald-300 transition-colors shadow-sm relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-zinc-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
