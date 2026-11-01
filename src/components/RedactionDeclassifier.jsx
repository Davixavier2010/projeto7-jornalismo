import React, { useState } from 'react';
import { CLASSIFIED_DOCUMENT } from '../data/journalismData';
import { FileText, Eye, EyeOff, ShieldCheck, Download, AlertOctagon, RefreshCw } from 'lucide-react';

export const RedactionDeclassifier = () => {
  const [revealedIndices, setRevealedIndices] = useState({});
  const allRevealed = CLASSIFIED_DOCUMENT.content.every((_, idx) => revealedIndices[idx]);

  const toggleRedaction = (index) => {
    setRevealedIndices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const revealAll = () => {
    const all = {};
    CLASSIFIED_DOCUMENT.content.forEach((_, idx) => {
      all[idx] = true;
    });
    setRevealedIndices(all);
  };

  const hideAll = () => {
    setRevealedIndices({});
  };

  return (
    <section id="documentos" className="py-20 bg-navy-950 border-b border-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/60 border border-blue-600/30 rounded-full text-xs font-mono text-sky-400 mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>SEÇÃO 03 // DOCUMENTO CONFIDENCIAL</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              O REVELADOR DE DOCUMENTOS SECRETOS
            </h2>
            <p className="mt-3 text-slate-400 font-sans max-w-2xl text-base sm:text-lg">
              Clique nas tarjas pretas do memorando abaixo para quebrar o sigilo e ler as cláusulas de dispensa de licitação e repasses que os órgãos públicos tentaram ocultar da sociedade.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            {allRevealed ? (
              <button
                onClick={hideAll}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-800 hover:bg-navy-750 text-slate-300 font-mono text-xs cursor-pointer border border-navy-700"
              >
                <EyeOff className="w-3.5 h-3.5" />
                <span>Restaurar Tarjas Pretas</span>
              </button>
            ) : (
              <button
                onClick={revealAll}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold cursor-pointer shadow-lg shadow-blue-600/30 border border-blue-400"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Desclassificar Tudo com LAI</span>
              </button>
            )}
          </div>
        </div>

        {/* The Classified Document Paper Card */}
        <div className="bg-navy-900 border-2 border-navy-750 rounded-2xl shadow-2xl p-6 sm:p-10 relative overflow-hidden font-mono">
          
          {/* Red Stamp Overlay */}
          <div className="absolute top-6 right-6 border-2 border-rose-500/80 text-rose-400 font-mono text-[10px] sm:text-xs font-bold px-3 py-1 rotate-12 uppercase tracking-widest pointer-events-none select-none">
            [DESCLASSIFICADO VIA LAI]
          </div>

          {/* Document Header */}
          <div className="border-b border-navy-750 pb-6 mb-6">
            <div className="text-[11px] text-slate-400 mb-1">
              REPÚBLICA FEDERATIVA // DIÁRIO DE ATOS CONFIDENCIAIS
            </div>
            <div className="text-xs sm:text-sm text-sky-400 font-bold">
              DOC_ID: {CLASSIFIED_DOCUMENT.documentId}
            </div>
            <div className="text-xs text-slate-300 mt-2">
              ÓRGÃO EMISSOR: <span className="text-white font-semibold">{CLASSIFIED_DOCUMENT.agency}</span>
            </div>
            <div className="text-xs text-slate-300">
              DATA DE EXPEDIÇÃO: <span className="text-white font-semibold">{CLASSIFIED_DOCUMENT.date}</span>
            </div>
          </div>

          {/* Subject */}
          <div className="bg-navy-950 p-4 rounded-xl border border-navy-800 mb-6 text-xs sm:text-sm">
            <span className="text-slate-400 uppercase font-bold">ASSUNTO: </span>
            <span className="text-slate-200">{CLASSIFIED_DOCUMENT.subject}</span>
          </div>

          {/* Document Interactive Body */}
          <div className="text-sm sm:text-base leading-loose text-slate-300 font-sans space-y-4">
            <p>
              {CLASSIFIED_DOCUMENT.content.map((item, index) => {
                const isRevealed = revealedIndices[index];
                return (
                  <React.Fragment key={index}>
                    <span>{item.text}</span>
                    <span
                      onClick={() => toggleRedaction(index)}
                      className={`inline-block mx-1 px-2 py-0.5 rounded transition-all cursor-pointer font-mono text-xs sm:text-sm font-semibold select-none ${
                        isRevealed
                          ? 'bg-blue-600/20 text-sky-300 border border-blue-500 underline decoration-sky-400 decoration-1 underline-offset-4'
                          : 'bg-black text-transparent hover:bg-slate-900 border border-navy-700'
                      }`}
                      title={isRevealed ? "Clique para reocultar" : "Clique para desclassificar e revelar"}
                    >
                      {isRevealed ? item.redacted : "████████████████████"}
                    </span>
                  </React.Fragment>
                );
              })}
            </p>
          </div>

          {/* Forensic Annotations Accordion */}
          <div className="mt-8 pt-6 border-t border-navy-750">
            <div className="text-xs font-mono uppercase text-sky-400 font-bold mb-3 flex items-center gap-2">
              <AlertOctagon className="w-4 h-4 text-amber-400" />
              <span>Notas de Perícia Forense da Redação:</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
              {CLASSIFIED_DOCUMENT.content.map((item, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border transition-all ${
                    revealedIndices[index]
                      ? 'bg-navy-950 border-blue-500/50 text-slate-200'
                      : 'bg-navy-950/40 border-navy-800 text-slate-500 opacity-60'
                  }`}
                >
                  <div className="font-bold text-sky-400 mb-1">
                    NOTA #{index + 1} {revealedIndices[index] ? '[ATIVADA]' : '[TARJADA]'}
                  </div>
                  <div>{item.annotation}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400 pt-4 border-t border-navy-800">
            <span>OBTIDO VIA PROCESSO SEI Nº 0049.2025-DF // CÓDIGO HASH SHA-256: e3b0c44298fc1c14...</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Integridade Criptográfica Verificada
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

