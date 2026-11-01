import React, { useState } from 'react';
import { DOSSIERS } from '../data/journalismData';
import { DossierModal } from './DossierModal';
import { ArrowUpRight, FileSpreadsheet, Eye, Activity, ShieldAlert, CheckCircle, Database } from 'lucide-react';

export const SpecimenGrid = ({ selectedCategory }) => {
  const [activeDossier, setActiveDossier] = useState(null);

  const filteredDossiers = selectedCategory === "TODAS AS FRENTES"
    ? DOSSIERS
    : DOSSIERS.filter(d => d.category === selectedCategory);

  return (
    <section id="dossies" className="py-20 bg-navy-950 border-b border-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/60 border border-blue-600/30 rounded-full text-xs font-mono text-sky-400 mb-3">
              <span>SEÇÃO 01 // CATÁLOGO FORENSE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              DOSSIÊS DE QUEBRA DE PADRÃO
            </h2>
            <p className="mt-3 text-slate-400 font-sans max-w-2xl text-base sm:text-lg">
              Cada investigação é tratada como um espécime documentado. Analisamos contratos, rastreamos criptoativos e cruzamos satélites para expor esquemas que operavam nas sombras.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-400 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>EXIBINDO {filteredDossiers.length} DE {DOSSIERS.length} INVESTIGAÇÕES ATIVAS</span>
          </div>
        </div>

        {/* Specimen Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDossiers.map((dossier) => (
            <div
              key={dossier.id}
              className="group bg-gradient-to-b from-navy-900 to-navy-950 border border-navy-800 hover:border-blue-500/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/50 relative overflow-hidden"
            >
              {/* Top Card Badge Bar */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 bg-blue-950 border border-blue-600/40 text-sky-400 rounded">
                      {dossier.code}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      {dossier.category}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-navy-800 text-slate-300 border border-navy-750">
                    {dossier.status}
                  </span>
                </div>

                {/* Title and Excerpt */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-sky-300 transition-colors leading-tight">
                  {dossier.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  {dossier.excerpt}
                </p>
              </div>

              {/* Bottom Card Metrics and Action */}
              <div className="mt-8 pt-6 border-t border-navy-800/80 space-y-4">
                <div className="grid grid-cols-3 gap-2 py-2 text-center bg-navy-950/60 rounded-xl border border-navy-800">
                  <div className="p-2">
                    <div className="text-[10px] font-mono uppercase text-slate-400">Impacto</div>
                    <div className="text-base font-bold font-mono text-sky-400">{dossier.impactScore}/100</div>
                  </div>
                  <div className="p-2 border-x border-navy-850">
                    <div className="text-[10px] font-mono uppercase text-slate-400">Documentos</div>
                    <div className="text-base font-bold font-mono text-slate-200">{dossier.leakCount}</div>
                  </div>
                  <div className="p-2">
                    <div className="text-[10px] font-mono uppercase text-slate-400">Leitura</div>
                    <div className="text-base font-bold font-mono text-slate-300">{dossier.readingTime}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    Repórter: <strong className="text-slate-300">{dossier.leadReporter}</strong>
                  </span>

                  <button
                    onClick={() => setActiveDossier(dossier)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-800 hover:bg-blue-600 text-slate-200 hover:text-white font-mono text-xs font-semibold border border-navy-700 hover:border-blue-500 transition-all cursor-pointer group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 shadow-md"
                  >
                    <span>Abrir Dossiê & Provas</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Dossier Modal Inspector */}
      <DossierModal
        dossier={activeDossier}
        isOpen={!!activeDossier}
        onClose={() => setActiveDossier(null)}
      />
    </section>
  );
};

