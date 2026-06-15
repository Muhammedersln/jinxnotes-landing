"use client";

import React from 'react';
import { Ghost, Scale, ArrowLeft } from 'lucide-react';
import { BrutalistButton } from '../components/ui/BrutalistButton';
import { BrutalistCard } from '../components/ui/BrutalistCard';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-brutalist-bg text-brutalist-black font-sans selection:bg-brutalist-yellow selection:text-brutalist-black">
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-brutalist-white border-b-4 border-brutalist-black px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <Ghost size={28} className="text-brutalist-black" strokeWidth={2.5} />
            <span className="font-mono font-black text-2xl uppercase tracking-tighter">Jinx</span>
            <span className="bg-brutalist-black text-brutalist-white px-2 py-0.5 font-mono font-black text-lg uppercase rotate-[-3deg] shadow-brutalist-sm">
              Notes
            </span>
          </a>
          <a href="/">
            <BrutalistButton variant="white" size="sm" className="flex items-center gap-2">
              <ArrowLeft size={14} strokeWidth={3} /> GO BACK
            </BrutalistButton>
          </a>
        </div>
      </header>

      {/* CONTENT BODY */}
      <main className="max-w-4xl mx-auto py-12 px-6">
        
        {/* Title Tag */}
        <div className="mb-10 inline-block rotate-[1deg]">
          <span className="bg-brutalist-teal text-brutalist-black font-mono font-black text-xs uppercase px-3 py-1.5 border-4 border-brutalist-black shadow-brutalist-sm">
            ⚖️ AGREEMENT
          </span>
          <h1 className="font-mono font-black text-4xl sm:text-5xl uppercase tracking-tight mt-3 border-b-4 border-brutalist-black pb-2">
            TERMS OF USE
          </h1>
          <p className="font-mono font-bold text-xs uppercase text-zinc-500 mt-2">
            Last Updated: June 15, 2026
          </p>
        </div>

        {/* Terms document card */}
        <BrutalistCard variant="white" shadowSize="lg" className="p-8 space-y-8">
          
          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              1. ACCEPTANCE OF TERMS
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              By downloading Jinxly, creating an account, or visiting our website, you agree to be fully bound by these Terms of Use (&ldquo;Terms&rdquo;). If you do not agree with any part of these Terms, you must not use or access our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              2. ELIGIBILITY AND ACCOUNT SECURITY
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              You must be at least 13 years of age (or the minimum legal age to access social media services in your country) to create an account. You are solely responsible for maintaining the confidentiality of your account credentials and for all actions taken under your profile. Impersonating other individuals or entities is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              3. COMMUNITY GUIDELINES & CONTENT MODERATION
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              Jinxly is a space for sharing daily misfortunes in a lighthearted, humorous manner. When publishing content publicly (Public Jinxes), you must comply with the following rules:
            </p>
            <ul className="list-disc list-inside space-y-2 font-sans font-bold text-sm text-zinc-700">
              <li>No hate speech, harassment, threats, slurs, or discriminatory content.</li>
              <li>No leaking of other people's private personal information (names, numbers, addresses) without consent.</li>
              <li>No sexually explicit, obscene, or graphic violent content.</li>
              <li>No copyright-infringing material or promotion of illegal activities.</li>
            </ul>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              Content violating these guidelines may be removed immediately without prior warning, and we reserve the right to suspend or terminate offending accounts. Users are encouraged to report any guideline violations using the in-app &ldquo;Report&rdquo; buttons.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              4. LICENSE OF CONTENT
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              You retain all ownership rights to the misfortunes you log. However, by selecting to share an entry as a &ldquo;Public Jinx,&rdquo; you grant us a worldwide, royalty-free, perpetual, and sublicensable license to publish, display, distribute, highlight (such as in the &ldquo;Hall of Shame&rdquo;), or feature that content anonymously on our marketing channels.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              5. PRO SUBSCRIPTIONS & IN-APP PURCHASES
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              We offer optional PRO subscriptions to unlock features like unlimited AI Oracle usage, detailed Map of Misery analysis, and premium profile cosmetics. All payments, subscriptions, and billing transactions are processed through the Apple App Store or Google Play Store. Billing terms and refund requests are governed entirely by the rules of the respective application stores.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              6. DISCLAIMER OF LIABILITY (COSMIC DISCLAIMER)
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              Jinxly is designed strictly for entertainment and stress relief. Under no circumstances shall Jinxly, Eraslan Medya, or its developers be held liable for any actual bad luck, physical clumsiness, spilled beverages, missed transit, cracked phone screens, or any other real-life misfortune that occurs after using the app. You must manage your own cosmic karma!
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              7. AMENDMENTS
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              We reserve the right to modify these Terms of Use at any time. When updates are published, we will notify users through in-app banners or email. Continuing to use the Jinxly platform after changes are published constitutes your complete acceptance of the updated Terms.
            </p>
          </section>

        </BrutalistCard>
      </main>

      {/* FOOTER */}
      <footer className="bg-brutalist-black text-brutalist-white px-6 py-8 font-mono text-[10px] uppercase text-center mt-12">
        <p>© 2026 Jinxly. A PROJECT BY ERASLAN MEDYA. ALL RIGHTS RESERVED.</p>
      </footer>

    </div>
  );
}
