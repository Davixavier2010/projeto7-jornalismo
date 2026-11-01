import React, { useState } from 'react';
import { BEFORE_AFTER_CASES } from '../data/journalismData';
import { Eye, ArrowLeftRight, CheckCircle, AlertTriangle, Sparkles, ShieldX } from 'lucide-react';

export const BeforeAfterSlider = () => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);

  const currentCase = BEFORE_AFTER_CASES[selectedCaseIdx];

  const handleSliderMove = (clientX, rect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX, rect);
    }
  };

  return (
    <section id="antes-depois" className="py-20 bg-navy-950 border-b border-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/60 border border-blue-600/30 rounded-full text-xs font-mono text-sky-400 mb-3">
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>SEÇÃO 02 // O REVELADOR DE NARRATIVAS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              VERSÃO OFICIAL VS. OS FATOS REVELADOS
            </h2>
            <p className="mt-3 text-slate-400 font-sans max-w-2xl text-base sm:text-lg">
              Arraste o divisor interativo no centro para comparar a propaganda institucional e os relatórios oficiais contra as evidências e laudos obtidos pela nossa equipe.
            </p>
          </div>

          {/* Case Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedCaseIdx(idx);
                  setSliderPosition(50);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedCaseIdx === idx
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30 border border-blue-400'
                    : 'bg-navy-900 text-slate-400 hover:text-white border border-navy-800'
                }`}
              >
                CASO 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Current Case Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 bg-navy-900 border border-navy-800 px-5 py-3 rounded-xl">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-sky-400 font-bold">{currentCase.tag}</span>
            <span className="text-sm font-semibold text-white">{currentCase.title}</span>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Dica: Arraste a linha central ou clique nos botões laterais
          </span>
        </div>

        {/* The Interactive Before/After Split Card Container */}
        <div 
          className="relative w-full rounded-2xl overflow-hidden border border-navy-800 select-none bg-navy-900 shadow-2xl min-h-[440px] md:min-h-[400px] cursor-col-resize"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
        >
          {/* Layer 1: Revealed Truth (Right / Bottom layer) - Pure Deep Navy & Cobalt */}
          <div className="absolute inset-0 bg-navy-900 p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
            <div className="max-w-xl ml-auto text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 border border-blue-500/50 rounded-full text-xs font-mono text-sky-300 font-semibold mb-4">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>{currentCase.revealedVersion.badge}</span>
              </div>
              <div className="text-xs font-mono text-slate-400 mb-2">
                FONTE: {currentCase.revealedVersion.source}
              </div>
              <blockquote className="text-sm sm:text-base md:text-lg text-slate-200 font-sans leading-relaxed italic bg-navy-950/60 p-4 rounded-xl border border-blue-900/40">
                "{currentCase.revealedVersion.quote}"
              </blockquote>
            </div>

            {/* Revealed Metrics */}
            <div className="mt-6 pt-4 border-t border-navy-800 max-w-xl ml-auto">
              <div className="grid grid-cols-3 gap-3 text-right">
                {currentCase.revealedVersion.metrics.map((m, idx) => (
                  <div key={idx} className="bg-navy-950/80 p-2.5 rounded-lg border border-blue-900/30">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</div>
                    <div className="text-sm sm:text-base font-bold font-mono text-sky-400 mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Layer 2: Official Version (Left / Clipped layer) */}
          <div 
            className="absolute inset-0 bg-navy-950 p-6 sm:p-10 flex flex-col justify-between overflow-hidden border-r border-blue-500/80"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/60 border border-amber-500/40 rounded-full text-xs font-mono text-amber-300 font-semibold mb-4">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                <span>{currentCase.officialVersion.badge}</span>
              </div>
              <div className="text-xs font-mono text-slate-400 mb-2">
                DOCUMENTO: {currentCase.officialVersion.source}
              </div>
              <blockquote className="text-sm sm:text-base md:text-lg text-slate-300 font-sans leading-relaxed italic bg-navy-900/80 p-4 rounded-xl border border-navy-800">
                "{currentCase.officialVersion.quote}"
              </blockquote>
            </div>

            {/* Official Metrics */}
            <div className="mt-6 pt-4 border-t border-navy-800 max-w-xl">
              <div className="grid grid-cols-3 gap-3">
                {currentCase.officialVersion.metrics.map((m, idx) => (
                  <div key={idx} className="bg-navy-900 p-2.5 rounded-lg border border-navy-800">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</div>
                    <div className="text-sm sm:text-base font-bold font-mono text-amber-300 mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white shadow-xl">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
          </div>

        </div>

        {/* Quick Click Anchors */}
        <div className="mt-4 flex items-center justify-between text-xs font-mono text-slate-400">
          <button
            onClick={() => setSliderPosition(90)}
            className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            ← Exibir Narrativa Oficial (100%)
          </button>
          <button
            onClick={() => setSliderPosition(50)}
            className="hover:text-white transition-colors cursor-pointer"
          >
            [Centralizar Divisor (50/50)]
          </button>
          <button
            onClick={() => setSliderPosition(10)}
            className="hover:text-sky-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            Exibir Fatos Revelados (100%) →
          </button>
        </div>

      </div>
    </section>
  );
};

