/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import TargetAudience from './components/TargetAudience';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Legal from './components/Legal';

export default function App() {
  const [currentHash, setCurrentHash] = useState(() => 
    typeof window !== 'undefined' ? window.location.hash.toLowerCase() : ''
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      setCurrentHash(hash);
      if (['#legal', '#terms', '#privacy', '#eula', '#support'].includes(hash)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isLegal = ['#legal', '#terms', '#privacy', '#eula', '#support'].includes(currentHash);
  const initialTab = currentHash === '#privacy' ? 'privacy' : (currentHash === '#support' ? 'support' : 'terms');

  if (isLegal) {
    return (
      <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-emerald-500/30 selection:text-emerald-900">
        <Legal initialTab={initialTab} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-emerald-500/30 selection:text-emerald-900">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <TargetAudience />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
