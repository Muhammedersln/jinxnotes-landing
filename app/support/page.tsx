"use client";

import React, { useState } from 'react';
import { Ghost, LifeBuoy, ArrowLeft, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { BrutalistButton } from '../components/ui/BrutalistButton';
import { BrutalistCard } from '../components/ui/BrutalistCard';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'support',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "🔥 My bad luck streak was broken. Can I get it back?",
      a: "Unfortunately not. If you went a full day without experiencing any mishaps (or simply forgot to log it), the universe resets your streak. Tomorrow is a brand new day for fresh accidents!"
    },
    {
      q: "🔮 The AI Oracle was rude to me. How do I complain?",
      a: "Our oracle Jinxie analyzes misfortunes without filtering. Her roasts are delivered with tough love. If your feelings were hurt, we recommend drinking a cup of chamomile tea and trying again tomorrow."
    },
    {
      q: "💳 My PRO purchase is not active. What should I do?",
      a: "Transactions are handled by Apple or Google billing services. Tap the 'Restore Purchases' button inside the Settings screen to resync your account. If problems persist, contact us with your receipt invoice number."
    },
    {
      q: "🗺️ My location is incorrect on the Misery Map?",
      a: "The misery map uses your device's GPS signal. Make sure your location services are active and you have granted GPS permissions to the JinxNotes app."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: 'support', message: '' });
    }, 100);
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
      <main className="max-w-6xl mx-auto py-12 px-6">
        
        {/* Title Tag */}
        <div className="mb-10 inline-block rotate-[-1deg]">
          <span className="bg-brutalist-red text-brutalist-white font-mono font-black text-xs uppercase px-3 py-1.5 border-4 border-brutalist-black shadow-brutalist-sm">
            🆘 SUPPORT
          </span>
          <h1 className="font-mono font-black text-4xl sm:text-5xl uppercase tracking-tight mt-3 border-b-4 border-brutalist-black pb-2">
            SUPPORT CENTER
          </h1>
          <p className="font-mono font-bold text-xs uppercase text-zinc-500 mt-2">
            Submit your questions or browse our frequently asked questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Contact Form */}
          <div className="lg:col-span-7">
            <BrutalistCard variant="white" shadowSize="lg" className="p-8">
              <h2 className="font-mono font-black text-xl uppercase mb-6 border-b-2 border-brutalist-black pb-2">
                ✍️ CONTACT FORM
              </h2>

              {submitted ? (
                <div className="bg-brutalist-teal p-6 border-4 border-brutalist-black shadow-brutalist-sm text-center space-y-4 rotate-1">
                  <CheckCircle2 size={48} className="mx-auto text-brutalist-black" strokeWidth={2.5} />
                  <h3 className="font-mono font-black text-lg uppercase">MESSAGE RECEIVED!</h3>
                  <p className="font-sans font-bold text-sm text-brutalist-black">
                    Your request has been added to our queue. We will calculate your bad luck severity and respond to you as soon as possible (usually within 24 hours). Thanks for your patience!
                  </p>
                  <BrutalistButton variant="white" size="sm" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </BrutalistButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono font-black text-xs uppercase text-brutalist-black">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g., John Doe"
                        className="w-full p-3 border-4 border-brutalist-black bg-brutalist-bg font-sans font-bold text-sm text-brutalist-black focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-mono font-black text-xs uppercase text-brutalist-black">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="e.g., john@example.com"
                        className="w-full p-3 border-4 border-brutalist-black bg-brutalist-bg font-sans font-bold text-sm text-brutalist-black focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono font-black text-xs uppercase text-brutalist-black">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full p-3 border-4 border-brutalist-black bg-brutalist-bg font-mono font-black text-xs uppercase focus:outline-none"
                    >
                      <option value="support">Technical Support / Bug Report</option>
                      <option value="monetization">Billing & Subscription Issues</option>
                      <option value="feedback">Suggestions & Feedback</option>
                      <option value="other">Other Inquiries</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono font-black text-xs uppercase text-brutalist-black">Your Message</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Describe your issue in detail here..."
                      className="w-full p-3 border-4 border-brutalist-black bg-brutalist-bg font-sans font-bold text-sm text-brutalist-black focus:outline-none"
                    />
                  </div>

                  <BrutalistButton type="submit" variant="primary" className="w-full">
                    SUBMIT <Send size={14} className="ml-1.5 inline" strokeWidth={3} />
                  </BrutalistButton>
                </form>
              )}
            </BrutalistCard>
          </div>

          {/* RIGHT: FAQs */}
          <div className="lg:col-span-5 space-y-6">
            <BrutalistCard variant="yellow" shadowSize="lg" className="p-6 rotate-1">
              <h2 className="font-mono font-black text-lg uppercase mb-4 border-b-2 border-brutalist-black pb-2">
                ❓ FREQUENTLY ASKED QUESTIONS
              </h2>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-2 border-brutalist-black bg-brutalist-white overflow-hidden shadow-brutalist-sm">
                    <button
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="w-full p-3 text-left font-mono font-black text-xs uppercase flex justify-between items-center bg-brutalist-white hover:bg-zinc-50 cursor-pointer select-none"
                    >
                      <span>{faq.q}</span>
                      <span className="font-black text-base">{activeFaq === index ? '−' : '+'}</span>
                    </button>
                    
                    {activeFaq === index && (
                      <div className="p-3 border-t-2 border-brutalist-black bg-brutalist-bg font-sans font-bold text-xs leading-relaxed text-zinc-800">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </BrutalistCard>

            <BrutalistCard variant="purple" shadowSize="md" className="p-6 text-brutalist-white -rotate-1">
              <h3 className="font-mono font-black text-base uppercase mb-2">📬 DIRECT CONTACT</h3>
              <p className="font-sans font-bold text-xs text-zinc-200 leading-relaxed mb-4">
                If you prefer not to use the form, you can contact us directly via the support email address below:
              </p>
              <div className="bg-brutalist-black text-brutalist-yellow border-2 border-brutalist-black p-3 text-center font-mono font-black text-sm select-all">
                support@eraslanmedya.com
              </div>
            </BrutalistCard>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-brutalist-black text-brutalist-white px-6 py-8 font-mono text-[10px] uppercase text-center mt-12">
        <p>© 2026 JinxNotes. A PROJECT BY ERASLAN MEDYA. ALL RIGHTS RESERVED.</p>
      </footer>

    </div>
  );
}
