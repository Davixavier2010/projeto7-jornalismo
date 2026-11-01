import React from 'react';
import { Layers, Sparkles, CheckCircle2, Palette, Code, Eye, ExternalLink, Award } from 'lucide-react';

export const PortfolioShowcaseBanner = () => {
  return (
    <section className="py-16 bg-navy-950 border-b border-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="bg-gradient-to-br from-navy-900 via-navy-850 to-navy-900 border-2 border-blue-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 border border-blue-500/50 rounded-full text-xs font-mono text-sky-300 font-semibold mb-6">
            <Award className="w-4 h-4 text-sky-400" />
            <span>DESTAQUE DE PORTFÓLIO // CASE DE DESIGN & DESENVOLVIMENTO</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Concept Description */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                Adaptação Editorial de Alta Performance do Conceito <span className="text-sky-300">Pattern Breaking</span>
              </h2>

              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                Este projeto foi concebido sob medida para demonstrar capacidade avançada em <strong>UI/UX de impacto</strong>, <strong>data storytelling</strong> e <strong>engenharia de software moderna</strong>. Transformamos a premissa visual do premiado <em>Pattern Breaking</em> (Driftime®) em um portal vitrine de jornalismo investigativo independente.
              </p>

              {/* Requirements Checked */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs font-mono text-slate-300 bg-navy-950/80 p-3 rounded-xl border border-navy-800">
                  <Palette className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Cores Adaptadas</strong>
                    Substituição completa dos tons roxos por Azul Escuro Editorial (Deep Navy #050B14, Cobalto #2563EB e Sky Glow #38BDF8).
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs font-mono text-slate-300 bg-navy-950/80 p-3 rounded-xl border border-navy-800">
                  <Layers className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Arquitetura de Espécimes</strong>
                    Dossiês investigativos apresentados como evidências catalogadas com métricas de impacto e leitor modal.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs font-mono text-slate-300 bg-navy-950/80 p-3 rounded-xl border border-navy-800">
                  <Eye className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Slider Antes vs. Depois</strong>
                    Contraste interativo entre a propaganda/release governamental e a realidade apurada pelos repórteres.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs font-mono text-slate-300 bg-navy-950/80 p-3 rounded-xl border border-navy-800">
                  <Code className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Engenharia Reativa</strong>
                    Desenvolvido em React + Tailwind CSS + Lucide Icons com interações fluidas, áudio player e desclassificador de documentos.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Takeaway Box */}
            <div className="lg:col-span-5 bg-navy-950 p-6 rounded-2xl border border-navy-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-mono text-sky-400 font-bold mb-2">
                  ESPECIFICAÇÕES TÉCNICAS DO CASE
                </div>
                
                <ul className="space-y-2.5 text-xs font-mono text-slate-300">
                  <li className="flex items-center justify-between pb-1.5 border-b border-navy-850">
                    <span className="text-slate-400">Framework:</span>
                    <span className="text-white font-semibold">React 18 + Vite + Tailwind CSS</span>
                  </li>
                  <li className="flex items-center justify-between pb-1.5 border-b border-navy-850">
                    <span className="text-slate-400">Paleta de Cores:</span>
                    <span className="text-sky-300 font-semibold">Azul Escuro / Navy Editorial</span>
                  </li>
                  <li className="flex items-center justify-between pb-1.5 border-b border-navy-850">
                    <span className="text-slate-400">Tipografia:</span>
                    <span className="text-white font-semibold">Space Grotesk + Playfair + Mono</span>
                  </li>
                  <li className="flex items-center justify-between pb-1.5 border-b border-navy-850">
                    <span className="text-slate-400">Interatividade:</span>
                    <span className="text-emerald-400 font-semibold">Slider, Áudio, Tarjas LAI, Modal</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-slate-400">Finalidade:</span>
                    <span className="text-amber-300 font-semibold">Apresentação em Portfólio</span>
                  </li>
                </ul>
              </div>

              <div className="bg-navy-900 p-4 rounded-xl border border-blue-900/40 text-center">
                <span className="text-[11px] font-mono text-slate-400 block mb-1">
                  PRONTO PARA APRESENTAR EM SEU PORTFÓLIO
                </span>
                <span className="text-xs font-bold font-mono text-sky-300">
                  100% Responsivo • Design Premiado • Código Limpo
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

