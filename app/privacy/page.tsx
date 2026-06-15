"use client";

import React from 'react';
import { Ghost, Shield, ArrowLeft } from 'lucide-react';
import { BrutalistButton } from '../components/ui/BrutalistButton';
import { BrutalistCard } from '../components/ui/BrutalistCard';

export default function PrivacyPolicy() {
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
        <div className="mb-10 inline-block rotate-[-1deg]">
          <span className="bg-brutalist-yellow text-brutalist-black font-mono font-black text-xs uppercase px-3 py-1.5 border-4 border-brutalist-black shadow-brutalist-sm">
            🔒 LEGAL DOCS
          </span>
          <h1 className="font-mono font-black text-4xl sm:text-5xl uppercase tracking-tight mt-3 border-b-4 border-brutalist-black pb-2">
            PRIVACY POLICY
          </h1>
          <p className="font-mono font-bold text-xs uppercase text-zinc-500 mt-2">
            Last Updated: June 15, 2026
          </p>
        </div>

        {/* Policy document card */}
        <BrutalistCard variant="white" shadowSize="lg" className="p-8 space-y-8">
          
          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              1. INTRODUCTION & SERVICE PROVIDER
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              JinxNotes (&ldquo;the App&rdquo;), operated by Eraslan Medya (&ldquo;We&rdquo;, &ldquo;Us&rdquo;, or &ldquo;the Company&rdquo;), is a mobile journal and social platform for sharing daily mishaps. This Privacy Policy details how we collect, process, store, and safeguard your personal information when using the JinxNotes mobile app and web services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              2. DATA WE COLLECT
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              To provide our service, we may collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 font-sans font-bold text-sm text-zinc-700">
              <li>
                <strong className="text-brutalist-black">Account & Profile Information:</strong> Email address, username, full name, biography, and avatar picture provided during registration.
              </li>
              <li>
                <strong className="text-brutalist-black">Misfortunes (Jinxes):</strong> Text entries, titles, severity tags (Low, Moderate, High, Critical), and the privacy status (private journal entry or public feed post) that you log.
              </li>
              <li>
                <strong className="text-brutalist-black">Geographic Location Data (Misery Map):</strong> Coordinate data (latitude & longitude) and location name tags used solely to position public jinxes on the regional &ldquo;Map of Misery,&rdquo; gathered only with your explicit permission.
              </li>
              <li>
                <strong className="text-brutalist-black">Social Interactions:</strong> Reactions (Oof, F, Golden F) and text comments that you post under public misfortunes.
              </li>
              <li>
                <strong className="text-brutalist-black">AI Oracle Interactions:</strong> Mishap descriptions submitted to the Jinxie AI Oracle (processed transiently to generate sarcastic roasts and daily karma values).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              3. HOW WE USE YOUR DATA
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              We process your personal information for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 font-sans font-bold text-sm text-zinc-700">
              <li>Authenticating users and managing account sessions via Supabase Auth.</li>
              <li>Calculating daily luck scores, misfortune streaks, and leaderboard karma points.</li>
              <li>Displaying public posts on the global feed and managing social interactions.</li>
              <li>Visualizing generalized bad luck hotspots on the regional Map of Misery.</li>
              <li>Generating sarcastic roasts and predictions through the Jinxie AI Oracle interface.</li>
              <li>Enforcing community guidelines, detecting abuse, and troubleshooting technical errors.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              4. DATA STORAGE AND SECURITY
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              All user data is stored using industry-standard security practices and Row Level Security (RLS) rules on <strong className="text-brutalist-black">Supabase (PostgreSQL)</strong>. Your private journal entries (Private Vault) are strictly restricted at the database level so that no other user or public entity can ever access them.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              5. THIRD-PARTY SERVICES & SHARING
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              We do not sell, trade, or rent your personal data to third parties. Data is shared only with trusted infrastructure providers (such as Supabase for database hosting, and LLM API providers for processing Jinxie Oracle requests). We do not share data with third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              6. YOUR RIGHTS & ACCOUNT DELETION
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              In compliance with global privacy regulations (GDPR, CCPA) and App Store guidelines, you have full control over your information. You can edit your profile details at any time or permanently delete your account.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              To delete your account, you can use the option inside the mobile app Settings panel, or visit our online <a href="/delete-account" className="text-brutalist-red hover:underline font-black">Account Deletion Request</a> page. Upon confirmation, all your profile data, Supabase credentials, private vaults, and logged activities will be permanently scrubbed from our systems.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              7. CONTACT
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              If you have any questions or concerns regarding this Privacy Policy, feel free to contact us through our online <a href="/support" className="text-brutalist-teal hover:underline font-black">Support Page</a> or directly via email.
            </p>
          </section>

        </BrutalistCard>
      </main>

      {/* FOOTER */}
      <footer className="bg-brutalist-black text-brutalist-white px-6 py-8 font-mono text-[10px] uppercase text-center mt-12">
        <p>© 2026 JinxNotes. A PROJECT BY ERASLAN MEDYA. ALL RIGHTS RESERVED.</p>
      </footer>

    </div>
  );
}
