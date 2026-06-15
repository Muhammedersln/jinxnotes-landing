"use client";

import React from 'react';
import { Ghost, Download, Star, MapPin, Award, Smartphone, ArrowRight, Shield, Heart, Zap, Sparkles, MessageSquare } from 'lucide-react';
import { BrutalistButton } from './components/ui/BrutalistButton';
import { BrutalistCard } from './components/ui/BrutalistCard';
import { InteractiveJinxCard } from './components/features/InteractiveJinxCard';
import { InteractiveOracle } from './components/features/InteractiveOracle';
import { InteractiveMiseryMeter } from './components/features/InteractiveMiseryMeter';

export default function Home() {
  const handleScrollToPlayground = () => {
    document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brutalist-bg text-brutalist-black font-sans selection:bg-brutalist-yellow selection:text-brutalist-black">
      
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 bg-brutalist-white border-b-4 border-brutalist-black px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Ghost size={28} className="text-brutalist-black" strokeWidth={2.5} />
            <span className="font-mono font-black text-2xl uppercase tracking-tighter">Jinx</span>
            <span className="bg-brutalist-black text-brutalist-white px-2 py-0.5 font-mono font-black text-lg uppercase rotate-[-3deg] shadow-brutalist-sm">
              Notes
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 font-mono font-bold uppercase text-xs">
            <a href="#how-it-works" className="hover:underline hover:text-brutalist-teal transition-colors">How It Works</a>
            <a href="#features" className="hover:underline hover:text-brutalist-red transition-colors">Features</a>
            <a href="#playground" className="hover:underline hover:text-brutalist-teal transition-colors font-black">Experience</a>
            <a href="#screenshots" className="hover:underline hover:text-brutalist-orange transition-colors">Screenshots</a>
            <a href="#download" className="hover:underline hover:text-brutalist-purple transition-colors">Download</a>
          </nav>

          <div className="flex items-center gap-3">
            <BrutalistButton 
              onClick={handleScrollToPlayground} 
              variant="teal" 
              size="sm" 
              className="hidden sm:inline-flex"
            >
              Test Live ➔
            </BrutalistButton>
            <a href="#download">
              <BrutalistButton variant="primary" size="sm">
                DOWNLOAD <Download size={14} className="ml-1.5 inline" strokeWidth={3} />
              </BrutalistButton>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 px-6 overflow-hidden border-b-4 border-brutalist-black">
        <div className="absolute top-10 right-[-10%] w-72 h-72 bg-brutalist-purple rounded-full opacity-25 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-[-10%] w-80 h-80 bg-brutalist-yellow rounded-full opacity-20 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 z-10">
            <span className="bg-brutalist-teal text-brutalist-black font-mono font-black text-xs uppercase px-3 py-1.5 border-4 border-brutalist-black rotate-[-2deg] shadow-brutalist-sm">
              📢 NEW AGE SOCIAL FEED FOR REAL LIFE
            </span>

            <h1 className="font-mono font-black text-4xl sm:text-6xl uppercase leading-[1.05] tracking-tight">
              Turn Your Bad Days <br />
              <span className="bg-brutalist-red text-brutalist-white px-3 py-1 inline-block rotate-[1deg] border-4 border-brutalist-black mt-2 shadow-brutalist-md">
                INTO LAUGHS
              </span> <br />
              WITH THE WORLD!
            </h1>

            <p className="font-sans font-bold text-base sm:text-lg text-zinc-800 leading-relaxed max-w-xl">
              Tired of perfect lifestyles and fake highlights on social media? 
              <strong className="text-brutalist-black"> JinxNotes</strong> is a Neo-Brutalist daily journal & social feed where you can document your everyday misfortunes, awkward clumsy moments, and bad luck, and laugh them off with a community that relates.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <BrutalistButton onClick={handleScrollToPlayground} variant="yellow" size="lg" rotate="rotate-[-1deg]">
                Test Live Simulator
              </BrutalistButton>
              <a href="#download">
                <BrutalistButton variant="white" size="lg" rotate="rotate-[1deg]">
                  Get JinxNotes
                </BrutalistButton>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t-2 border-dashed border-zinc-400 w-full">
              <div className="flex items-center gap-1 font-mono font-black text-sm uppercase">
                <Star size={16} className="text-brutalist-yellow fill-brutalist-yellow" strokeWidth={2.5} />
                <span>4.9/5 APP STORE RATING</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono font-black text-sm uppercase">
                <Heart size={16} className="text-brutalist-red fill-brutalist-red animate-pulse" />
                <span>100K+ UNLUCKY HUMANS</span>
              </div>
            </div>
          </div>

          {/* Right Column Layout Cards (Visual representation of app using generated mockup) */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-8 lg:py-0">
            <div className="relative w-full max-w-sm">
              {/* Back Card Decoration */}
              <div className="absolute inset-0 bg-brutalist-black border-4 border-brutalist-black translate-x-[8px] translate-y-[8px] rotate-[2deg] rounded-3xl" />
              
              {/* Generated smartphone mockup container */}
              <div className="relative border-4 border-brutalist-black bg-brutalist-white rounded-3xl overflow-hidden shadow-brutalist-xl rotate-[-2deg] transition-all hover:rotate-0 duration-300">
                <img 
                  src="/mockup.png" 
                  alt="JinxNotes app preview" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-20 px-6 bg-brutalist-white border-b-4 border-brutalist-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-brutalist-teal text-brutalist-black font-mono font-black text-xs uppercase px-3 py-1.5 border-4 border-brutalist-black rotate-[-1deg] inline-block shadow-brutalist-sm">
              ⚙️ THE SYSTEM
            </span>
            <h2 className="font-mono font-black text-3xl sm:text-5xl uppercase tracking-tight mt-6">
              HOW IT WORKS
            </h2>
            <p className="font-sans font-bold text-sm sm:text-base text-zinc-700 mt-4 leading-relaxed">
              Logging disasters is as easy as tripping over your own feet. Here is your daily loop.
            </p>
          </div>

          {/* Step Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <BrutalistCard variant="white" shadowSize="md" className="p-6 relative flex flex-col justify-between" rotate="rotate-[-1deg]">
              <div>
                <span className="absolute -top-6 -left-3 bg-brutalist-red text-brutalist-black border-4 border-brutalist-black font-mono font-black text-2xl w-12 h-12 flex items-center justify-center shadow-brutalist-sm rotate-[-8deg]">
                  1
                </span>
                <h3 className="font-mono font-black text-xl uppercase mt-4 mb-3">EXPEDITE THE DISASTER</h3>
                <p className="font-sans font-bold text-sm text-zinc-700 leading-relaxed">
                  You spill coffee on your clean shirt, miss the train door by a millisecond, or send a text meant for your crush to the work group chat. Real life happens.
                </p>
              </div>
              <div className="mt-6 font-mono font-black text-[10px] text-brutalist-red uppercase flex items-center gap-1.5">
                <Zap size={14} /> ERROR OCCURRED
              </div>
            </BrutalistCard>

            {/* Step 2 */}
            <BrutalistCard variant="white" shadowSize="md" className="p-6 relative flex flex-col justify-between" rotate="rotate-[2deg]">
              <div>
                <span className="absolute -top-6 -left-3 bg-brutalist-yellow text-brutalist-black border-4 border-brutalist-black font-mono font-black text-2xl w-12 h-12 flex items-center justify-center shadow-brutalist-sm rotate-[5deg]">
                  2
                </span>
                <h3 className="font-mono font-black text-xl uppercase mt-4 mb-3">LOG IT INSTANTLY</h3>
                <p className="font-sans font-bold text-sm text-zinc-700 leading-relaxed">
                  Open JinxNotes, write down the mishap, and select severity (Low to Critical). The app updates your streak and immediately increments your daily Misery Meter.
                </p>
              </div>
              <div className="mt-6 font-mono font-black text-[10px] text-brutalist-yellow uppercase flex items-center gap-1.5">
                <Smartphone size={14} /> ENTRY REGISTERED
              </div>
            </BrutalistCard>

            {/* Step 3 */}
            <BrutalistCard variant="white" shadowSize="md" className="p-6 relative flex flex-col justify-between" rotate="rotate-[-2deg]">
              <div>
                <span className="absolute -top-6 -left-3 bg-brutalist-teal text-brutalist-black border-4 border-brutalist-black font-mono font-black text-2xl w-12 h-12 flex items-center justify-center shadow-brutalist-sm rotate-[10deg]">
                  3
                </span>
                <h3 className="font-mono font-black text-xl uppercase mt-4 mb-3">COPING & LAUGHING</h3>
                <p className="font-sans font-bold text-sm text-zinc-700 leading-relaxed">
                  Share it publicly to collect Oofs! and Fs from the feed. Need advice? Ask Jinxie AI Oracle to roast your life choices and forecast your bad luck scores.
                </p>
              </div>
              <div className="mt-6 font-mono font-black text-[10px] text-brutalist-teal uppercase flex items-center gap-1.5">
                <Sparkles size={14} /> SOCIAL SYMPATHY
              </div>
            </BrutalistCard>

          </div>
        </div>
      </section>

      {/* PLAYGROUND SECTION (INTERACTIVE EXPERIENCE) */}
      <section id="playground" className="py-20 px-6 bg-brutalist-bg border-b-4 border-brutalist-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-brutalist-purple text-brutalist-white font-mono font-black text-xs uppercase px-3 py-1.5 border-4 border-brutalist-black rotate-[2deg] inline-block shadow-brutalist-sm">
              🎮 LIVE PLAYGROUND
            </span>
            <h2 className="font-mono font-black text-3xl sm:text-5xl uppercase tracking-tight mt-6">
              TEST IT LIVE!
            </h2>
            <p className="font-sans font-bold text-sm sm:text-base text-zinc-700 mt-4 leading-relaxed">
              Interact with the core features of the JinxNotes mobile app right here. Change severity meters, request sarcastic AI roasts, or react to live feed posts!
            </p>
          </div>

          {/* Playground widgets container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            
            {/* Widget 1: Misery Meter Simulator */}
            <div className="w-full flex flex-col items-center gap-3">
              <span className="font-mono font-black text-xs uppercase bg-brutalist-teal text-brutalist-black px-3 py-1 border-2 border-brutalist-black shadow-brutalist-sm">
                1. MISERY METER (LUCK TRACKER)
              </span>
              <InteractiveMiseryMeter />
            </div>

            {/* Widget 2: Reaction Feed Card */}
            <div className="w-full flex flex-col items-center gap-3">
              <span className="font-mono font-black text-xs uppercase bg-brutalist-yellow text-brutalist-black px-3 py-1 border-2 border-brutalist-black shadow-brutalist-sm">
                2. LIVE COMMUNITY CARD
              </span>
              <InteractiveJinxCard />
            </div>

            {/* Widget 3: AI Oracle Roast Generator */}
            <div className="w-full flex flex-col items-center gap-3">
              <span className="font-mono font-black text-xs uppercase bg-brutalist-purple text-brutalist-white px-3 py-1 border-2 border-brutalist-black shadow-brutalist-sm">
                3. JINXIE AI ORACLE
              </span>
              <InteractiveOracle />
            </div>

          </div>
        </div>
      </section>

      {/* CORE FEATURES SHOWCASE */}
      <section id="features" className="py-20 px-6 bg-brutalist-white border-b-4 border-brutalist-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-brutalist-red text-brutalist-white font-mono font-black text-xs uppercase px-3 py-1.5 border-4 border-brutalist-black rotate-[-1deg] inline-block shadow-brutalist-sm">
              ⚡ FEATURES
            </span>
            <h2 className="font-mono font-black text-3xl sm:text-5xl uppercase tracking-tight mt-6">
              WHAT'S INSIDE JINXNOTES?
            </h2>
            <p className="font-sans font-bold text-sm sm:text-base text-zinc-700 mt-4 leading-relaxed">
              Your ultimate coping tool. Turn every embarrassing, clumsy moment into collective laughter.
            </p>
          </div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <BrutalistCard variant="white" shadowSize="md" hoverEffect={true} className="p-6">
              <div className="w-12 h-12 bg-brutalist-teal border-2 border-brutalist-black flex items-center justify-center font-mono font-black text-xl mb-4 shadow-brutalist-sm">
                🔒
              </div>
              <h3 className="font-mono font-black text-lg uppercase mb-2">PRIVATE VAULT</h3>
              <p className="font-sans font-bold text-sm text-zinc-700 leading-relaxed">
                Lock away your worst self-sabotages and cringe moments. Completely private, encrypted, and visible only to you.
              </p>
            </BrutalistCard>

            {/* Feature 2 */}
            <BrutalistCard variant="yellow" shadowSize="md" hoverEffect={true} className="p-6 rotate-1">
              <div className="w-12 h-12 bg-brutalist-white border-2 border-brutalist-black flex items-center justify-center font-mono font-black text-xl mb-4 shadow-brutalist-sm">
                🌐
              </div>
              <h3 className="font-mono font-black text-lg uppercase mb-2">PUBLIC FEED</h3>
              <p className="font-sans font-bold text-sm text-brutalist-black leading-relaxed">
                Share the disaster! Collect Oof! (empathy) and F (respects) reactions from a community of clumsy humans who totally get it.
              </p>
            </BrutalistCard>

            {/* Feature 3 */}
            <BrutalistCard variant="purple" shadowSize="md" hoverEffect={true} className="p-6 -rotate-1 text-brutalist-white">
              <div className="w-12 h-12 bg-brutalist-yellow border-2 border-brutalist-black flex items-center justify-center font-mono font-black text-xl mb-4 shadow-brutalist-sm text-brutalist-black">
                🔮
              </div>
              <h3 className="font-mono font-black text-lg uppercase mb-2">JINXIE AI ORACLE</h3>
              <p className="font-sans font-bold text-sm text-zinc-200 leading-relaxed">
                Get roasted by our sarcastic AI coach. Analyze your daily entries, get funny roasts, and check your daily cosmic luck forecast.
              </p>
            </BrutalistCard>

            {/* Feature 4 */}
            <BrutalistCard variant="teal" shadowSize="md" hoverEffect={true} className="p-6">
              <div className="w-12 h-12 bg-brutalist-red border-2 border-brutalist-black flex items-center justify-center font-mono font-black text-xl mb-4 shadow-brutalist-sm text-brutalist-black">
                🗺️
              </div>
              <h3 className="font-mono font-black text-lg uppercase mb-2">MAP OF MISERY</h3>
              <p className="font-sans font-bold text-sm text-brutalist-black leading-relaxed">
                Track the bad vibes geographically. See where accidents happen most in real-time on our interactive misery map.
              </p>
            </BrutalistCard>

            {/* Feature 5 */}
            <BrutalistCard variant="red" shadowSize="md" hoverEffect={true} className="p-6 rotate-1">
              <div className="w-12 h-12 bg-brutalist-white border-2 border-brutalist-black flex items-center justify-center font-mono font-black text-xl mb-4 shadow-brutalist-sm text-brutalist-black">
                🏆
              </div>
              <h3 className="font-mono font-black text-lg uppercase mb-2">HALL OF SHAME</h3>
              <p className="font-sans font-bold text-sm text-brutalist-black leading-relaxed">
                Being at the top has never felt so painful. The ultimate leaderboard ranking the most unluckiest users of the week.
              </p>
            </BrutalistCard>

            {/* Feature 6 */}
            <BrutalistCard variant="white" shadowSize="md" hoverEffect={true} className="p-6">
              <div className="w-12 h-12 bg-brutalist-purple border-2 border-brutalist-black flex items-center justify-center font-mono font-black text-xl mb-4 shadow-brutalist-sm text-brutalist-white">
                🎖️
              </div>
              <h3 className="font-mono font-black text-lg uppercase mb-2">ANTI-BADGES</h3>
              <p className="font-sans font-bold text-sm text-zinc-700 leading-relaxed">
                Unlock reverse accomplishments. Spill coffee to get the 'Caffeine Chaos' badge, or trip in public to earn 'Gravity Tester'.
              </p>
            </BrutalistCard>

          </div>
        </div>
      </section>

      {/* SCREENSHOTS / PREVIEW GALLERY SECTION */}
      <section id="screenshots" className="py-20 px-6 bg-brutalist-bg border-b-4 border-brutalist-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-brutalist-orange text-brutalist-black font-mono font-black text-xs uppercase px-3 py-1.5 border-4 border-brutalist-black rotate-[1deg] inline-block shadow-brutalist-sm">
              📸 PREVIEW GALLERY
            </span>
            <h2 className="font-mono font-black text-3xl sm:text-5xl uppercase tracking-tight mt-6">
              SNEAK PEEK INSIDE
            </h2>
            <p className="font-sans font-bold text-sm sm:text-base text-zinc-700 mt-4 leading-relaxed">
              Explore the interface of JinxNotes. Beautiful, premium, and built completely with raw Neo-Brutalist elements.
            </p>
          </div>

          {/* Grid of mockup frames. User can swap images here later */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Screen 1 */}
            <div className="flex flex-col items-center gap-4">
              <BrutalistCard 
                variant="yellow" 
                shadowSize="lg" 
                className="w-full aspect-[9/16] rounded-2xl overflow-hidden relative border-4 border-brutalist-black flex flex-col justify-between p-5 rotate-[-1deg] hover:rotate-0 transition-transform duration-300"
              >
                {/* Mock Phone Status Bar */}
                <div className="flex justify-between items-center w-full font-mono text-[9px] font-bold border-b border-brutalist-black pb-2 text-zinc-800">
                  <span>10:09 AM</span>
                  <span className="flex gap-1">📶 🔋 100%</span>
                </div>
                
                {/* Placeholder content representing Screen 1 */}
                <div className="flex-1 flex flex-col justify-center items-center text-center gap-3">
                  <div className="bg-brutalist-white border-2 border-brutalist-black p-3 shadow-brutalist-sm rounded-full">
                    <Zap size={24} className="text-brutalist-black" />
                  </div>
                  <h4 className="font-mono font-black text-sm uppercase">MISERY METER</h4>
                  <p className="font-sans font-bold text-[10px] text-zinc-700 leading-tight">
                    Logs misfortune levels in real-time and monitors your bad luck daily percentages.
                  </p>
                </div>
                
                {/* Mock Home indicator */}
                <div className="w-20 h-1 bg-brutalist-black rounded-full mx-auto" />
              </BrutalistCard>
              <span className="font-mono font-black text-xs uppercase tracking-wide">1. Daily Tracker Screen</span>
            </div>

            {/* Screen 2 */}
            <div className="flex flex-col items-center gap-4">
              <BrutalistCard 
                variant="teal" 
                shadowSize="lg" 
                className="w-full aspect-[9/16] rounded-2xl overflow-hidden relative border-4 border-brutalist-black flex flex-col justify-between p-5 rotate-[2deg] hover:rotate-0 transition-transform duration-300"
              >
                {/* Mock Status Bar */}
                <div className="flex justify-between items-center w-full font-mono text-[9px] font-bold border-b border-brutalist-black pb-2 text-zinc-800">
                  <span>10:09 AM</span>
                  <span className="flex gap-1">📶 🔋 100%</span>
                </div>
                
                {/* Placeholder content representing Screen 2 */}
                <div className="flex-1 flex flex-col justify-center items-center text-center gap-3">
                  <div className="bg-brutalist-white border-2 border-brutalist-black p-3 shadow-brutalist-sm rounded-full">
                    <MessageSquare size={24} className="text-brutalist-black" />
                  </div>
                  <h4 className="font-mono font-black text-sm uppercase">SOCIAL FEED</h4>
                  <p className="font-sans font-bold text-[10px] text-zinc-700 leading-tight">
                    Connect with clumsy people. React with F or Oof! on shared public misfortunes.
                  </p>
                </div>
                
                <div className="w-20 h-1 bg-brutalist-black rounded-full mx-auto" />
              </BrutalistCard>
              <span className="font-mono font-black text-xs uppercase tracking-wide">2. Public Feed Screen</span>
            </div>

            {/* Screen 3 */}
            <div className="flex flex-col items-center gap-4">
              <BrutalistCard 
                variant="purple" 
                shadowSize="lg" 
                className="w-full aspect-[9/16] rounded-2xl overflow-hidden relative border-4 border-brutalist-black flex flex-col justify-between p-5 rotate-[-2deg] hover:rotate-0 transition-transform duration-300 text-brutalist-white"
              >
                {/* Mock Status Bar */}
                <div className="flex justify-between items-center w-full font-mono text-[9px] font-bold border-b border-zinc-700 pb-2 text-zinc-300">
                  <span>10:09 AM</span>
                  <span className="flex gap-1">📶 🔋 100%</span>
                </div>
                
                {/* Placeholder content representing Screen 3 */}
                <div className="flex-1 flex flex-col justify-center items-center text-center gap-3">
                  <div className="bg-brutalist-white border-2 border-brutalist-black p-3 shadow-brutalist-sm rounded-full text-brutalist-black">
                    <Sparkles size={24} />
                  </div>
                  <h4 className="font-mono font-black text-sm uppercase text-brutalist-white">JINXIE ORACLE</h4>
                  <p className="font-sans font-bold text-[10px] text-zinc-300 leading-tight">
                    Submit events to receive sarcastic roasts and daily cosmic karma calculations.
                  </p>
                </div>
                
                <div className="w-20 h-1 bg-brutalist-white rounded-full mx-auto" />
              </BrutalistCard>
              <span className="font-mono font-black text-xs uppercase tracking-wide">3. AI Oracle Screen</span>
            </div>

            {/* Screen 4 */}
            <div className="flex flex-col items-center gap-4">
              <BrutalistCard 
                variant="red" 
                shadowSize="lg" 
                className="w-full aspect-[9/16] rounded-2xl overflow-hidden relative border-4 border-brutalist-black flex flex-col justify-between p-5 rotate-[1deg] hover:rotate-0 transition-transform duration-300"
              >
                {/* Mock Status Bar */}
                <div className="flex justify-between items-center w-full font-mono text-[9px] font-bold border-b border-brutalist-black pb-2 text-zinc-800">
                  <span>10:09 AM</span>
                  <span className="flex gap-1">📶 🔋 100%</span>
                </div>
                
                {/* Placeholder content representing Screen 4 */}
                <div className="flex-1 flex flex-col justify-center items-center text-center gap-3">
                  <div className="bg-brutalist-white border-2 border-brutalist-black p-3 shadow-brutalist-sm rounded-full">
                    <Award size={24} className="text-brutalist-black" />
                  </div>
                  <h4 className="font-mono font-black text-sm uppercase">ANTI-BADGES</h4>
                  <p className="font-sans font-bold text-[10px] text-zinc-700 leading-tight">
                    Build bad luck streaks and unlock badges for absurd real-life accomplishments.
                  </p>
                </div>
                
                <div className="w-20 h-1 bg-brutalist-black rounded-full mx-auto" />
              </BrutalistCard>
              <span className="font-mono font-black text-xs uppercase tracking-wide">4. Profile & Badges Screen</span>
            </div>

          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA SECTION */}
      <section id="download" className="py-20 px-6 bg-brutalist-yellow border-b-4 border-brutalist-black relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-brutalist-red rounded-full opacity-30 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Ghost size={64} className="mx-auto text-brutalist-black mb-6 animate-bounce" strokeWidth={2.5} />
          
          <h2 className="font-mono font-black text-4xl sm:text-6xl uppercase tracking-tight mb-6 leading-none">
            READY TO LAUGH AT <br />
            YOUR BAD LUCK?
          </h2>
          
          <p className="font-sans font-bold text-base sm:text-xl text-brutalist-black max-w-xl mx-auto mb-10 leading-relaxed">
            Download JinxNotes for iOS and Android today, start your bad luck streak, and laugh it off with the community.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* App Store Button Mock */}
            <a href="https://apple.co/3..." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <BrutalistButton variant="primary" size="lg" className="w-full flex items-center gap-3" rotate="rotate-[-1deg]">
                <Smartphone size={24} strokeWidth={2.5} />
                <div className="text-left font-mono font-black leading-tight">
                  <span className="text-[10px] block font-bold">DOWNLOAD ON THE</span>
                  <span className="text-sm block">APP STORE</span>
                </div>
              </BrutalistButton>
            </a>

            {/* Google Play Store Button Mock */}
            <a href="https://play.google.com/..." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <BrutalistButton variant="white" size="lg" className="w-full flex items-center gap-3 border-4 border-brutalist-black" rotate="rotate-[2deg]">
                <Smartphone size={24} strokeWidth={2.5} />
                <div className="text-left font-mono font-black leading-tight text-brutalist-black">
                  <span className="text-[10px] block font-bold">GET IT ON</span>
                  <span className="text-sm block">GOOGLE PLAY</span>
                </div>
              </BrutalistButton>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brutalist-black text-brutalist-white px-6 py-12 font-mono text-xs uppercase">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b-2 border-zinc-800 pb-8 mb-8">
          
          {/* Logo info */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <Ghost size={24} className="text-brutalist-white" strokeWidth={2.5} />
              <span className="font-mono font-black text-xl uppercase tracking-tighter text-brutalist-white">Jinx</span>
              <span className="bg-brutalist-white text-brutalist-black px-2 py-0.5 font-mono font-black text-base uppercase rotate-[-3deg]">
                Notes
              </span>
            </div>
            <p className="text-[10px] font-bold text-zinc-500 text-center md:text-left mt-1">
              © 2026 JinxNotes. A PROJECT BY ERASLAN MEDYA.<br />
              ALL RIGHTS RESERVED FOR CLUMSY HUMANS.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-black">
            <a href="/privacy" className="hover:text-brutalist-teal transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-brutalist-yellow transition-colors">Terms of Use</a>
            <a href="/support" className="hover:text-brutalist-red transition-colors">Support & Help</a>
            <a href="/delete-account" className="hover:text-brutalist-purple transition-colors">Delete Account</a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-600 text-[10px]">
          <div>
            MADE WITH 🖤 AND BAD LUCK BY ERASLAN MEDYA
          </div>
          <div>
            IPHONE, APP STORE, AND GOOGLE PLAY ARE REGISTERED TRADEMARKS OF THEIR RESPECTIVE OWNERS.
          </div>
        </div>
      </footer>

    </div>
  );
}
