import React from 'react';
import { ArrowDown, Play, Pause, ShieldCheck, Database, FileSpreadsheet, Lock, Radio, Sparkles } from 'lucide-react';

export const Hero = ({ isAudioPlaying, onToggleAudio, selectedCategory, onSelectCategory }) => {
  const categories = [
    "TODAS AS FRENTES",
    "GASTOS PÚBLICOS & SAÚDE",
    "VIGILÂNCIA DIGITAL & PRIVACIDADE",
    "CRIMES AMBIENTAIS & OURO",
    "SISTEMA FINANCEIRO & CRÉDITO"
  ];

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-navy-950 bg-grid-pattern">
      {/* Deep Navy Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-radial-navy pointer-events-none opacity-80" />
      
      {/* Subtle Scanlines effect */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Editorial Eyebrow Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-900 border border-blue-600/30 rounded-full text-xs font-mono text-sky-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            <span className="font-semibold tracking-wider">LABORATÓRIO DE INVESTIGAÇÃO & OSINT</span>
          </div>

          <span className="text-xs font-mono text-slate-400">
            [MODELO EDITORIAL INSPIRADO EM PATTERN BREAKING]
          </span>
        </div>

        {/* Hero Dramatic Typography */}
        <div className="max-w-5xl">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white">
            QUANDO O PODER CRIA{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200 underline decoration-blue-500/60 decoration-wavy decoration-2">
              PADRÕES SILENCIOSOS
            </span>
            , NOSSO TRABALHO É{' '}
            <span className="bg-blue-950/80 text-sky-300 px-3 py-0.5 rounded border border-blue-500/50 inline-block font-mono tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              [QUEBRÁ-LOS]
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-slate-300 font-sans font-light leading-relaxed max-w-3xl">
            A Ruptura é uma publicação vitrine de jornalismo investigativo e de dados de alta profundidade. Desmontamos a arquitetura de fraudes em emendas secretas, vigilância algorítmica corporativa e crimes ambientais através de registros abertos, código auditável e coragem editorial.
          </p>
        </div>

        {/* Interactive Audio Briefing Widget & Specimen Box */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Audio Briefing Box */}
          <div className="lg:col-span-7 bg-gradient-to-br from-navy-900 via-navy-850 to-navy-900 border border-blue-600/30 rounded-xl p-5 sm:p-6 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-950 border border-blue-600/40 flex items-center justify-center text-blue-400">
                  <Radio className="w-5 h-5 text-sky-400 animate-pulse" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-sky-400 font-semibold tracking-wider">
                    BRIEFING CONFIDENCIAL DO EDITOR // EPISÓDIO #42
                  </div>
                  <h3 className="text-white font-medium text-sm sm:text-base">
                    Como interceptamos os repasses da Operação Asfixia
                  </h3>
                </div>
              </div>

              {/* Play/Pause Button */}
              <button
                onClick={onToggleAudio}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold shadow-md shadow-blue-700/30 transition-all cursor-pointer self-start sm:self-auto"
              >
                {isAudioPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-white" />
                    <span>PAUSAR (01:42)</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>OUVIR BRIEFING</span>
                  </>
                )}
              </button>
            </div>

            {/* Audio Waveform Visualizer */}
            <div className="bg-navy-950/80 rounded-lg p-3 border border-navy-800 flex items-center gap-3">
              <div className="flex items-center gap-1.5 h-8 flex-1">
                {[40, 75, 25, 90, 60, 30, 85, 45, 95, 65, 35, 80, 50, 90, 70, 30, 85, 60, 40, 95, 75, 55, 30, 85, 65, 40, 90, 60].map((height, idx) => (
                  <span
                    key={idx}
                    className={`flex-1 rounded-full transition-all duration-300 ${
                      isAudioPlaying
                        ? 'bg-gradient-to-t from-blue-600 to-sky-400 animate-pulse'
                        : 'bg-navy-750'
                    }`}
                    style={{
                      height: isAudioPlaying ? `${Math.max(15, (height * (idx % 2 === 0 ? 0.9 : 1.2)) % 100)}%` : `${height * 0.4}%`,
                      animationDelay: `${idx * 0.05}s`
                    }}
                  />
                ))}
              </div>
              <span className="font-mono text-xs text-sky-400 font-semibold min-w-[50px] text-right">
                {isAudioPlaying ? "01:14" : "02:45"}
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>VOZ DO EDITOR-CHEFE: MARIANA ALENCAR</span>
              <span>CERTIFICADO PGP 4096-BIT</span>
            </div>
          </div>

          {/* Pattern Breaking Specimen Quick-Stats */}
          <div className="lg:col-span-5 bg-navy-900 border border-navy-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-navy-800">
                <span>METADADOS DO LAB</span>
                <span className="text-sky-400 font-semibold">[SISTEMA OPERACIONAL]</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-navy-950 p-3 rounded-lg border border-navy-800">
                  <div className="text-[10px] font-mono uppercase text-slate-400">Dados Raspados</div>
                  <div className="text-xl font-bold font-mono text-white mt-1">1.8 Milhão</div>
                  <div className="text-[10px] text-sky-400 mt-0.5">Notas fiscais analisadas</div>
                </div>

                <div className="bg-navy-950 p-3 rounded-lg border border-navy-800">
                  <div className="text-[10px] font-mono uppercase text-slate-400">Desvios Trancados</div>
                  <div className="text-xl font-bold font-mono text-emerald-400 mt-1">R$ 412M</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">7 Inquéritos federais</div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-navy-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Protocolo de Fontes Anônimas</span>
              </div>
              <a
                href="#dossies"
                className="text-xs font-mono text-sky-400 hover:text-sky-300 underline underline-offset-4 flex items-center gap-1"
              >
                Ver Dossiês <ArrowDown className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="mt-12 pt-6 border-t border-navy-900">
          <div className="text-xs font-mono uppercase text-slate-400 mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Filtrar Investigações por Área Temática:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30 border border-blue-400'
                      : 'bg-navy-900 hover:bg-navy-850 text-slate-300 border border-navy-800 hover:border-navy-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

