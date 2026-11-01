import React, { useState } from 'react';
import { X, FileText, CheckCircle2, AlertTriangle, ShieldCheck, Download, Share2, ExternalLink, Calendar, Users, DollarSign, Database } from 'lucide-react';

export const DossierModal = ({ dossier, isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen || !dossier) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-navy-900 border border-blue-500/40 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-navy-950 px-6 py-4 border-b border-navy-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-1 bg-blue-950 border border-blue-600/50 text-sky-400 font-bold rounded">
              {dossier.code}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              {dossier.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition-colors cursor-pointer"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Title & Metadata */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>{dossier.verifiedBy}</span>
              <span>•</span>
              <Calendar className="w-3.5 h-3.5" />
              <span>Publicado em {dossier.date}</span>
              <span>•</span>
              <span>{dossier.readingTime} de leitura</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              {dossier.title}
            </h2>

            <p className="mt-3 text-lg text-sky-200/90 font-light leading-relaxed">
              {dossier.subtitle}
            </p>
          </div>

          {/* Money & Impact Trail Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-navy-950 border border-navy-800">
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400">Total Desviado</div>
              <div className="text-lg sm:text-xl font-bold font-mono text-rose-400 mt-1">
                {dossier.moneyTrail.totalDiverted}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400">Bens Bloqueados</div>
              <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400 mt-1">
                {dossier.moneyTrail.recoveredAmount}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400">Empresas de Fachada</div>
              <div className="text-lg sm:text-xl font-bold font-mono text-sky-400 mt-1">
                {dossier.moneyTrail.shellCompanies} CNPJs
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400">Órgãos Investigados</div>
              <div className="text-lg sm:text-xl font-bold font-mono text-amber-400 mt-1">
                {dossier.moneyTrail.publicAgenciesInvolved} Repartições
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-sky-400 font-semibold border-b border-navy-800 pb-2">
              Sumário Executivo dos Fatos
            </h3>
            <div className="space-y-3 text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
              {dossier.summary.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "drop-cap" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Key Forensic Findings */}
          <div className="bg-navy-950/70 border border-blue-900/40 rounded-xl p-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Principais Achados Periciais
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 font-mono">
              {dossier.keyFindings.map((finding, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-blue-400 font-bold">[{idx + 1}]</span>
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Investigation Timeline */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-sky-400 font-semibold border-b border-navy-800 pb-2 mb-4">
              Cronologia da Investigação & Perícia
            </h3>
            <div className="space-y-4 border-l-2 border-blue-600/40 ml-2 pl-4">
              {dossier.timeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-navy-900 group-hover:bg-sky-300 transition-colors" />
                  <div className="text-xs font-mono font-semibold text-sky-400">{item.date}</div>
                  <div className="text-sm text-slate-300 mt-0.5">{item.event}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Byline & Reporter Credits */}
          <div className="pt-4 border-t border-navy-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div>
              <span>REPORTAGEM E ANÁLISE DE DADOS:</span>
              <div className="text-slate-200 font-bold mt-0.5">{dossier.leadReporter}</div>
            </div>
            <div>
              <span>VOLUME DE DOCUMENTOS:</span>
              <div className="text-slate-200 font-bold mt-0.5">{dossier.leakCount}</div>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="bg-navy-950 px-6 py-4 border-t border-navy-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Dados Auditados & Open Source (CC BY 4.0)</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold shadow-lg shadow-blue-700/30 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{downloadSuccess ? "Dossiê Gerado (.PDF)!" : "Baixar Relatório Forense (.PDF)"}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-navy-800 hover:bg-navy-750 text-slate-300 font-mono text-xs cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

