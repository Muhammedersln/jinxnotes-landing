"use client";

import React, { useState } from 'react';
import { Ghost, Lock, ShieldAlert } from 'lucide-react';
import { BrutalistCard } from '../ui/BrutalistCard';

interface SeverityState {
  statusText: string;
  bgColorClass: string;
  percent: number;
  quote: string;
  streak: number;
}

export const InteractiveMiseryMeter: React.FC = () => {
  const states: Record<string, SeverityState> = {
    clean: {
      statusText: "TOO LUCKY... SUS",
      bgColorClass: "bg-brutalist-teal",
      percent: 0,
      quote: "No jinxes logged today. System detects suspicious levels of joy.",
      streak: 3,
    },
    low: {
      statusText: "MILD BAD LUCK",
      bgColorClass: "bg-brutalist-yellow",
      percent: 33,
      quote: "A minor mishap. Normal operations of the universe.",
      streak: 4,
    },
    high: {
      statusText: "HIGH RISK ZONE",
      bgColorClass: "bg-brutalist-orange",
      percent: 66,
      quote: "Things are going downhill. Move with extreme caution.",
      streak: 4,
    },
    critical: {
      statusText: "UNLUCKY AF!",
      bgColorClass: "bg-brutalist-red",
      percent: 100,
      quote: "Absolute trainwreck. Drop everything and go back to sleep.",
      streak: 5,
    }
  };

  const [currentLevel, setCurrentLevel] = useState<keyof typeof states>('high');
  const active = states[currentLevel];

  return (
    <div className="max-w-md w-full flex flex-col gap-4">
      {/* Simulation Selector Buttons */}
      <div className="grid grid-cols-4 gap-2">
        {(Object.keys(states) as Array<keyof typeof states>).map((level) => (
          <button
            key={level}
            onClick={() => setCurrentLevel(level)}
            className={`
              py-2 px-1 border-2 border-brutalist-black font-mono font-black text-[9px] sm:text-[10px] uppercase tracking-tighter cursor-pointer transition-all duration-700
              ${currentLevel === level ? 'bg-brutalist-black text-brutalist-white translate-x-[1px] translate-y-[1px] shadow-none' : 'bg-brutalist-white text-brutalist-black shadow-brutalist-sm'}
              hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none
            `}
          >
            {level === 'clean' ? '😇 CLEAN' : level === 'low' ? '🤕 MILD' : level === 'high' ? '🚨 HIGH' : '💀 CRITICAL'}
          </button>
        ))}
      </div>

      {/* The Misery Meter Widget */}
      <BrutalistCard
        variant="white"
        shadowSize="lg"
        className={`p-4 sm:p-6 transition-all duration-300 ${active.bgColorClass}`}
        rotate="rotate-0 md:rotate-1"
      >
        <div className="flex justify-between items-start">
          <div className="flex-1 mr-4">
            <span className="text-brutalist-black font-mono font-black text-[9px] uppercase tracking-widest bg-brutalist-white px-2 py-1 border-2 border-brutalist-black shadow-brutalist-sm">
              DAILY STATUS (LIVE)
            </span>
            <h3 className="text-brutalist-black text-3xl font-black mt-3 uppercase tracking-tighter font-mono transition-transform duration-300">
              {active.statusText}
            </h3>

            {/* Streak Counter */}
            <div className="flex items-center gap-1.5 mt-3 bg-brutalist-black px-3 py-1.5 self-start w-fit shadow-brutalist-sm">
              <span className="text-brutalist-red font-mono font-black text-xs uppercase animate-pulse">
                🔥 {active.streak} DAY BAD LUCK STREAK
              </span>
            </div>
            <p className="text-brutalist-black text-[10px] font-black uppercase mt-3 italic leading-tight max-w-[240px]">
              &ldquo;{active.quote}&rdquo;
            </p>
          </div>

          {/* Ghost Indicator */}
          <div className="bg-brutalist-white p-4 border-4 border-brutalist-black shadow-brutalist-sm rotate-[12deg] flex items-center justify-center">
            <Ghost size={32} className="text-brutalist-black" strokeWidth={2.5} />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="h-5 w-full bg-brutalist-white border-4 border-brutalist-black overflow-hidden relative">
            <div
              style={{ width: `${active.percent}%` }}
              className="h-full bg-brutalist-black transition-all duration-500 ease-out border-r-4 border-brutalist-black"
            />
          </div>
          <div className="flex justify-between mt-2 font-mono font-black text-[10px] uppercase text-brutalist-black">
            <span>MISERY METER</span>
            <span>{active.percent}% FILLED</span>
          </div>
        </div>
      </BrutalistCard>
    </div>
  );
};
