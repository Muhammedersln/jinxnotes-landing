"use client";

import React, { useState } from 'react';
import { HelpCircle, Sparkles, Send } from 'lucide-react';
import { BrutalistCard } from '../ui/BrutalistCard';
import { BrutalistButton } from '../ui/BrutalistButton';

interface RoastResult {
  keywords: string[];
  roast: string;
  karma: number;
  badge: string;
}

export const InteractiveOracle: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [result, setResult] = useState<RoastResult | null>(null);

  const roasts: RoastResult[] = [
    {
      keywords: ['coffee', 'tea', 'spill', 'mug', 'cup', 'pour', 'drip'],
      roast: "That spilled coffee/tea was the universe whispering 'please wake up and smell the disaster'. The stain might wash out, but the clumsiness is forever. At least your t-shirt looks abstract now.",
      karma: -35,
      badge: "CAFFEINE CATASTROPHE"
    },
    {
      keywords: ['bus', 'subway', 'train', 'miss', 'late', 'station', 'stop'],
      roast: "That bus driver saw you running in the mirror. They just sped up to keep your misfortune streak alive. Walking is cardio, though knowing your luck, you will trip on a flat sidewalk.",
      karma: -50,
      badge: "SOLE SURVIVOR"
    },
    {
      keywords: ['phone', 'screen', 'glass', 'drop', 'crack', 'broke'],
      roast: "That cracking sound of your screen was the cry of your wallet. Look at the bright side: now you see Instagram through a beautiful, cubist artistic lens.",
      karma: -75,
      badge: "CRACKED MASTER"
    },
    {
      keywords: ['boyfriend', 'girlfriend', 'date', 'ex', 'crush', 'message', 'love', 'text'],
      roast: "Your love life is like your luck: a roller coaster that went off the rails. That accidental text or awkward moment is just the universe forcing you into self-reliance. You're welcome!",
      karma: -90,
      badge: "CHRONICALLY SINGLE"
    },
    {
      keywords: ['money', 'wallet', 'card', 'lost', 'stolen', 'broke', 'cash'],
      roast: "Your financial downfall is a protest against capitalism! Or you are just too careless to remember where you put your card. Good news: if you are broke, you can't get scammed.",
      karma: -80,
      badge: "BROKE BUT PROUD"
    },
    {
      keywords: ['exam', 'school', 'grade', 'class', 'test', 'fail', 'exam', 'teacher'],
      roast: "That test score doesn't represent your intelligence, just the high density of bad luck that morning. Sure, you didn't study, but let's blame the Mercury retrograde.",
      karma: -60,
      badge: "ACADEMIC CASUALTY"
    }
  ];

  const handleAskOracle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setLoading(true);
    setResult(null);

    const loadingPhrases = [
      'Calculating star chart clumsiness...',
      'Analyzing bone oracle...',
      'Channelling negative cosmic vibes...',
      'Heating up the sarcasm engines...'
    ];

    let count = 0;
    setLoadingText(loadingPhrases[0]);

    const interval = setInterval(() => {
      count++;
      if (count < loadingPhrases.length) {
        setLoadingText(loadingPhrases[count]);
      }
    }, 450);

    setTimeout(() => {
      clearInterval(interval);
      // Keyword matching
      const lowerInput = inputText.toLowerCase();
      let matchedRoast = roasts.find(r => 
        r.keywords.some(keyword => lowerInput.includes(keyword))
      );

      if (!matchedRoast) {
        // Default general roast
        matchedRoast = {
          keywords: [],
          roast: "The universe selected you as today's target for cosmic rays. Even if you planned to fail this perfectly, you couldn't have done it. Pure talent. Congratulations!",
          karma: -45,
          badge: "BAD LUCK CHAMPION"
        };
      }

      setResult(matchedRoast);
      setLoading(false);
    }, 1800);
  };

  return (
    <BrutalistCard variant="purple" shadowSize="lg" className="p-6 max-w-md w-full" rotate="-rotate-1">
      <div className="flex items-center gap-3 mb-4 border-b-2 border-brutalist-black pb-3">
        <div className="bg-brutalist-yellow p-1.5 border-2 border-brutalist-black shadow-brutalist-sm">
          <Sparkles size={20} className="text-brutalist-black" />
        </div>
        <h3 className="font-mono font-black text-lg uppercase tracking-wide text-brutalist-white">
          🔮 JINXIE AI ORACLE
        </h3>
      </div>

      <p className="font-sans font-bold text-xs uppercase mb-4 text-zinc-300 leading-tight">
        Write down your misfortune, and our oracle will roast you mercilessly and forecast your daily karma score!
      </p>

      <form onSubmit={handleAskOracle} className="space-y-4">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="e.g., Missed the subway, started raining, and my umbrella flipped inside out..."
          maxLength={150}
          required
          rows={3}
          className="w-full p-3 border-4 border-brutalist-black bg-brutalist-bg font-sans font-bold text-sm text-brutalist-black focus:outline-none placeholder:text-zinc-500 shadow-inner"
        />

        <BrutalistButton
          type="submit"
          variant="yellow"
          className="w-full text-sm"
          disabled={loading}
        >
          {loading ? 'ORACLE IS THINKING...' : 'GET ROASTED BY ORACLE ➔'}
        </BrutalistButton>
      </form>

      {/* Loading state animation */}
      {loading && (
        <div className="mt-6 p-4 border-4 border-brutalist-black bg-brutalist-white shadow-brutalist-sm animate-pulse">
          <p className="font-mono font-black text-xs uppercase text-brutalist-black text-center">
            {loadingText}
          </p>
        </div>
      )}

      {/* Result Display */}
      {result && !loading && (
        <div className="mt-6 p-5 border-4 border-brutalist-black bg-brutalist-white text-brutalist-black shadow-brutalist-md rotate-1">
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-zinc-300">
            <span className="font-mono font-black text-xs uppercase bg-brutalist-red text-brutalist-white px-2 py-0.5 border border-brutalist-black">
              KARMA: {result.karma}
            </span>
            <span className="font-mono font-black text-[10px] uppercase bg-brutalist-teal text-brutalist-black px-2 py-0.5 border border-brutalist-black">
              🏆 {result.badge}
            </span>
          </div>
          <p className="font-mono font-bold text-xs uppercase mb-2 text-zinc-500">
            🔮 Jinxie Oracle Says:
          </p>
          <p className="font-sans font-bold text-sm text-brutalist-black leading-relaxed italic">
            &ldquo;{result.roast}&rdquo;
          </p>
        </div>
      )}
    </BrutalistCard>
  );
};
