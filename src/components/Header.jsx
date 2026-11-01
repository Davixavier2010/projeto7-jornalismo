import React, { useState, useEffect } from 'react';
import { Shield, Lock, Radio, FileText, Menu, X, ArrowUpRight, Volume2, VolumeX, Eye } from 'lucide-react';

export const Header = ({ onOpenWhistleblower, isAudioPlaying, onToggleAudio }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' BRT');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Real-time Investigative Status Bar */}
      <div className="bg-navy-950 border-b border-navy-800 text-[11px] font-mono tracking-wider text-slate-400 py-2 px-4 select-none">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-semibold text-sky-400 bg-sky-950/60 border border-sky-800/60 px-2 py-0.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"></span>
              INVESTIGAÇÃO ATIVA
            </span>
            <span className="hidden sm:inline text-slate-400">
              DOSSIÊ #042 // CARTÉIS DA SAÚDE E EMENDAS SECRETAS
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden md:inline">
              HORÁRIO: <strong className="text-slate-200">{currentTime}</strong>
            </span>
            <span className="hidden lg:inline">
              CRIPTOGRAFIA: <strong className="text-emerald-400">PGP 4096-BIT ATIVO</strong>
            </span>
            <span className="inline-flex items-center gap-1 text-blue-400">
              <Shield className="w-3 h-3 text-blue-400" />
              100% INDEPENDENTE
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/90 backdrop-blur-md border-b border-navy-800 shadow-2xl py-3'
            : 'bg-navy-950 border-b border-navy-900 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo - Pattern Breaking Editorial Identity in Deep Navy */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 via-navy-700 to-navy-900 border border-blue-500/40 flex items-center justify-center shadow-lg shadow-blue-900/30 group-hover:border-blue-400 transition-colors">
              <span className="font-mono font-black text-sky-300 text-lg tracking-tighter">R//</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-xl sm:text-2xl tracking-tighter text-white group-hover:text-blue-300 transition-colors">
                  RUPTURA
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-blue-950/80 text-blue-400 border border-blue-800/80 rounded uppercase font-semibold">
                  Jornalismo
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
                Quebra de Padrão & Dossiês de Dados
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider uppercase text-slate-300">
            <a href="#dossies" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
              <span>01.</span> Dossiês
            </a>
            <a href="#antes-depois" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
              <span>02.</span> Fato vs Versão
            </a>
            <a href="#documentos" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
              <span>03.</span> Documentos
            </a>
            <a href="#escuta" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
              <span>04.</span> Sala de Escuta
            </a>
            <a href="#impacto" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
              <span>05.</span> Impacto
            </a>
            <a href="#metodologia" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
              <span>06.</span> Metodologia
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Audio Ambience / Briefing Toggle */}
            <button
              onClick={onToggleAudio}
              className={`p-2 rounded-lg border text-xs font-mono transition-all flex items-center gap-2 ${
                isAudioPlaying
                  ? 'bg-blue-600/20 border-blue-500 text-sky-300 shadow-md shadow-blue-500/20'
                  : 'bg-navy-900 border-navy-750 text-slate-400 hover:text-slate-200'
              }`}
              title={isAudioPlaying ? "Pausar Briefing em Áudio" : "Ouvir Briefing de Áudio"}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-sky-400 animate-pulse" />
                  <span className="hidden sm:inline">Briefing Ativo</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden sm:inline">Áudio Briefing</span>
                </>
              )}
            </button>

            {/* Whistleblower Channel Button */}
            <button
              onClick={onOpenWhistleblower}
              className="bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-mono text-xs font-semibold px-3.5 py-2 rounded-lg border border-blue-400/30 flex items-center gap-2 shadow-lg shadow-blue-700/30 hover:shadow-blue-600/40 transition-all cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-sky-200" />
              <span className="hidden sm:inline">Canal Seguro</span>
              <span className="sm:hidden">Denúncia</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-navy-900 border border-navy-800"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950/95 border-b border-navy-800 px-6 py-6 font-mono text-sm uppercase space-y-4 shadow-2xl backdrop-blur-xl animate-fadeIn">
            <div className="text-[11px] text-sky-400 font-semibold mb-2">NAVEGAÇÃO INVESTIGATIVA</div>
            <a
              href="#dossies"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-sky-300 py-1.5 border-b border-navy-850"
            >
              01. Dossiês & Espécimes
            </a>
            <a
              href="#antes-depois"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-sky-300 py-1.5 border-b border-navy-850"
            >
              02. Fato vs. Versão Oficial
            </a>
            <a
              href="#documentos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-sky-300 py-1.5 border-b border-navy-850"
            >
              03. Documentos Desclassificados
            </a>
            <a
              href="#escuta"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-sky-300 py-1.5 border-b border-navy-850"
            >
              04. Sala de Escuta & Grampos
            </a>
            <a
              href="#impacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-sky-300 py-1.5 border-b border-navy-850"
            >
              05. Métricas de Impacto
            </a>
            <a
              href="#metodologia"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-sky-300 py-1.5 border-b border-navy-850"
            >
              06. Código de Rigor & Ética
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhistleblower();
                }}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs py-3 rounded-lg border border-blue-400/30 flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4 text-sky-200" />
                Acessar Canal Seguro (Whistleblower)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

