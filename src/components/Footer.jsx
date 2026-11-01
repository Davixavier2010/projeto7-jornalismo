import React, { useState } from 'react';
import { Mail, Shield, CheckCircle, ArrowRight, Rss, Lock, Terminal } from 'lucide-react';

export const Footer = ({ onOpenWhistleblower }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-800 font-mono text-xs">
      
      {/* Top Newsletter & Whistleblower Bar */}
      <div className="border-b border-navy-850 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase">
              <Terminal className="w-4 h-4" />
              <span>DESPACHO CONFIDENCIAL SEMANAL</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Receba nossos dossiês antes de chegarem aos tribunais
            </h3>
            <p className="text-slate-400 font-sans text-sm font-light">
              Uma edição semanal aos sábados com os bastidores das apurações, planilhas exclusivas e relatórios prévios. Sem anúncios. Sem rastreadores.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="bg-emerald-950/60 border border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 text-emerald-300">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span>Inscrição confirmada. Você receberá o próximo despacho confidencial diretamente em sua caixa postal criptografada.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail seguro..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-navy-900 border border-navy-750 focus:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none text-sm transition-colors font-sans"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-700/30 cursor-pointer shrink-0"
                >
                  <span>Assinar Despacho</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
            <div className="text-[10px] text-slate-500 mt-2 flex items-center gap-2">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>Protegido por criptografia TLS 1.3 • Seus dados nunca são comercializados.</span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Sitemap & Columns */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-700 border border-blue-500/40 flex items-center justify-center font-bold text-sky-200">
              R//
            </div>
            <span className="font-display font-black text-xl text-white tracking-tight">
              RUPTURA
            </span>
          </div>
          <p className="text-slate-400 text-xs font-sans leading-relaxed">
            Plataforma independente de jornalismo de dados e investigações em profundidade. Inspirada no design audacioso de <em>Pattern Breaking</em>, voltada à quebra de cartéis e transparência pública.
          </p>
          <div className="text-[11px] text-sky-400">
            PROJETO APRESENTADO EM PORTFÓLIO
          </div>
        </div>

        {/* Investigative Sections */}
        <div className="space-y-3">
          <h4 className="text-white font-bold tracking-wider uppercase text-xs">INVESTIGAÇÕES</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#dossies" className="hover:text-sky-300 transition-colors">Dossiê #01 // Cartéis da Saúde</a></li>
            <li><a href="#dossies" className="hover:text-sky-300 transition-colors">Dossiê #02 // Vigilância Facial</a></li>
            <li><a href="#dossies" className="hover:text-sky-300 transition-colors">Dossiê #03 // Rota do Mercúrio</a></li>
            <li><a href="#dossies" className="hover:text-sky-300 transition-colors">Dossiê #04 // Algoritmo do Crédito</a></li>
            <li><a href="#antes-depois" className="hover:text-sky-300 transition-colors">O Revelador: Fato vs. Versão</a></li>
          </ul>
        </div>

        {/* Resources & Open Data */}
        <div className="space-y-3">
          <h4 className="text-white font-bold tracking-wider uppercase text-xs">DADOS & TRANSPARÊNCIA</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#documentos" className="hover:text-sky-300 transition-colors">Desclassificador de Documentos LAI</a></li>
            <li><a href="#escuta" className="hover:text-sky-300 transition-colors">Sala de Escuta Pericial</a></li>
            <li><a href="#impacto" className="hover:text-sky-300 transition-colors">Painel de Métricas de Impacto</a></li>
            <li><a href="#metodologia" className="hover:text-sky-300 transition-colors">Código de Ética & Checagem Quádrupla</a></li>
            <li>
              <button onClick={onOpenWhistleblower} className="text-sky-400 hover:text-sky-300 transition-colors text-left cursor-pointer">
                Cofre Anônimo de Denúncias
              </button>
            </li>
          </ul>
        </div>

        {/* Security & Cryptography Metadata */}
        <div className="space-y-3">
          <h4 className="text-white font-bold tracking-wider uppercase text-xs">SEGURANÇA DA REDAÇÃO</h4>
          <div className="bg-navy-900 p-3 rounded-lg border border-navy-800 space-y-2 text-[10px]">
            <div>
              <span className="text-slate-500 block">PGP FINGERPRINT:</span>
              <span className="text-slate-300 break-all">4A9F 12B8 E704 99C3 B901 D25A 8740 3381</span>
            </div>
            <div>
              <span className="text-slate-500 block">TOR ONION MIRROR:</span>
              <span className="text-sky-400 break-all">rupturajornaldados7x5vb9...onion</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-850 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 RUPTURA // Jornalismo Investigativo & Dados Abertos. Licenciado sob Creative Commons CC BY 4.0.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Desenvolvido com inspiração em Pattern Breaking</span>
            <span>•</span>
            <span className="text-sky-400">Paleta Azul Escuro & Deep Navy</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
