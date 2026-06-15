"use client";

import React, { useState } from 'react';
import { Ghost, Trash2, ArrowLeft, AlertTriangle } from 'lucide-react';
import { BrutalistButton } from '../components/ui/BrutalistButton';
import { BrutalistCard } from '../components/ui/BrutalistCard';

export default function DeleteAccountPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmText.toUpperCase() !== 'DELETE') return;

    setSubmitted(true);
  };

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
      <main className="max-w-3xl mx-auto py-12 px-6">
        
        {/* Title Tag */}
        <div className="mb-10 inline-block rotate-[-2deg]">
          <span className="bg-brutalist-red text-brutalist-white font-mono font-black text-xs uppercase px-3 py-1.5 border-4 border-brutalist-black shadow-brutalist-sm">
            🚨 ACCOUNT DELETION
          </span>
          <h1 className="font-mono font-black text-4xl sm:text-5xl uppercase tracking-tight mt-3 border-b-4 border-brutalist-black pb-2">
            DELETE ACCOUNT
          </h1>
          <p className="font-mono font-bold text-xs uppercase text-zinc-500 mt-2">
            Permanently Delete Your Jinxly Account and All Data
          </p>
        </div>

        {/* Delete Form Card */}
        <BrutalistCard variant="white" shadowSize="lg" className="p-8">
          
          {submitted ? (
            <div className="bg-brutalist-teal p-6 border-4 border-brutalist-black shadow-brutalist-sm text-center space-y-4 rotate-1">
              <Trash2 size={48} className="mx-auto text-brutalist-black animate-bounce" strokeWidth={2.5} />
              <h3 className="font-mono font-black text-xl uppercase">REQUEST RECEIVED</h3>
              <p className="font-sans font-bold text-sm text-brutalist-black leading-relaxed">
                An email confirmation link has been sent to your address at <strong>{email}</strong>. For your security, please follow the verification steps in that message to confirm your deletion. Once verified, your Jinxly account and all associated logs will be permanently removed.
              </p>
              <a href="/">
                <BrutalistButton variant="white" size="sm">
                  Return to Home Page
                </BrutalistButton>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Critical Warning Box */}
              <div className="bg-brutalist-red border-4 border-brutalist-black p-5 text-brutalist-black shadow-brutalist-sm rotate-[0.5deg] space-y-2">
                <div className="flex items-center gap-2 font-mono font-black text-sm uppercase">
                  <AlertTriangle size={18} strokeWidth={2.5} />
                  <span>CRITICAL IRREVERSIBLE ACTION!</span>
                </div>
                <p className="font-sans font-bold text-xs leading-relaxed text-zinc-900">
                  Deleting your account will permanently remove all profile details, private vaults, public social feed jinxes, reactions (Oof, F), comments, bad luck streaks, karma scores, and badges from our database. This action is absolute and cannot be undone.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono font-black text-xs uppercase text-brutalist-black">Jinxly Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., john@example.com"
                    className="w-full p-3 border-4 border-brutalist-black bg-brutalist-bg font-sans font-bold text-sm text-brutalist-black focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono font-black text-xs uppercase text-brutalist-black">Username</label>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="e.g., clumsyjohn"
                    className="w-full p-3 border-4 border-brutalist-black bg-brutalist-bg font-sans font-bold text-sm text-brutalist-black focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5 bg-brutalist-bg p-4 border-2 border-brutalist-black">
                <label className="font-mono font-black text-xs uppercase text-brutalist-black block mb-1">
                  Confirmation Word
                </label>
                <p className="font-sans font-bold text-[10px] text-zinc-600 uppercase mb-2">
                  To confirm the deletion, type the word &ldquo;DELETE&rdquo; in all capital letters in the box below:
                </p>
                <input
                  type="text"
                  required
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  placeholder="DELETE"
                  className="w-full p-3 border-4 border-brutalist-black bg-brutalist-white font-mono font-black text-sm text-brutalist-black focus:outline-none"
                />
              </div>

              <BrutalistButton 
                type="submit" 
                variant="red" 
                className="w-full"
                disabled={confirmText.toUpperCase() !== 'DELETE'}
              >
                PERMANENTLY DELETE MY ACCOUNT <Trash2 size={16} className="ml-1.5 inline" strokeWidth={3} />
              </BrutalistButton>

            </form>
          )}

        </BrutalistCard>
      </main>

      {/* FOOTER */}
      <footer className="bg-brutalist-black text-brutalist-white px-6 py-8 font-mono text-[10px] uppercase text-center mt-12">
        <p>© 2026 Jinxly. A PROJECT BY ERASLAN MEDYA. ALL RIGHTS RESERVED.</p>
      </footer>

    </div>
  );
}
