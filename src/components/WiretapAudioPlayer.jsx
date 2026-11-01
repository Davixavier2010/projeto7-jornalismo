import React, { useState, useEffect } from 'react';
import { WIRETAP_LEAK } from '../data/journalismData';
import { Play, Pause, Radio, Volume2, ShieldAlert, FastForward, Rewind, Download } from 'lucide-react';

export const WiretapAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeLine, setActiveLine] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          const next = prev + 1.2;
          // Synchronize line
          if (next < 25) setActiveLine(0);
          else if (next < 50) setActiveLine(1);
          else if (next < 75) setActiveLine(2);
          else setActiveLine(3);
          return next;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="escuta" className="py-20 bg-navy-950 border-b border-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/60 border border-blue-600/30 rounded-full text-xs font-mono text-sky-400 mb-3">
              <Radio className="w-3.5 h-3.5" />
              <span>SEÇÃO 04 // SALA DE ESCUTA PERICIAL</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              INTERCEPTAÇÃO DE ÁUDIO & TRANSCRIÇÃO
            </h2>
            <p className="mt-3 text-slate-400 font-sans max-w-2xl text-base sm:text-lg">
              Áudios periciados em investigações de cartéis de saúde. Acompanhe a reprodução simultânea da conversa interceptada com transcrição sincronizada em tempo real.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-navy-900 px-3 py-1.5 rounded-lg border border-navy-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>AUTORIZAÇÃO JUDICIAL: TRF-1 PROCESSO #2026/0488</span>
          </div>
        </div>

        {/* Wiretap Player Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Player Console & Waveform */}
          <div className="lg:col-span-5 bg-navy-900 border border-navy-750 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-navy-800 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase text-sky-400 font-bold tracking-wider">
                  {WIRETAP_LEAK.operationName}
                </span>
                <h3 className="text-white font-mono text-xs sm:text-sm font-semibold mt-0.5">
                  {WIRETAP_LEAK.target}
                </h3>
              </div>
              <span className="font-mono text-xs text-slate-400">{WIRETAP_LEAK.duration}</span>
            </div>

            {/* Simulated Cassette / Tape Reel Animation */}
            <div className="bg-navy-950 rounded-xl p-5 border border-navy-800 mb-6 flex items-center justify-around">
              <div className={`w-14 h-14 rounded-full border-4 border-dashed border-slate-600 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`}>
                <div className="w-5 h-5 rounded-full bg-blue-600 border-2 border-white" />
              </div>
              
              <div className="text-center font-mono text-xs">
                <div className="text-sky-400 font-bold">GRAVAÇÃO TÉCNICA</div>
                <div className="text-slate-400 text-[10px]">FREQ: 44.1 kHz // 16-BIT</div>
              </div>

              <div className={`w-14 h-14 rounded-full border-4 border-dashed border-slate-600 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`}>
                <div className="w-5 h-5 rounded-full bg-blue-600 border-2 border-white" />
              </div>
            </div>

            {/* Waveform Equalizer */}
            <div className="space-y-2 mb-6">
              <div className="flex items-end justify-between gap-1 h-16 bg-navy-950 p-3 rounded-lg border border-navy-800">
                {[30, 60, 45, 90, 75, 40, 85, 30, 95, 65, 80, 50, 70, 90, 40, 60, 85, 95, 45, 75, 30, 90, 60, 80, 50, 70, 40, 85].map((height, idx) => (
                  <div
                    key={idx}
                    className={`flex-1 rounded-t transition-all duration-150 ${
                      isPlaying ? 'bg-gradient-to-t from-blue-700 to-sky-400' : 'bg-navy-750'
                    }`}
                    style={{
                      height: isPlaying ? `${Math.max(15, (height * (idx % 2 === 0 ? 1.1 : 0.8)) % 100)}%` : `${height * 0.35}%`
                    }}
                  />
                ))}
              </div>

              {/* Progress Scrub Bar */}
              <div className="w-full bg-navy-800 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-500 h-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-700/40 transition-all cursor-pointer"
                title={isPlaying ? "Pausar" : "Reproduzir Áudio"}
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
              </button>
            </div>

            {/* Interlocutor Profiles */}
            <div className="mt-6 pt-4 border-t border-navy-800 space-y-2 text-xs font-mono">
              <div className="text-slate-400 font-bold mb-1">INTERLOCUTORES IDENTIFICADOS:</div>
              {WIRETAP_LEAK.participants.map((p, idx) => (
                <div key={idx} className="flex items-center justify-between text-slate-300">
                  <span className={p.color}>{p.name}</span>
                  <span className="text-slate-500">{p.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Synchronized Transcript */}
          <div className="lg:col-span-7 bg-navy-900 border border-navy-750 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-navy-800 pb-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold">
                <Volume2 className="w-4 h-4" />
                <span>TRANSCRIÇÃO DEGRAVADA EM CARTÓRIO</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                STATUS: {isPlaying ? "REPRODUZINDO EM TEMPO REAL" : "EM PAUSA"}
              </span>
            </div>

            <div className="space-y-4">
              {WIRETAP_LEAK.transcript.map((item, idx) => {
                const isCurrent = activeLine === idx && isPlaying;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveLine(idx);
                      setProgress(idx * 25 + 5);
                      setIsPlaying(true);
                    }}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-blue-950/70 border-blue-500 shadow-md shadow-blue-900/30'
                        : 'bg-navy-950/50 border-navy-800 hover:border-navy-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                      <span className={`font-bold ${item.speaker === 'Alvo A' ? 'text-amber-400' : 'text-sky-400'}`}>
                        {item.speaker}
                      </span>
                      <span className="text-slate-500">[{item.time}]</span>
                    </div>

                    <p className={`text-sm sm:text-base font-sans leading-relaxed ${
                      isCurrent ? 'text-white font-medium' : 'text-slate-300'
                    }`}>
                      "{item.text}"
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-navy-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>GRAVAÇÃO ARQUIVADA SOB LACRE JUDICIAL #778-A</span>
              <button 
                onClick={() => alert("Arquivo de áudio protegido por sigilo de fontes. Transcrição pública disponível para citação jornalística.")}
                className="text-sky-400 hover:text-sky-300 underline cursor-pointer"
              >
                Solicitar Cópia Pericial (.WAV)
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

