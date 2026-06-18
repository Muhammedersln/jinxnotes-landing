"use client";

import React, { useState } from 'react';
import { Ghost, Download, Star, MapPin, Award, Smartphone, ArrowRight, Shield, Heart, Zap, Sparkles, MessageSquare, Menu, X, LifeBuoy } from 'lucide-react';
import { BrutalistButton } from './components/ui/BrutalistButton';
import { BrutalistCard } from './components/ui/BrutalistCard';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brutalist-bg text-brutalist-black font-sans selection:bg-brutalist-yellow selection:text-brutalist-black">
      
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 bg-brutalist-white border-b-4 border-brutalist-black px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Ghost size={28} className="text-brutalist-black" strokeWidth={2.5} />
            <span className="font-mono font-black text-2xl uppercase tracking-tighter">Jinx</span>
            <span className="bg-brutalist-black text-brutalist-white px-2 py-0.5 font-mono font-black text-lg uppercase rotate-[-3deg] shadow-brutalist-sm">
              ly
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-5 font-mono font-bold uppercase text-xs">
            <a href="#how-it-works" className="hover:underline hover:text-brutalist-teal transition-colors">How It Works</a>
            <a href="#safety" className="hover:underline hover:text-brutalist-purple transition-colors">Safety</a>
            <a href="#features" className="hover:underline hover:text-brutalist-red transition-colors">Features</a>
            <a href="#screenshots" className="hover:underline hover:text-brutalist-orange transition-colors">Screenshots</a>
            <a href="/support" className="hover:underline hover:text-brutalist-red transition-colors">Support</a>
            <a href="#download" className="hover:underline hover:text-brutalist-purple transition-colors">Download</a>
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a href="#download">
                <BrutalistButton variant="primary" size="sm">
                  DOWNLOAD <Download size={14} className="ml-1.5 inline" strokeWidth={3} />
                </BrutalistButton>
              </a>
            </div>

            {/* Mobile/Tablet Quick Download Action */}
            <div className="flex md:hidden items-center">
              {/* Tablet/Medium Screen Download button with text */}
              <span className="hidden sm:inline-block">
                <a href="#download">
                  <BrutalistButton variant="primary" size="sm">
                    DOWNLOAD <Download size={14} className="ml-1.5 inline" strokeWidth={3} />
                  </BrutalistButton>
                </a>
              </span>
              
              {/* Mobile Screen Download button (compact icon button aligned with Menu) */}
              <span className="inline-block sm:hidden">
                <a 
                  href="#download" 
                  className="inline-flex items-center justify-center p-2.5 bg-brutalist-black text-brutalist-white border-4 border-brutalist-black shadow-brutalist-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                  title="Download"
                >
                  <Download size={16} strokeWidth={3} />
                </a>
              </span>
            </div>

            {/* Mobile Hamburger toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex md:hidden items-center justify-center p-2.5 border-4 border-brutalist-black bg-brutalist-yellow text-brutalist-black shadow-brutalist-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={16} strokeWidth={3} /> : <Menu size={16} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU PANEL */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[76px] left-4 right-4 z-40 bg-brutalist-white border-4 border-brutalist-black p-6 shadow-brutalist-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 font-mono font-black text-sm uppercase">
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 border-2 border-brutalist-black bg-brutalist-bg hover:bg-brutalist-teal shadow-brutalist-sm hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              ⚙️ How It Works
            </a>
            <a 
              href="#safety" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 border-2 border-brutalist-black bg-brutalist-bg hover:bg-brutalist-teal shadow-brutalist-sm hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              🛡️ Safety
            </a>
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 border-2 border-brutalist-black bg-brutalist-bg hover:bg-brutalist-red hover:text-brutalist-white shadow-brutalist-sm hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              ⚡ Features
            </a>
            <a 
              href="#screenshots" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 border-2 border-brutalist-black bg-brutalist-bg hover:bg-brutalist-orange shadow-brutalist-sm hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              📸 Screenshots
            </a>
            <a 
              href="#download" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 border-2 border-brutalist-black bg-brutalist-bg hover:bg-brutalist-purple hover:text-brutalist-white shadow-brutalist-sm hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              📥 Download App
            </a>
            <a 
              href="/support" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 border-2 border-brutalist-black bg-brutalist-bg hover:bg-brutalist-red hover:text-brutalist-white shadow-brutalist-sm hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              🆘 Support
            </a>
          </nav>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative pt-8 pb-12 px-4 sm:pt-16 sm:pb-20 sm:px-6 overflow-hidden border-b-4 border-brutalist-black">
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
              <strong className="text-brutalist-black"> Jinxly</strong> is a Neo-Brutalist daily journal & social feed where you can document your everyday misfortunes, awkward clumsy moments, and bad luck, and laugh them off with a community that relates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <a href="#download" className="w-full sm:w-auto">
                <BrutalistButton 
                  variant="yellow" 
                  className="py-3.5 px-6 text-base sm:py-4 sm:px-8 sm:text-xl w-full sm:w-auto" 
                  rotate="rotate-0 md:rotate-[-1deg]"
                >
                  Get Jinxly
                </BrutalistButton>
              </a>
              <a href="#features" className="w-full sm:w-auto">
                <BrutalistButton 
                  variant="white" 
                  className="py-3.5 px-6 text-base sm:py-4 sm:px-8 sm:text-xl w-full sm:w-auto" 
                  rotate="rotate-0 md:rotate-[1deg]"
                >
                  See Features
                </BrutalistButton>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t-2 border-dashed border-zinc-400 w-full">
              <div className="flex items-center gap-1 font-mono font-black text-xs sm:text-sm uppercase">
                <Star size={16} className="text-brutalist-yellow fill-brutalist-yellow" strokeWidth={2.5} />
                <span>4.9/5 APP STORE RATING</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono font-black text-xs sm:text-sm uppercase">
                <Heart size={16} className="text-brutalist-red fill-brutalist-red animate-pulse" />
                <span>100K+ UNLUCKY HUMANS</span>
              </div>
            </div>
          </div>

          {/* Right Column Layout Cards (Visual representation of app using generated mockup) */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-4 lg:py-0">
            <div className="relative w-full max-w-sm">
              {/* Back Card Decoration */}
              <div className="absolute inset-0 bg-brutalist-black border-4 border-brutalist-black translate-x-[8px] translate-y-[8px] rotate-[2deg] rounded-3xl" />
              
              {/* Generated smartphone mockup container */}
              <div className="relative border-4 border-brutalist-black bg-brutalist-white rounded-3xl overflow-hidden shadow-brutalist-xl rotate-0 md:rotate-[-2deg] transition-all hover:rotate-0 duration-300">
                <img 
                  src="/mockup.png" 
                  alt="Jinxly app preview" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-12 px-4 sm:py-20 sm:px-6 bg-brutalist-white border-b-4 border-brutalist-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
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
            <BrutalistCard variant="white" shadowSize="md" className="p-5 sm:p-6 relative flex flex-col justify-between" rotate="rotate-0 md:rotate-[-1deg]">
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
            <BrutalistCard variant="white" shadowSize="md" className="p-5 sm:p-6 relative flex flex-col justify-between" rotate="rotate-0 md:rotate-[2deg]">
              <div>
                <span className="absolute -top-6 -left-3 bg-brutalist-yellow text-brutalist-black border-4 border-brutalist-black font-mono font-black text-2xl w-12 h-12 flex items-center justify-center shadow-brutalist-sm rotate-[5deg]">
                  2
                </span>
                <h3 className="font-mono font-black text-xl uppercase mt-4 mb-3">LOG IT INSTANTLY</h3>
                <p className="font-sans font-bold text-sm text-zinc-700 leading-relaxed">
                  Open Jinxly, write down the mishap, and select severity (Low to Critical). The app updates your streak and immediately increments your daily Misery Meter.
                </p>
              </div>
              <div className="mt-6 font-mono font-black text-[10px] text-brutalist-yellow uppercase flex items-center gap-1.5">
                <Smartphone size={14} /> ENTRY REGISTERED
              </div>
            </BrutalistCard>

            {/* Step 3 */}
            <BrutalistCard variant="white" shadowSize="md" className="p-5 sm:p-6 relative flex flex-col justify-between" rotate="rotate-0 md:rotate-[-2deg]">
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

      {/* SAFETY & CONTROL SECTION */}
      <section id="safety" className="py-12 px-4 sm:py-20 sm:px-6 bg-brutalist-bg border-b-4 border-brutalist-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="bg-brutalist-purple text-brutalist-white font-mono font-black text-xs uppercase px-3 py-1.5 border-4 border-brutalist-black rotate-[2deg] inline-block shadow-brutalist-sm">
                🛡️ YOUR BAD LUCK, YOUR RULES
              </span>
              <h2 className="font-mono font-black text-3xl sm:text-5xl uppercase tracking-tight mt-6 leading-tight">
                SHARE THE CHAOS WITHOUT LOSING CONTROL
              </h2>
              <p className="font-sans font-bold text-sm sm:text-base text-zinc-700 mt-5 leading-relaxed">
                Jinxly is built for funny honesty, not oversharing anxiety. Keep private entries private, post public stories when you want reactions, and stay in control of what the community sees.
              </p>
              <a href="#features" className="inline-flex mt-7">
                <BrutalistButton variant="teal" className="flex items-center gap-2">
                  Explore Controls <ArrowRight size={18} strokeWidth={3} />
                </BrutalistButton>
              </a>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <BrutalistCard variant="white" shadowSize="md" className="p-5 sm:p-6" rotate="rotate-0 md:rotate-[-1deg]">
                <div className="w-12 h-12 bg-brutalist-teal border-2 border-brutalist-black flex items-center justify-center font-mono font-black text-xl mb-4 shadow-brutalist-sm">
                  <Shield size={24} strokeWidth={3} />
                </div>
                <h3 className="font-mono font-black text-lg uppercase mb-2">PRIVATE BY DEFAULT</h3>
                <p className="font-sans font-bold text-sm text-zinc-700 leading-relaxed">
                  Save awkward moments to your own vault first. Decide later if a story deserves public sympathy or should stay locked away.
                </p>
              </BrutalistCard>

              <BrutalistCard variant="yellow" shadowSize="md" className="p-5 sm:p-6" rotate="rotate-0 md:rotate-[1deg]">
                <div className="w-12 h-12 bg-brutalist-white border-2 border-brutalist-black flex items-center justify-center font-mono font-black text-xl mb-4 shadow-brutalist-sm">
                  <MessageSquare size={24} strokeWidth={3} />
                </div>
                <h3 className="font-mono font-black text-lg uppercase mb-2">REACTIONS, NOT DRAMA</h3>
                <p className="font-sans font-bold text-sm text-brutalist-black leading-relaxed">
                  Public posts are designed around quick empathy signals like Oof! and F, keeping the feed fast, funny, and low-pressure.
                </p>
              </BrutalistCard>

              <BrutalistCard variant="teal" shadowSize="md" className="p-5 sm:p-6 sm:col-span-2" rotate="rotate-0 md:rotate-[-1deg]">
                <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                  <div className="w-12 h-12 bg-brutalist-red border-2 border-brutalist-black flex shrink-0 items-center justify-center font-mono font-black text-xl shadow-brutalist-sm">
                    <MapPin size={24} strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-mono font-black text-lg uppercase mb-2">LOCATION WITH CONTEXT</h3>
                    <p className="font-sans font-bold text-sm text-brutalist-black leading-relaxed">
                      Map of Misery makes bad luck feel communal without turning every story into a personal address. Share place context when it helps the joke, skip it when it does not.
                    </p>
                  </div>
                </div>
              </BrutalistCard>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES SHOWCASE */}
      <section id="features" className="py-12 px-4 sm:py-20 sm:px-6 bg-brutalist-white border-b-4 border-brutalist-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="bg-brutalist-red text-brutalist-white font-mono font-black text-xs uppercase px-3 py-1.5 border-4 border-brutalist-black rotate-[-1deg] inline-block shadow-brutalist-sm">
              ⚡ FEATURES
            </span>
            <h2 className="font-mono font-black text-3xl sm:text-5xl uppercase tracking-tight mt-6">
              WHAT&apos;S INSIDE JINXLY?
            </h2>
            <p className="font-sans font-bold text-sm sm:text-base text-zinc-700 mt-4 leading-relaxed">
              Your ultimate coping tool. Turn every embarrassing, clumsy moment into collective laughter.
            </p>
          </div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <BrutalistCard variant="white" shadowSize="md" hoverEffect={true} className="p-5 sm:p-6">
              <div className="w-12 h-12 bg-brutalist-teal border-2 border-brutalist-black flex items-center justify-center font-mono font-black text-xl mb-4 shadow-brutalist-sm">
                🔒
              </div>
              <h3 className="font-mono font-black text-lg uppercase mb-2">PRIVATE VAULT</h3>
              <p className="font-sans font-bold text-sm text-zinc-700 leading-relaxed">
                Lock away your worst self-sabotages and cringe moments. Completely private, encrypted, and visible only to you.
              </p>
            </BrutalistCard>

            {/* Feature 2 */}
            <BrutalistCard variant="yellow" shadowSize="md" hoverEffect={true} className="p-5 sm:p-6" rotate="rotate-0 md:rotate-1">
              <div className="w-12 h-12 bg-brutalist-white border-2 border-brutalist-black flex items-center justify-center font-mono font-black text-xl mb-4 shadow-brutalist-sm">
                🌐
              </div>
              <h3 className="font-mono font-black text-lg uppercase mb-2">PUBLIC FEED</h3>
              <p className="font-sans font-bold text-sm text-brutalist-black leading-relaxed">
                Share the disaster! Collect Oof! (empathy) and F (respects) reactions from a community of clumsy humans who totally get it.
              </p>
            </BrutalistCard>

            {/* Feature 3 */}
            <BrutalistCard variant="purple" shadowSize="md" hoverEffect={true} className="p-5 sm:p-6 text-brutalist-white" rotate="rotate-0 md:-rotate-1">
              <div className="w-12 h-12 bg-brutalist-yellow border-2 border-brutalist-black flex items-center justify-center font-mono font-black text-xl mb-4 shadow-brutalist-sm text-brutalist-black">
                🔮
              </div>
              <h3 className="font-mono font-black text-lg uppercase mb-2">JINXIE AI ORACLE</h3>
              <p className="font-sans font-bold text-sm text-zinc-200 leading-relaxed">
                Get roasted by our sarcastic AI coach. Analyze your daily entries, get funny roasts, and check your daily cosmic luck forecast.
              </p>
            </BrutalistCard>

            {/* Feature 4 */}
            <BrutalistCard variant="teal" shadowSize="md" hoverEffect={true} className="p-5 sm:p-6">
              <div className="w-12 h-12 bg-brutalist-red border-2 border-brutalist-black flex items-center justify-center font-mono font-black text-xl mb-4 shadow-brutalist-sm text-brutalist-black">
                🗺️
              </div>
              <h3 className="font-mono font-black text-lg uppercase mb-2">MAP OF MISERY</h3>
              <p className="font-sans font-bold text-sm text-brutalist-black leading-relaxed">
                Track the bad vibes geographically. See where accidents happen most in real-time on our interactive misery map.
              </p>
            </BrutalistCard>

            {/* Feature 5 */}
            <BrutalistCard variant="red" shadowSize="md" hoverEffect={true} className="p-5 sm:p-6" rotate="rotate-0 md:rotate-1">
              <div className="w-12 h-12 bg-brutalist-white border-2 border-brutalist-black flex items-center justify-center font-mono font-black text-xl mb-4 shadow-brutalist-sm text-brutalist-black">
                🏆
              </div>
              <h3 className="font-mono font-black text-lg uppercase mb-2">HALL OF SHAME</h3>
              <p className="font-sans font-bold text-sm text-brutalist-black leading-relaxed">
                Being at the top has never felt so painful. The ultimate leaderboard ranking the most unluckiest users of the week.
              </p>
            </BrutalistCard>

            {/* Feature 6 */}
            <BrutalistCard variant="white" shadowSize="md" hoverEffect={true} className="p-5 sm:p-6">
              <div className="w-12 h-12 bg-brutalist-purple border-2 border-brutalist-black flex items-center justify-center font-mono font-black text-xl mb-4 shadow-brutalist-sm text-brutalist-white">
                🎖️
              </div>
              <h3 className="font-mono font-black text-lg uppercase mb-2">ANTI-BADGES</h3>
              <p className="font-sans font-bold text-sm text-zinc-700 leading-relaxed">
                Unlock reverse accomplishments. Spill coffee to get the &apos;Caffeine Chaos&apos; badge, or trip in public to earn &apos;Gravity Tester&apos;.
              </p>
            </BrutalistCard>

          </div>
        </div>
      </section>

      {/* SCREENSHOTS / PREVIEW GALLERY SECTION */}
      <section id="screenshots" className="py-12 px-4 sm:py-20 sm:px-6 bg-brutalist-bg border-b-4 border-brutalist-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="bg-brutalist-orange text-brutalist-black font-mono font-black text-xs uppercase px-3 py-1.5 border-4 border-brutalist-black rotate-[1deg] inline-block shadow-brutalist-sm">
              📸 PREVIEW GALLERY
            </span>
            <h2 className="font-mono font-black text-3xl sm:text-5xl uppercase tracking-tight mt-6">
              SNEAK PEEK INSIDE
            </h2>
            <p className="font-sans font-bold text-sm sm:text-base text-zinc-700 mt-4 leading-relaxed">
              Explore the interface of Jinxly. Beautiful, premium, and built completely with raw Neo-Brutalist elements.
            </p>
          </div>

          {/* Grid of mockup frames. Horizontal carousel on mobile, grid on desktop */}
          <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-thin">
            
            {/* Screen 1 */}
            <div className="flex flex-col items-center gap-4 w-[280px] sm:w-[320px] md:w-auto shrink-0 snap-center">
              <BrutalistCard 
                variant="yellow" 
                shadowSize="lg" 
                className="w-full aspect-[9/16] rounded-2xl overflow-hidden relative border-4 border-brutalist-black flex flex-col justify-between p-5 rotate-0 md:rotate-[-1deg] hover:rotate-0 transition-transform duration-300"
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
            <div className="flex flex-col items-center gap-4 w-[280px] sm:w-[320px] md:w-auto shrink-0 snap-center">
              <BrutalistCard 
                variant="teal" 
                shadowSize="lg" 
                className="w-full aspect-[9/16] rounded-2xl overflow-hidden relative border-4 border-brutalist-black flex flex-col justify-between p-5 rotate-0 md:rotate-[2deg] hover:rotate-0 transition-transform duration-300"
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
            <div className="flex flex-col items-center gap-4 w-[280px] sm:w-[320px] md:w-auto shrink-0 snap-center">
              <BrutalistCard 
                variant="purple" 
                shadowSize="lg" 
                className="w-full aspect-[9/16] rounded-2xl overflow-hidden relative border-4 border-brutalist-black flex flex-col justify-between p-5 rotate-0 md:rotate-[-2deg] hover:rotate-0 transition-transform duration-300 text-brutalist-white"
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
            <div className="flex flex-col items-center gap-4 w-[280px] sm:w-[320px] md:w-auto shrink-0 snap-center">
              <BrutalistCard 
                variant="red" 
                shadowSize="lg" 
                className="w-full aspect-[9/16] rounded-2xl overflow-hidden relative border-4 border-brutalist-black flex flex-col justify-between p-5 rotate-0 md:rotate-[1deg] hover:rotate-0 transition-transform duration-300"
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
      <section id="download" className="py-12 px-4 sm:py-20 sm:px-6 bg-brutalist-yellow border-b-4 border-brutalist-black relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-brutalist-red rounded-full opacity-30 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Ghost size={64} className="mx-auto text-brutalist-black mb-6 animate-bounce" strokeWidth={2.5} />
          
          <h2 className="font-mono font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight mb-6 leading-none">
            READY TO LAUGH AT <br />
            YOUR BAD LUCK?
          </h2>
          
          <p className="font-sans font-bold text-base sm:text-xl text-brutalist-black max-w-xl mx-auto mb-10 leading-relaxed">
            Download Jinxly for iOS and Android today, start your bad luck streak, and laugh it off with the community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto">
            {/* App Store Button Mock */}
            <a href="https://apple.co/3..." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <BrutalistButton 
                variant="primary" 
                className="w-full flex items-center justify-center gap-3 py-3 px-5 sm:py-4 sm:px-8" 
                rotate="rotate-0 md:rotate-[-1deg]"
              >
                <Smartphone size={24} strokeWidth={2.5} />
                <div className="text-left font-mono font-black leading-tight">
                  <span className="text-[10px] block font-bold">DOWNLOAD ON THE</span>
                  <span className="text-sm block">APP STORE</span>
                </div>
              </BrutalistButton>
            </a>

            {/* Google Play Store Button Mock */}
            <a href="https://play.google.com/..." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <BrutalistButton 
                variant="white" 
                className="w-full flex items-center justify-center gap-3 py-3 px-5 sm:py-4 sm:px-8 border-4 border-brutalist-black" 
                rotate="rotate-0 md:rotate-[2deg]"
              >
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

      {/* SUPPORT CTA SECTION */}
      <section className="py-10 px-4 sm:py-14 sm:px-6 bg-brutalist-white border-b-4 border-brutalist-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center border-4 border-brutalist-black bg-brutalist-bg p-6 sm:p-8 shadow-brutalist-xl">
            <div className="lg:col-span-8 flex flex-col sm:flex-row gap-5 sm:items-center">
              <div className="w-16 h-16 bg-brutalist-red border-4 border-brutalist-black shadow-brutalist-sm flex shrink-0 items-center justify-center rotate-[-3deg]">
                <LifeBuoy size={32} strokeWidth={3} />
              </div>
              <div>
                <span className="font-mono font-black text-xs uppercase bg-brutalist-yellow border-2 border-brutalist-black px-2 py-1 shadow-brutalist-sm inline-block mb-3">
                  🆘 SUPPORT CENTER
                </span>
                <h2 className="font-mono font-black text-2xl sm:text-4xl uppercase tracking-tight leading-tight">
                  NEED HELP WITH YOUR BAD LUCK?
                </h2>
                <p className="font-sans font-bold text-sm sm:text-base text-zinc-700 mt-3 max-w-2xl leading-relaxed">
                  Send us a bug report, billing question, feedback, or anything that needs a human response. Messages go directly to info@jinxly.app.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
              <a href="/support" className="w-full">
                <BrutalistButton variant="primary" className="w-full flex items-center gap-2">
                  Contact Support <ArrowRight size={18} strokeWidth={3} />
                </BrutalistButton>
              </a>
              <a href="mailto:info@jinxly.app" className="w-full">
                <BrutalistButton variant="white" className="w-full flex items-center gap-2">
                  Email Us <MessageSquare size={18} strokeWidth={3} />
                </BrutalistButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brutalist-black text-brutalist-white px-4 py-8 sm:px-6 sm:py-12 font-mono text-xs uppercase">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b-2 border-zinc-800 pb-8 mb-8">
          
          {/* Logo info */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <Ghost size={24} className="text-brutalist-white" strokeWidth={2.5} />
              <span className="font-mono font-black text-xl uppercase tracking-tighter text-brutalist-white">Jinx</span>
              <span className="bg-brutalist-white text-brutalist-black px-2 py-0.5 font-mono font-black text-base uppercase rotate-[-3deg]">
                ly
              </span>
            </div>
            <p className="text-[10px] font-bold text-zinc-500 text-center md:text-left mt-1">
              © 2026 Jinxly. A PROJECT BY ERASLAN MEDYA.<br />
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

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-600 text-[10px] text-center sm:text-left">
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
