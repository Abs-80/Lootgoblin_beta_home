import { useState, useEffect } from 'react';
import { ArrowLeft, Shield, FileText, ExternalLink, Mail, CheckCircle2, HelpCircle } from 'lucide-react';
import appIcon from '../assets/AppIcon.png';
import lootGoblinLetters from '../assets/Loot_Goblin_letters_edited.png';

interface LegalProps {
  initialTab?: 'terms' | 'privacy' | 'support';
}

export default function Legal({ initialTab = 'terms' }: LegalProps) {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'support'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabChange = (tab: 'terms' | 'privacy' | 'support') => {
    setActiveTab(tab);
    window.location.hash = `#${tab}`;
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-emerald-600 transition-colors py-2 px-3 rounded-lg hover:bg-zinc-100"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>

          <div className="flex items-center gap-3">
            <img src={appIcon} alt="Loot Goblin" className="w-8 h-8 rounded-lg shadow-sm" />
            <img src={lootGoblinLetters} alt="Loot Goblin" className="h-5 object-contain hidden sm:block" />
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
            Legal &amp; Support Center
          </h1>
          <p className="text-zinc-600 text-base md:text-lg max-w-2xl mx-auto">
            Review the terms, software license agreement, privacy standards, and customer support documentation for the Loot Goblin mobile application.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-zinc-200/80 rounded-2xl shadow-inner gap-1 flex-wrap justify-center">
            <button
              onClick={() => handleTabChange('terms')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'terms'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <FileText className="w-4 h-4 text-emerald-600" />
              Terms of Service &amp; EULA
            </button>
            <button
              onClick={() => handleTabChange('privacy')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'privacy'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <Shield className="w-4 h-4 text-emerald-600" />
              Privacy Policy
            </button>
            <button
              onClick={() => handleTabChange('support')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'support'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-emerald-600" />
              Help &amp; Support
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm text-zinc-700 leading-relaxed space-y-8">
          {activeTab === 'terms' && (
            /* TERMS & EULA TAB */
            <article className="space-y-8">
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-3 border border-emerald-200">
                  Apple App Store &amp; StoreKit Compliant
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mb-2">
                  End User License Agreement (EULA) &amp; Terms of Service
                </h2>
                <p className="text-sm text-zinc-500">
                  <strong>Licensor / Developer:</strong> Adrian Chapman &bull; <strong>Last Updated:</strong> October 2026
                </p>
              </div>

              <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm space-y-2">
                <p className="font-semibold text-zinc-900">Important Summary for App Store Users:</p>
                <p>
                  By downloading, installing, or using the Loot Goblin application ("App"), you agree to be bound by this Agreement and Apple's Standard EULA. If you do not agree to these terms, do not install or use the App.
                </p>
              </div>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">1. Scope of License Grant</h3>
                <p>
                  Adrian Chapman grants you a personal, non-exclusive, non-transferable, revocable, limited license to download, install, and use the App on any Apple-branded or Android device that you own or control, strictly as permitted by the Usage Rules set forth in the Apple Media Services Terms and Conditions and this Agreement.
                </p>
              </section>

              {/* Mandatory Apple Subscription Disclosure Box */}
              <section className="p-6 bg-emerald-50/60 border-2 border-emerald-500/30 rounded-2xl space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <h3 className="text-lg font-bold text-zinc-900">
                    2. Auto-Renewable Subscriptions &amp; In-App Purchases (Apple Guideline 3.1.2)
                  </h3>
                </div>
                <div className="text-sm text-zinc-700 space-y-3">
                  <p>
                    Loot Goblin may offer auto-renewable subscription tiers (such as <strong>Loot Goblin Pro</strong> or <strong>Founder Pass</strong>) that provide unlimited scans, real-time sold comp verification, and specialized book/media pipelines.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Payment Confirmation:</strong> Payment will be charged directly to your Apple ID account at confirmation of purchase.
                    </li>
                    <li>
                      <strong>Automatic Renewal:</strong> Subscriptions automatically renew unless auto-renew is turned off at least <strong>24 hours</strong> before the end of the current billing cycle.
                    </li>
                    <li>
                      <strong>Renewal Billing:</strong> Your account will be charged for renewal within 24 hours prior to the end of the current period at the rate of the selected subscription plan.
                    </li>
                    <li>
                      <strong>Managing &amp; Canceling:</strong> You can manage your subscriptions and turn off auto-renewal at any time by navigating to your <strong>Apple ID Account Settings &gt; Subscriptions</strong> on your device, or directly through the App via <strong>Settings &gt; Manage Subscriptions</strong>.
                    </li>
                    <li>
                      <strong>Trial Periods:</strong> Any unused portion of a free trial period, if offered, will be forfeited when you purchase a subscription to that publication or feature, where applicable.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">3. Valuation &amp; Informational Data Disclaimer</h3>
                <p>
                  Any market valuations, pricing estimates, comp medians, or identification results provided by Loot Goblin are generated via automated algorithms and machine learning models for informational, personal, and entertainment purposes only.
                </p>
                <p>
                  Loot Goblin does not provide professional appraisal, financial, tax, or investment advice. You expressly assume all risks associated with reliance upon pricing estimates. Adrian Chapman and Loot Goblin are not responsible or liable for any commercial or personal buying, selling, or inventory decisions made based on app outputs.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">4. Permissible Use &amp; Content Guidelines</h3>
                <p>
                  You agree not to submit images containing explicit violence, nudity, hate speech, or illicit materials to the visual scanning system. Violation of acceptable use policies may result in immediate revocation of your license and termination of service without refund.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">5. Proprietary Rights &amp; Restrictions</h3>
                <p>
                  The App, including its visual search algorithms, pipelines, design, and software code, is the proprietary property of Adrian Chapman. You may not reverse engineer, decompile, modify, or create derivative works from the application.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">6. Warranty Disclaimer ("AS IS") &amp; Limitation of Liability</h3>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. IN NO EVENT SHALL ADRIAN CHAPMAN OR CONTRIBUTORS BE LIABLE FOR ANY INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE APP.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">7. Governing Law</h3>
                <p>
                  This Agreement and any dispute arising from the use of the App shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein.
                </p>
              </section>

              <section className="space-y-3 border-t border-zinc-200 pt-6">
                <h3 className="text-lg font-bold text-zinc-900">8. Apple Minimum Terms Reference</h3>
                <p className="text-sm">
                  This Agreement supplements Apple's standard End User License Agreement. You can view the Apple Standard EULA directly at:
                </p>
                <a 
                  href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 underline"
                >
                  Apple Standard EULA Agreement
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </section>
            </article>
          )}

          {activeTab === 'privacy' && (
            /* PRIVACY POLICY TAB */
            <article className="space-y-8">
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-3 border border-emerald-200">
                  Data Protection &amp; Privacy
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mb-2">
                  Loot Goblin Privacy Policy
                </h2>
                <p className="text-sm text-zinc-500">
                  <strong>Developer:</strong> Adrian Chapman &bull; <strong>Effective Date:</strong> October 2026
                </p>
              </div>

              <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm space-y-2">
                <p className="font-semibold text-zinc-900">Our Privacy Commitment:</p>
                <p>
                  We believe in extreme transparency and data minimization. We only collect the minimal information necessary to deliver accurate item valuations, manage scanning quotas, and synchronize your preferences. We do not sell your personal data.
                </p>
              </div>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">1. Information We Collect</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Authentication Data:</strong> If you sign up or log in, your email and authentication credentials are encrypted and securely managed via Google Firebase Authentication.
                  </li>
                  <li>
                    <strong>Device Identifiers &amp; Tokens:</strong> We generate a secure, randomized installation token to manage free scan limits, verify device health, and ensure fair usage.
                  </li>
                  <li>
                    <strong>Item Images &amp; Scan Queries:</strong> Photos submitted for valuation are securely transmitted via HTTPS to Google Gemini AI models strictly to identify the item and retrieve comps. Images are processed ephemerally and are not permanently retained on our application servers.
                  </li>
                  <li>
                    <strong>Subscription &amp; Purchase Verification:</strong> Purchase tokens and transaction receipts are validated cryptographically with Apple App Store / Google Play APIs. We never store or handle your credit card or financial details.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">2. How We Use Collected Information</h3>
                <p className="text-sm">
                  Information is used exclusively for:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Processing image queries to provide real-time identification and market valuations.</li>
                  <li>Maintaining your subscription benefits and daily scanning limits.</li>
                  <li>Ensuring backend security and mitigating fraud, scraping, or spam.</li>
                  <li>Diagnosing app crashes and improving system stability.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">3. Third-Party Sharing</h3>
                <p className="text-sm">
                  We do not sell, rent, or trade your personal data. Data is shared solely with trusted service infrastructure providers necessary to operate the application:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Google Firebase:</strong> Cloud authentication, remote configuration, and telemetry.</li>
                  <li><strong>Google Cloud &amp; Gemini AI:</strong> Image comprehension and visual model inference.</li>
                  <li><strong>Apple App Store / StoreKit:</strong> In-App purchase processing and receipt validation.</li>
                  <li><strong>Marketplace Data APIs:</strong> Aggregated sold listing comp verification.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">4. Data Retention &amp; Account Deletion Rights</h3>
                <p className="text-sm">
                  In compliance with Apple App Store Guideline 5.1.1, you have full control over your data. You may delete your account and all associated cloud data at any time:
                </p>
                <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200 text-sm space-y-1">
                  <p><strong>To Delete Your Account:</strong></p>
                  <p>1. Open Loot Goblin and navigate to <strong>Settings</strong>.</p>
                  <p>2. Select <strong>Delete Account &amp; Data</strong>.</p>
                  <p>3. Confirm deletion. Your account, authentication credentials, and saved cloud records will be immediately and permanently removed.</p>
                </div>
                <p className="text-sm">
                  You may also email <strong>lootgoblin.support@gmail.com</strong> with the subject "Data Deletion Request" to manually request full account purging.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">5. Security Standards</h3>
                <p className="text-sm">
                  All communications between the mobile application and server APIs occur over encrypted connections utilizing industry-standard TLS/HTTPS protocols.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-900">6. Contact Information</h3>
                <p className="text-sm">
                  For any privacy questions, rights requests, or regulatory inquiries, contact:
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:lootgoblin.support@gmail.com" className="hover:underline">
                    lootgoblin.support@gmail.com
                  </a>
                </div>
              </section>
            </article>
          )}

          {activeTab === 'support' && (
            /* SUPPORT & FAQ TAB */
            <article className="space-y-8">
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-3 border border-emerald-200">
                  Customer Care &amp; App Support
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mb-2">
                  Loot Goblin Help &amp; Support
                </h2>
                <p className="text-sm text-zinc-500">
                  Need assistance with your scans, subscription, or account? We are here to help.
                </p>
              </div>

              {/* Contact Card */}
              <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">Direct Developer Support</h3>
                  <p className="text-sm text-zinc-600">Response time is typically within 24 to 48 hours.</p>
                </div>
                <a
                  href="mailto:lootgoblin.support@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-sm shrink-0 active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  Email Support
                </a>
              </div>

              {/* FAQs */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-zinc-900">Frequently Asked Questions</h3>

                <div className="space-y-3 border-b border-zinc-200 pb-4">
                  <h4 className="font-bold text-zinc-900">How do I restore my purchases or Founder Pass?</h4>
                  <p className="text-sm text-zinc-600">
                    If you reinstalled the app or switched devices, open Loot Goblin, go to <strong>Settings &gt; Restore Purchases</strong>. The app will communicate with Apple StoreKit to immediately restore your active subscriptions and entitlements.
                  </p>
                </div>

                <div className="space-y-3 border-b border-zinc-200 pb-4">
                  <h4 className="font-bold text-zinc-900">How do I cancel or manage my subscription?</h4>
                  <p className="text-sm text-zinc-600">
                    Subscriptions are billed through Apple. You can manage or cancel your subscription at any time:
                  </p>
                  <ol className="list-decimal pl-5 text-sm text-zinc-600 space-y-1">
                    <li>Open <strong>Settings</strong> on your iOS device.</li>
                    <li>Tap your <strong>Name / Apple ID</strong> at the top.</li>
                    <li>Tap <strong>Subscriptions</strong>.</li>
                    <li>Select <strong>Loot Goblin</strong> and tap <strong>Cancel Subscription</strong>.</li>
                  </ol>
                </div>

                <div className="space-y-3 border-b border-zinc-200 pb-4">
                  <h4 className="font-bold text-zinc-900">How do I permanently delete my account?</h4>
                  <p className="text-sm text-zinc-600">
                    In compliance with privacy standards, you can delete your account at any time in the app:
                  </p>
                  <ol className="list-decimal pl-5 text-sm text-zinc-600 space-y-1">
                    <li>Open Loot Goblin and tap <strong>Settings</strong>.</li>
                    <li>Scroll down and tap <strong>Delete Account &amp; Data</strong>.</li>
                    <li>Confirm deletion. Your credentials and cloud history will be permanently wiped.</li>
                  </ol>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-zinc-900">How does the AI pricing algorithm calculate comps?</h4>
                  <p className="text-sm text-zinc-600">
                    Loot Goblin captures an image of your item, performs visual feature extraction to identify the brand, model, and condition, and retrieves recent sold comps from verified marketplaces. It strips out mislabeled or irrelevant listings to compute the exact Low, Median, and High market prices.
                  </p>
                </div>
              </div>
            </article>
          )}

          {/* Contact Support Footer Box */}
          <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <span className="text-zinc-500">Need direct assistance?</span>
            <a
              href="mailto:lootgoblin.support@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-sm active:scale-95"
            >
              <Mail className="w-4 h-4" />
              lootgoblin.support@gmail.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
