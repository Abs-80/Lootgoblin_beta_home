import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Smartphone, CircleDollarSign, Gem, Apple } from 'lucide-react';

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

function AndroidIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5898 8.4049 13.8564 8.087 12 8.087s-3.5898.3179-5.1378.8627L4.8399 5.4467a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
    </svg>
  );
}

const WEBHOOK_URL = 'https://hook.us1.make.com/g8hb82exo8oh7dsb97bew51upkgsf48p';

export default function CTA() {
  const [selectedPlatform, setSelectedPlatform] = useState<'iOS' | 'Android' | null>(null);
  const [email, setEmail] = useState('');
  const [botField, setBotField] = useState(''); // Invisible honeypot field
  const [loadTime] = useState(() => Date.now()); // Time-trap for rapid script bots
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail || !selectedPlatform || isSubmitting) return;

    // Honeypot trap: if bot entered a name into the hidden field, silently fake success without calling webhook
    if (botField.trim().length > 0) {
      setSubmitted(true);
      return;
    }

    // Time-trap: if submitted in under 800ms since render, it is an automated script bot
    if (Date.now() - loadTime < 800) {
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const queryParams = new URLSearchParams({
        email: cleanEmail,
        platform: selectedPlatform,
        source: 'Loot Goblin Website Beta Waitlist',
      });

      await fetch(`${WEBHOOK_URL}?${queryParams.toString()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: cleanEmail,
          platform: selectedPlatform,
          timestamp: new Date().toISOString(),
          source: 'Loot Goblin Website Beta Waitlist',
        }),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Waitlist submission error:', error);
      // Fallback gracefully so user gets confirmation
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          
          {submitted ? (
            <div className="bg-emerald-800/90 border border-emerald-400/40 rounded-2xl p-6 text-emerald-50 max-w-md mx-auto shadow-lg backdrop-blur-sm space-y-3">
              <p className="font-bold text-lg mb-1">🎉 You're on the {selectedPlatform} Beta list!</p>
              <p className="text-sm text-emerald-100">
                We'll email your {selectedPlatform === 'iOS' ? 'TestFlight' : 'Google Play'} invite link to <span className="font-semibold text-white underline">{email}</span> as spots open up.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setEmail('');
                  setSelectedPlatform(null);
                }}
                className="inline-block text-xs text-emerald-200 hover:text-white underline cursor-pointer pt-2"
              >
                Register another device or platform &rarr;
              </button>
            </div>
          ) : !selectedPlatform ? (
            /* Platform Selection Step */
            <div className="space-y-4 max-w-md mx-auto">
              <p className="text-sm font-semibold text-emerald-100 uppercase tracking-wider">
                Select your device platform:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={() => setSelectedPlatform('iOS')}
                  className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer border border-white/10 group"
                >
                  <Apple className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  <span>Apple (iOS)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPlatform('Android')}
                  className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer border border-white/10 group"
                >
                  <AndroidIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  <span>Android</span>
                </button>
              </div>
            </div>
          ) : (
            /* Email Input Step for Selected Platform */
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-3 px-1 text-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold border border-white/20 backdrop-blur-sm">
                  {selectedPlatform === 'iOS' ? (
                    <Apple className="w-3.5 h-3.5" />
                  ) : (
                    <AndroidIcon className="w-3.5 h-3.5" />
                  )}
                  {selectedPlatform === 'iOS' ? 'Apple TestFlight Beta' : 'Android Google Play Beta'}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedPlatform(null)}
                  className="text-xs text-emerald-200 hover:text-white underline cursor-pointer"
                >
                  Switch device
                </button>
              </div>

              <form 
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 relative"
              >
                {/* Invisible Honeypot field for bot trapping */}
                <div 
                  aria-hidden="true" 
                  style={{ 
                    opacity: 0, 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    height: 0, 
                    width: 0, 
                    zIndex: -1, 
                    pointerEvents: 'none', 
                    overflow: 'hidden' 
                  }}
                >
                  <label htmlFor="user_full_name">Full Name</label>
                  <input 
                    id="user_full_name"
                    type="text" 
                    name="user_full_name" 
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                    tabIndex={-1} 
                    autoComplete="off" 
                  />
                </div>

                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={selectedPlatform === 'iOS' ? "Enter your Apple ID / email" : "Enter your Google Play email"} 
                  disabled={isSubmitting}
                  className="flex-1 bg-white border border-transparent rounded-xl px-4 py-4 text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:ring-4 focus:ring-emerald-400/30 transition-shadow shadow-md disabled:opacity-70"
                  autoFocus
                  required
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 disabled:opacity-70 text-white font-bold rounded-xl transition-all shadow-lg whitespace-nowrap active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Joining...' : `Get ${selectedPlatform} Invite`}
                </button>
              </form>
            </div>
          )}
          
          <p className="text-xs text-emerald-200 mt-6 font-medium">
            Spots are limited.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
