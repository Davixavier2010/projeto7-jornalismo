import React from 'react';
import { IMPACT_METRICS } from '../data/journalismData';
import { BarChart3, TrendingUp, ShieldCheck, Database, FileSpreadsheet, ArrowUpRight } from 'lucide-react';

export const MetricsImpact = () => {
  return (
    <section id="impacto" className="py-20 bg-navy-950 border-b border-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/60 border border-blue-600/30 rounded-full text-xs font-mono text-sky-400 mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>SEÇÃO 05 // DADOS QUE TRANSFORMAM</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            MÉTRICAS & IMPACTO REAL
          </h2>
          <p className="mt-4 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
            Jornalismo que não se limita a denunciar, mas mede os resultados práticos: inquéritos judiciais instaurados, recursos públicos estornados aos cofres e sigilos ilegais derrubados.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-navy-900 to-navy-950 border border-navy-800 hover:border-blue-500/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/40 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full blur-xl group-hover:bg-blue-600/15 transition-all" />
              
              <div>
                <span className="font-mono text-xs text-sky-400 font-bold">
                  MÉTRICA 0{idx + 1}
                </span>

                <div className="text-3xl sm:text-4xl font-black font-display text-white mt-3 mb-2 tracking-tight">
                  {metric.number}
                </div>

                <div className="text-base font-semibold text-sky-200 mb-3">
                  {metric.label}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                  {metric.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>AUDITÁVEL VIA LAI</span>
                <span className="text-emerald-400 font-bold">100% VERIFICADO</span>
              </div>
            </div>
          ))}
        </div>

        {/* Open Data Repository Banner */}
        <div className="mt-12 bg-navy-900 border border-blue-600/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-500/40 flex items-center justify-center shrink-0 text-sky-300">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-display font-bold text-lg sm:text-xl">
                Acesse o Repositório de Dados Abertos da Ruptura
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
                Baixe planilhas consolidadas em formato .CSV e .JSON, códigos em Python de raspagem e metadados de contratos para auditar nossas análises.
              </p>
            </div>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold shadow-lg shadow-blue-700/30 transition-all cursor-pointer shrink-0"
          >
            <span>Explorar Repositório GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

