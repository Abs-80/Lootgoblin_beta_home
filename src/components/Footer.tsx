import appIcon from '../assets/AppIcon.png';
import lootGoblinLetters from '../assets/Loot_Goblin_letters_edited.png';

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-zinc-200 text-zinc-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden shadow-sm shrink-0">
            <img src={appIcon} alt="Loot Goblin Icon" className="w-full h-full object-cover" />
          </div>
          <img src={lootGoblinLetters} alt="Loot Goblin" className="h-5 object-contain" />
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          <a 
            href="#terms" 
            className="hover:text-emerald-600 transition-colors"
          >
            Terms of Service &amp; EULA
          </a>
          <span className="text-zinc-300 hidden sm:inline">&bull;</span>
          <a 
            href="#privacy" 
            className="hover:text-emerald-600 transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-zinc-300 hidden sm:inline">&bull;</span>
          <a 
            href="#support" 
            className="hover:text-emerald-600 transition-colors"
          >
            Help &amp; Support
          </a>
        </div>
        
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Loot Goblin App. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
