import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import appIcon from '../assets/AppIcon.png';
import lootGoblinLetters from '../assets/Loot_Goblin_letters_edited.png';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <div className="flex items-center gap-3 z-10">
          <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm shrink-0">
            <img src={appIcon} alt="Loot Goblin Icon" className="w-full h-full object-cover" />
          </div>
          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium shadow-sm whitespace-nowrap">
            <Sparkles className="w-4 h-4" />
            <span>Now in Beta for iOS & Android</span>
          </div>
        </div>
        
        {/* Centered Logo Text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center pointer-events-none">
          <img src={lootGoblinLetters} alt="Loot Goblin" className="h-10 md:h-12 object-contain" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8 z-10">
          <a href="#how-it-works" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors">How it Works</a>
          <a href="#features" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors">Features</a>
          <a 
            href="#join-beta" 
            className="px-5 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm font-bold rounded-lg transition-colors border border-emerald-200"
          >
            Join Beta
          </a>
        </nav>
      </div>
    </header>
  );
}
