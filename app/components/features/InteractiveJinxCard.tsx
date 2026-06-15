"use client";

import React, { useState } from 'react';
import { Flame, Share2, MessageSquare, AlertTriangle, ShieldAlert } from 'lucide-react';
import { BrutalistCard } from '../ui/BrutalistCard';

export const InteractiveJinxCard: React.FC = () => {
  const [oofs, setOofs] = useState(42);
  const [fs, setFs] = useState(128);
  const [hasOofed, setHasOofed] = useState(false);
  const [hasF, setHasF] = useState(false);

  const handleOof = () => {
    if (hasOofed) {
      setOofs(oofs - 1);
      setHasOofed(false);
    } else {
      setOofs(oofs + 1);
      setHasOofed(true);
    }
  };

  const handleF = () => {
    if (hasF) {
      setFs(fs - 1);
      setHasF(false);
    } else {
      setFs(fs + 1);
      setHasF(true);
    }
  };

  return (
    <BrutalistCard
      variant="yellow"
      shadowSize="lg"
      className="p-4 sm:p-6 max-w-md w-full"
      rotate="rotate-0 md:rotate-1"
      hoverEffect={true}
    >
      {/* Top Header info */}
      <div className="flex justify-between items-start mb-4 border-b-2 border-brutalist-black pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brutalist-purple border-2 border-brutalist-black rounded-full flex items-center justify-center font-mono font-black text-brutalist-white shadow-brutalist-sm">
            SG
          </div>
          <div>
            <h4 className="font-mono font-black text-sm uppercase">@clumsygirl01</h4>
            <p className="text-[10px] font-bold uppercase text-zinc-600">Brooklyn, NY</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span className="bg-brutalist-red text-brutalist-black font-mono font-black text-[10px] uppercase border-2 border-brutalist-black px-2 py-0.5 shadow-brutalist-sm">
            CRITICAL
          </span>
          <span className="text-[10px] font-bold uppercase text-zinc-600 font-mono">
            5m ago
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-4">
        <h3 className="font-mono font-black text-lg uppercase mb-2">
          ☕ Coffee Maker Exploded in My Face
        </h3>
        <p className="font-sans font-bold text-sm text-brutalist-black leading-relaxed">
          Just pushed the brew button on a Monday morning and the filter chamber shot out like a rocket. Espresso all over the kitchen walls and my clean white shirt. Walked into the team planning meeting smelling like a wet coffee bean.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex justify-between items-center mt-6 pt-4 border-t-2 border-brutalist-black">
        <div className="flex gap-3">
          {/* Oof reaction */}
          <button
            onClick={handleOof}
            className={`
              flex items-center gap-2 px-3 py-1.5 border-2 border-brutalist-black font-mono font-black text-xs uppercase cursor-pointer select-none transition-all duration-100
              ${hasOofed ? 'bg-brutalist-red text-brutalist-black translate-x-[1px] translate-y-[1px] shadow-brutalist-sm' : 'bg-brutalist-white text-brutalist-black shadow-brutalist-md'}
              hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-brutalist-sm
            `}
          >
            <span>😫 OOF!</span>
            <span className="bg-brutalist-black text-brutalist-white px-1.5 py-0.5 text-[10px] font-bold">
              {oofs}
            </span>
          </button>

          {/* F reaction */}
          <button
            onClick={handleF}
            className={`
              flex items-center gap-2 px-3 py-1.5 border-2 border-brutalist-black font-mono font-black text-xs uppercase cursor-pointer select-none transition-all duration-100
              ${hasF ? 'bg-brutalist-teal text-brutalist-black translate-x-[1px] translate-y-[1px] shadow-brutalist-sm' : 'bg-brutalist-white text-brutalist-black shadow-brutalist-md'}
              hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-brutalist-sm
            `}
          >
            <span>🫡 F</span>
            <span className="bg-brutalist-black text-brutalist-white px-1.5 py-0.5 text-[10px] font-bold">
              {fs}
            </span>
          </button>
        </div>

        {/* Comment count mock & share */}
        <div className="flex items-center gap-4 text-brutalist-black">
          <div className="flex items-center gap-1 font-mono font-bold text-xs uppercase">
            <MessageSquare size={16} strokeWidth={2.5} />
            <span>12</span>
          </div>
          <button 
            onClick={() => alert("Install Jinxly mobile app to share or react to misfortunes!")}
            className="hover:scale-110 active:scale-95 transition-transform duration-100 cursor-pointer"
          >
            <Share2 size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </BrutalistCard>
  );
};
