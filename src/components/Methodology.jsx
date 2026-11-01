import React from 'react';
import { METHODOLOGY_STEPS } from '../data/journalismData';
import { ShieldCheck, CheckCheck, Lock, Binary, Cpu, Scale } from 'lucide-react';

export const Methodology = () => {
  return (
    <section id="metodologia" className="py-20 bg-navy-950 border-b border-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/60 border border-blue-600/30 rounded-full text-xs font-mono text-sky-400 mb-3">
              <Scale className="w-3.5 h-3.5" />
              <span>SEÇÃO 06 // PROTOCOLO EDITORIAL</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              NOSSO PROTOCOLO DE RIGOR & ÉTICA
            </h2>
            <p className="mt-3 text-slate-400 font-sans max-w-2xl text-base sm:text-lg">
              Em um ecossistema saturado de desinformação, a verdade exige método científico, segurança operacional rígida e transparência radical de processos.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-navy-900 px-3.5 py-2 rounded-xl border border-navy-800 shrink-0">
            <CheckCheck className="w-4 h-4 text-emerald-400" />
            <span>CERTIFICAÇÃO TRUST IN JOURNALISM 2026</span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-navy-900 border border-navy-800 hover:border-blue-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group shadow-lg"
            >
              <div>
                <div className="font-mono text-3xl font-black text-blue-500/80 mb-4 group-hover:text-sky-400 transition-colors">
                  {step.step}
                </div>

                <h3 className="text-white font-display font-bold text-lg mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-light">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>PADRÃO INTERNACIONAL</span>
                <span className="text-sky-400 font-semibold">FASE {step.step}/04</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

