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
              ly
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

        <div className="mb-10 inline-block rotate-[-1deg]">
          <span className="bg-brutalist-yellow text-brutalist-black font-mono font-black text-xs uppercase px-3 py-1.5 border-4 border-brutalist-black shadow-brutalist-sm">
            🔒 LEGAL DOCS
          </span>
          <h1 className="font-mono font-black text-4xl sm:text-5xl uppercase tracking-tight mt-3 border-b-4 border-brutalist-black pb-2">
            PRIVACY POLICY
          </h1>
          <p className="font-mono font-bold text-xs uppercase text-zinc-500 mt-2">
            Last Updated: June 15, 2026 &nbsp;|&nbsp; Effective: June 15, 2026
          </p>
        </div>

        <BrutalistCard variant="white" shadowSize="lg" className="p-8 space-y-8">

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              1. INTRODUCTION & CONTROLLER INFORMATION
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              Jinxly (&ldquo;the App,&rdquo; &ldquo;Service,&rdquo; or &ldquo;Platform&rdquo;) is a mobile social journal application developed and operated by <strong className="text-brutalist-black">Eraslan Medya</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;the Company&rdquo;). This Privacy Policy (&ldquo;Policy&rdquo;) explains in detail how we collect, use, disclose, transfer, store, and protect your personal information when you access or use the Jinxly mobile application, website at <strong>jinxly.app</strong>, and any associated services.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              By creating an account or using Jinxly, you acknowledge that you have read, understood, and consent to the data practices described in this Policy. If you do not agree with any part of this Policy, you must discontinue use of the Service immediately.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              For data protection inquiries, please contact us at: <strong>info@jinxly.app</strong>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              2. INFORMATION WE COLLECT
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              We collect only the minimum personal data necessary to operate and improve the Service. The categories of information we collect include:
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed mt-2"><strong>2.1 Account & Profile Information</strong></p>
            <ul className="list-disc list-inside space-y-2 font-sans font-bold text-sm text-zinc-700 ml-2">
              <li>Email address (used for authentication, account recovery, and critical service communications)</li>
              <li>Username, display name, and optional biography text that you choose to provide</li>
              <li>Profile avatar (either a pre-set icon or a photo you upload from your device gallery)</li>
              <li>Optional social media handles (Instagram, TikTok, Snapchat) that you voluntarily add to your profile</li>
              <li>Optional demographic fields including date of birth, location text, and phone number — all entirely optional and editable at any time</li>
            </ul>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed mt-2"><strong>2.2 User-Generated Content (Jinxes)</strong></p>
            <ul className="list-disc list-inside space-y-2 font-sans font-bold text-sm text-zinc-700 ml-2">
              <li>Misfortune log entries (&ldquo;Jinxes&rdquo;): title, description text, severity classification (Low, Moderate, High, Critical), and timestamp</li>
              <li>Privacy designation of each entry: Private Vault (visible only to you) or Public Feed (visible to all users)</li>
              <li>Comments and reactions (Oof!, F) that you post on other users&apos; public Jinxes</li>
            </ul>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed mt-2"><strong>2.3 Location Data</strong></p>
            <ul className="list-disc list-inside space-y-2 font-sans font-bold text-sm text-zinc-700 ml-2">
              <li>Precise GPS coordinates (latitude and longitude) collected only when you explicitly opt in by tapping the &ldquo;Add GPS Location&rdquo; button while logging a public Jinx</li>
              <li>A human-readable location label (e.g., city or neighborhood) that you may optionally enter manually</li>
              <li>Location data is used exclusively to pin public Jinxes on the Map of Misery feature and is never collected passively or in the background</li>
            </ul>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed mt-2"><strong>2.4 Push Notification Tokens</strong></p>
            <ul className="list-disc list-inside space-y-2 font-sans font-bold text-sm text-zinc-700 ml-2">
              <li>When you grant notification permission, we store an Expo Push Notification token linked to your account to deliver in-app event alerts (reactions, comments, new followers, badge achievements)</li>
              <li>You may revoke notification permissions at any time through your device&apos;s system settings</li>
            </ul>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed mt-2"><strong>2.5 Technical & Usage Data</strong></p>
            <ul className="list-disc list-inside space-y-2 font-sans font-bold text-sm text-zinc-700 ml-2">
              <li>Authentication session tokens stored securely using device-level Secure Store (iOS Keychain)</li>
              <li>Standard server-side request logs (IP address, device OS version, request timestamps) retained for a maximum of 30 days for security and abuse prevention purposes</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              We process your personal data only for the following specific and legitimate purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 font-sans font-bold text-sm text-zinc-700">
              <li><strong>Service Delivery:</strong> Authenticating your identity, managing account sessions, and enabling all core platform features</li>
              <li><strong>Gamification Engine:</strong> Calculating your daily Misery Meter score, bad luck streaks, karma points, leaderboard rankings, and unlocking Anti-Badge achievements</li>
              <li><strong>Social Feed:</strong> Displaying your public Jinxes to the community, processing reactions and comments, and managing follow relationships</li>
              <li><strong>Map of Misery:</strong> Rendering consented public location pins on the interactive disaster map (PRO feature)</li>
              <li><strong>Push Notifications:</strong> Delivering real-time alerts for social interactions (reactions, comments, follows, badge unlocks) respecting your in-app notification preferences</li>
              <li><strong>Safety & Moderation:</strong> Detecting violations of Community Guidelines, investigating abuse reports, and enforcing account suspensions</li>
              <li><strong>Service Improvement:</strong> Analysing aggregated, anonymised usage patterns to improve app performance, stability, and feature design. Individual user behaviour is never sold or used for targeted advertising</li>
              <li><strong>Legal Compliance:</strong> Fulfilling obligations under applicable law, responding to lawful requests from authorities, and enforcing our Terms of Use</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              4. DATA STORAGE, SECURITY & RETENTION
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              All personal data is stored on <strong>Supabase (PostgreSQL)</strong> infrastructure, which is hosted on AWS data centers with SOC 2 Type II compliance. We enforce database-level Row Level Security (RLS) policies ensuring that Private Vault entries are strictly inaccessible to any other user or third party, and that users may only access their own account data.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              Authentication credentials and session tokens are stored exclusively in the device-level iOS Secure Enclave (Keychain) and are never transmitted in plain text.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>Data Retention:</strong> We retain your personal data for as long as your account remains active. Upon account deletion, all profile information, private Jinx logs, reactions, comments, follow relationships, badges, and notification records are permanently and irreversibly purged from all our systems within 30 days. Anonymised, aggregated statistical data (e.g., total app-wide Jinx counts) may be retained indefinitely as it cannot be linked to any individual.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              5. THIRD-PARTY SERVICES & DATA SHARING
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              We do not sell, rent, or trade your personal information to third parties for commercial or marketing purposes. Data is disclosed only in the following limited circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 font-sans font-bold text-sm text-zinc-700">
              <li><strong>Infrastructure Providers:</strong> Supabase Inc. (database, authentication, and file storage hosting). Supabase processes data under a Data Processing Agreement (DPA) and does not use your data for its own commercial purposes.</li>
              <li><strong>Push Notification Delivery:</strong> Expo Application Services (EAS) and Apple Push Notification Service (APNS) are used solely to route push notifications to your device. Only your anonymised push token is transmitted — no personal profile data is shared.</li>
              <li><strong>AI Oracle Feature:</strong> Mishap descriptions you voluntarily submit to the Jinxie AI Oracle are processed transiently by a third-party Large Language Model API provider to generate sarcastic roasts and karma predictions. These inputs are not retained by the AI provider beyond the immediate API request lifecycle and are not used to train AI models.</li>
              <li><strong>Apple App Store / Google Play Store:</strong> Payment and subscription transactions are handled exclusively by Apple and Google. We receive only a confirmation of subscription status and do not process or store your payment card details.</li>
              <li><strong>Legal Obligations:</strong> We may disclose data to competent government authorities when required to do so by law, court order, or to protect the safety and rights of our users and the public.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              6. CHILDREN&apos;S PRIVACY
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              Jinxly is not directed at or intended for children under the age of 13. We do not knowingly collect personal data from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <strong>info@jinxly.app</strong>. We will take prompt steps to delete that information from our systems.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              7. YOUR RIGHTS & CHOICES
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              In accordance with applicable privacy regulations including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 font-sans font-bold text-sm text-zinc-700">
              <li><strong>Right of Access:</strong> You may request a copy of all personal data we hold about you at any time</li>
              <li><strong>Right to Rectification:</strong> You may correct or update inaccurate profile information directly via the Edit Profile screen in the app at any time</li>
              <li><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> You may permanently delete your account and all associated data through the Settings &rsaquo; Delete Account option within the app, or via our <a href="/delete-account" className="text-brutalist-red hover:underline font-black">online account deletion portal</a></li>
              <li><strong>Right to Restrict Processing:</strong> You may make your public Jinxes private at any time, removing them from public view without permanent deletion</li>
              <li><strong>Right to Data Portability:</strong> Upon written request to <strong>info@jinxly.app</strong>, we will provide an export of your personal data in a machine-readable format within 30 days</li>
              <li><strong>Right to Object:</strong> You may object to certain processing of your data by contacting us. We will assess and respond within 30 days</li>
              <li><strong>Notification Preferences:</strong> You may manage push notification categories (reactions, comments, follows, badges) within the app Settings &rsaquo; Alerts Setup screen, or disable all notifications via your device&apos;s system settings</li>
              <li><strong>Location Permissions:</strong> You may revoke GPS permission at any time via your device&apos;s privacy settings. Revoking permission does not affect previously submitted location data; contact us to remove existing location records</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              8. INTERNATIONAL DATA TRANSFERS
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              Jinxly is a globally accessible application. Your data may be stored and processed in countries other than your country of residence, including the United States, where our infrastructure providers operate data centres. By using the Service, you consent to the transfer of your data to these jurisdictions. Where required, we rely on appropriate safeguards (such as Standard Contractual Clauses approved by the European Commission) to ensure your data receives an adequate level of protection.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              9. CHANGES TO THIS POLICY
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or service features. Material changes will be communicated via in-app notification and/or email at least 14 days before taking effect. We encourage you to review this page periodically. The &ldquo;Last Updated&rdquo; date at the top of this page indicates when changes were last made. Continued use of Jinxly after any changes constitutes your acceptance of the updated Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              10. CONTACT & DATA PROTECTION OFFICER
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              For any questions, requests, or concerns regarding this Privacy Policy or our data handling practices, please contact us through any of the following channels:
            </p>
            <ul className="list-disc list-inside space-y-2 font-sans font-bold text-sm text-zinc-700">
              <li><strong>Email:</strong> info@jinxly.app</li>
              <li><strong>Support Portal:</strong> <a href="/support" className="text-brutalist-teal hover:underline font-black">jinxly.app/support</a></li>
              <li><strong>Company:</strong> Eraslan Medya</li>
              <li><strong>Website:</strong> jinxly.app</li>
            </ul>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              We aim to respond to all privacy-related inquiries within <strong>5 business days</strong>. If you are located in the European Economic Area and believe your rights under GDPR have been violated, you also have the right to lodge a complaint with the relevant supervisory authority in your country of residence.
            </p>
          </section>

        </BrutalistCard>
      </main>

      <footer className="bg-brutalist-black text-brutalist-white px-6 py-8 font-mono text-[10px] uppercase text-center mt-12">
        <p>© 2026 Jinxly. A PROJECT BY ERASLAN MEDYA. ALL RIGHTS RESERVED.</p>
        <p className="text-zinc-600 mt-2">IPHONE AND APP STORE ARE TRADEMARKS OF APPLE INC.</p>
      </footer>

    </div>
  );
}
