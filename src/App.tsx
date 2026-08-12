/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import DeepDive from './components/DeepDive';
import TargetAudience from './components/TargetAudience';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-emerald-500/30 selection:text-emerald-900">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <DeepDive />
        <TargetAudience />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
