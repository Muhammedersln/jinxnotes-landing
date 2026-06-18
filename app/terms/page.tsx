"use client";

import React from 'react';
import Link from 'next/link';
import { Ghost, ArrowLeft } from 'lucide-react';
import { BrutalistButton } from '../components/ui/BrutalistButton';
import { BrutalistCard } from '../components/ui/BrutalistCard';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-brutalist-bg text-brutalist-black font-sans selection:bg-brutalist-yellow selection:text-brutalist-black">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-brutalist-white border-b-4 border-brutalist-black px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Ghost size={28} className="text-brutalist-black" strokeWidth={2.5} />
            <span className="font-mono font-black text-2xl uppercase tracking-tighter">Jinx</span>
            <span className="bg-brutalist-black text-brutalist-white px-2 py-0.5 font-mono font-black text-lg uppercase rotate-[-3deg] shadow-brutalist-sm">
              ly
            </span>
          </Link>
          <Link href="/">
            <BrutalistButton variant="white" size="sm" className="flex items-center gap-2">
              <ArrowLeft size={14} strokeWidth={3} /> GO BACK
            </BrutalistButton>
          </Link>
        </div>
      </header>

      {/* CONTENT BODY */}
      <main className="max-w-4xl mx-auto py-12 px-6">

        <div className="mb-10 inline-block rotate-[1deg]">
          <span className="bg-brutalist-teal text-brutalist-black font-mono font-black text-xs uppercase px-3 py-1.5 border-4 border-brutalist-black shadow-brutalist-sm">
            ⚖️ AGREEMENT
          </span>
          <h1 className="font-mono font-black text-4xl sm:text-5xl uppercase tracking-tight mt-3 border-b-4 border-brutalist-black pb-2">
            TERMS OF USE
          </h1>
          <p className="font-mono font-bold text-xs uppercase text-zinc-500 mt-2">
            Last Updated: June 15, 2026 &nbsp;|&nbsp; Effective: June 15, 2026
          </p>
        </div>

        <BrutalistCard variant="white" shadowSize="lg" className="p-8 space-y-8">

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              1. ACCEPTANCE OF TERMS
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              These Terms of Use (&ldquo;Terms&rdquo; or &ldquo;Agreement&rdquo;) constitute a legally binding contract between you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and <strong>Eraslan Medya</strong> (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), the developer and operator of the <strong>Jinxly</strong> mobile application and website (collectively, the &ldquo;Service&rdquo;).
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              By downloading, installing, accessing, or using Jinxly in any manner, you represent that you have read, understood, and agree to be bound by these Terms and our <Link href="/privacy" className="text-brutalist-teal hover:underline font-black">Privacy Policy</Link>, which is incorporated herein by reference. If you do not agree to all of these Terms, you must immediately cease using the Service and uninstall the application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              2. ELIGIBILITY & ACCOUNT REGISTRATION
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>2.1 Age Requirement:</strong> You must be at least 13 years of age, or the minimum legal age to access digital social media services in your jurisdiction (whichever is higher), to create a Jinxly account. By creating an account, you represent and warrant that you meet this age requirement. Users between 13 and 18 years of age represent that their parent or legal guardian has reviewed and consented to these Terms.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>2.2 Account Security:</strong> You are solely and entirely responsible for maintaining the confidentiality of your account credentials. You agree to immediately notify us at <strong>info@jinxly.app</strong> upon becoming aware of any unauthorized access to your account. We will not be liable for any losses arising from your failure to safeguard your credentials.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>2.3 Account Accuracy:</strong> You agree to provide truthful, accurate, and complete information during registration and to keep your profile current. You may not create an account using a false identity or impersonate any person or entity.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>2.4 One Account Per Person:</strong> Each user may maintain only one active Jinxly account. Creating multiple accounts to circumvent moderation, manipulate rankings, or for any other reason is strictly prohibited and will result in permanent termination of all associated accounts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              3. COMMUNITY GUIDELINES & PROHIBITED CONDUCT
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              Jinxly is a lighthearted entertainment platform for sharing daily misfortunes in a humorous, good-natured manner. The following conduct is strictly prohibited:
            </p>
            <ul className="list-disc list-inside space-y-2 font-sans font-bold text-sm text-zinc-700">
              <li><strong>Hate Speech & Harassment:</strong> Content promoting discrimination or hatred based on race, ethnicity, gender, sexual orientation, religion, disability, or nationality</li>
              <li><strong>Personal Data Exposure (Doxxing):</strong> Disclosing another individual&apos;s private personal information without their explicit consent</li>
              <li><strong>Sexually Explicit or Graphic Content:</strong> Pornographic, obscene, or graphically violent material of any kind</li>
              <li><strong>Spam & Manipulation:</strong> Artificially inflating reactions, followers, or rankings through bots or coordinated inauthentic behaviour</li>
              <li><strong>Intellectual Property Infringement:</strong> Publishing content that violates any third party&apos;s copyright, trademark, or proprietary rights</li>
              <li><strong>Illegal Activities:</strong> Promoting, facilitating, or engaging in conduct that violates applicable law</li>
              <li><strong>Misinformation:</strong> Deliberately distributing false information that could deceive users or harm third parties</li>
              <li><strong>Platform Abuse:</strong> Reverse engineering, scraping, or attempting to disrupt the technical operation of the Service</li>
            </ul>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              Violations may result in immediate content removal, account suspension, or permanent termination without prior notice or refund of subscription fees.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              4. USER CONTENT & INTELLECTUAL PROPERTY
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>4.1 Ownership:</strong> You retain full ownership of all original content you create and submit to Jinxly, including Jinx entries, comments, and profile information (&ldquo;User Content&rdquo;).
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>4.2 License Grant:</strong> By designating a Jinx as &ldquo;Public,&rdquo; you grant Eraslan Medya a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, and sublicensable licence to use, reproduce, display, and feature that content across the Jinxly platform and our official marketing channels, with attribution where reasonable.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>4.3 Private Content:</strong> Content designated as &ldquo;Private&rdquo; is never accessed or used by us except where required by law or to investigate a specific abuse report.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>4.4 Platform IP:</strong> All intellectual property rights in Jinxly, including its design, branding, codebase, and the &ldquo;Jinxly&rdquo; name and logo, are exclusively owned by Eraslan Medya and are not transferred to you under these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              5. PRO SUBSCRIPTION & IN-APP PURCHASES
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>5.1 Plans:</strong> Jinxly offers optional paid subscriptions (&ldquo;Jinxly PRO&rdquo;) on monthly or annual terms, unlocking the Map of Misery, Jinxie AI Oracle, unlimited public posting, and enhanced social features.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>5.2 Billing:</strong> All payment processing is handled exclusively by the Apple App Store or Google Play Store. We do not collect or store your payment card information. Fees are charged at purchase confirmation and at the start of each renewal period.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>5.3 Auto-Renewal & Cancellation:</strong> Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date via your App Store or Google Play account settings.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>5.4 Refunds:</strong> All refund requests are governed exclusively by Apple App Store and Google Play Store refund policies. Contact Apple Support or Google Play Support directly for refund inquiries.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>5.5 Feature Changes:</strong> We reserve the right to modify PRO features. Material reductions will be communicated at least 30 days in advance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              6. DISCLAIMER OF WARRANTIES
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR UNINTERRUPTED, ERROR-FREE OPERATION. We do not warrant that the Service will always be available or free from defects.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              7. LIMITATION OF LIABILITY & COSMIC DISCLAIMER
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ERASLAN MEDYA AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              Jinxly is a platform for entertainment and humour. We expressly disclaim all liability for any actual real-world misfortune, bad luck, spilled beverages, dropped devices, missed trains, failed exams, or any other adverse life events that may occur before, during, or after the use of this application. Users are solely responsible for managing their own cosmic karma.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              Our total aggregate liability for any claim shall not exceed the greater of (a) the total amount you paid us in the 12 months preceding the claim, or (b) USD $10.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              8. ACCOUNT TERMINATION
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>By You:</strong> You may delete your account at any time via Settings &rsaquo; Danger Zone &rsaquo; Delete Account in the app. Deletion is permanent — all data is purged from active systems.
            </p>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              <strong>By Us:</strong> We may suspend or permanently terminate your account without prior notice if we determine you have violated these Terms, engaged in fraud, or if required by law. Upon termination, your right to use the Service immediately ceases.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              9. GOVERNING LAW & DISPUTE RESOLUTION
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              These Terms are governed by the laws of the Republic of Turkey. Any disputes shall be subject to the exclusive jurisdiction of the courts of Istanbul, Turkey. Before initiating formal proceedings, both parties agree to attempt good-faith informal resolution by contacting <strong>info@jinxly.app</strong> and allowing 30 days for resolution efforts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              10. AMENDMENTS
            </h2>
            <p className="font-sans font-bold text-sm text-zinc-800 leading-relaxed">
              We reserve the right to modify these Terms at any time. For material changes, we will provide at least 14 days&apos; advance notice via in-app notification and/or email. Continued use of Jinxly after the effective date constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-mono font-black text-xl uppercase border-b-2 border-brutalist-black pb-1">
              11. CONTACT
            </h2>
            <ul className="list-disc list-inside space-y-2 font-sans font-bold text-sm text-zinc-700">
              <li><strong>Legal Inquiries:</strong> info@jinxly.app</li>
              <li><strong>General Support:</strong> <Link href="/support" className="text-brutalist-teal hover:underline font-black">jinxly.app/support</Link></li>
              <li><strong>Company:</strong> Eraslan Medya</li>
            </ul>
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
