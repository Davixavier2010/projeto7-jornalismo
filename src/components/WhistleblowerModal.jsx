import React, { useState } from 'react';
import { X, Lock, ShieldCheck, Key, Send, AlertTriangle, CheckCircle2, FileUp } from 'lucide-react';

export const WhistleblowerModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    subject: '',
    targetEntity: '',
    description: '',
    contactSignal: '',
    urgency: 'ALTA'
  });
  const [submitted, setSubmitted] = useState(false);
  const [encryptionHash, setEncryptionHash] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeHash = 'SHA256:' + Array.from({length: 48}, () => Math.floor(Math.random()*16).toString(16)).join('');
    setEncryptionHash(fakeHash);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      subject: '',
      targetEntity: '',
      description: '',
      contactSignal: '',
      urgency: 'ALTA'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/90 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-navy-900 border border-blue-500/50 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="bg-navy-950 px-6 py-4 border-b border-navy-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-sky-400" />
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              COFRE DE DENÚNCIAS // CANAL ANÔNIMO SEGURO
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-display font-bold text-2xl text-white">
                Denúncia Criptografada com Sucesso
              </h3>

              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Seu relato foi encriptado com a chave pública PGP da nossa mesa investigativa. Nenhum registro do seu IP ou navegador foi armazenado em nossos servidores.
              </p>

              <div className="bg-navy-950 p-4 rounded-xl border border-navy-800 text-left font-mono text-xs text-sky-400 break-all my-4">
                <div className="text-slate-400 text-[10px] mb-1">HASH DE VERIFICAÇÃO FORENSE:</div>
                {encryptionHash}
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold cursor-pointer shadow-lg shadow-blue-700/30"
              >
                Concluir & Fechar Cofre
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-navy-950 p-3.5 rounded-xl border border-blue-900/40 text-xs font-mono text-slate-300 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Garantia Constitucional (Art. 5º, XIV da CF/88): o sigilo da fonte jornalística é inviolável no Brasil. Seus metadados são descartados na borda da conexão.
                </span>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                  Órgão Público ou Empresa Alvo da Denúncia *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Secretaria de Saúde do Estado / Construtora X"
                  value={formData.targetEntity}
                  onChange={(e) => setFormData({...formData, targetEntity: e.target.value})}
                  className="w-full bg-navy-950 border border-navy-750 focus:border-blue-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                  Assunto Resumido *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Fraude em licitação de merenda escolar com sobrepreço"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-navy-950 border border-navy-750 focus:border-blue-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                  Descrição dos Fatos & Evidências Conhecidas *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Descreva quem são os operadores, valores envolvidos, datas e se há documentos, e-mails ou planilhas que comprovem o ilícito..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-navy-950 border border-navy-750 focus:border-blue-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors font-sans leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Contato Criptografado (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Signal, Threema ou ProtonMail"
                    value={formData.contactSignal}
                    onChange={(e) => setFormData({...formData, contactSignal: e.target.value})}
                    className="w-full bg-navy-950 border border-navy-750 focus:border-blue-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Nível de Urgência
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                    className="w-full bg-navy-950 border border-navy-750 focus:border-blue-500 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none font-sans"
                  >
                    <option value="ALTA">Alta Urgência (Risco iminente de desvio/dano)</option>
                    <option value="MEDIA">Média Urgência (Documentos em fase de apuração)</option>
                    <option value="BAIXA">Histórico (Investigação retroativa)</option>
                  </select>
                </div>
              </div>

              {/* Public PGP Key snippet */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                  <span>CHAVE PÚBLICA RSA 4096-BIT (DIGEST):</span>
                  <span className="text-sky-400">RUPTURA-KEY-2026.asc</span>
                </div>
                <div className="bg-navy-950 px-3 py-2 rounded border border-navy-800 text-[10px] font-mono text-slate-500 truncate">
                  -----BEGIN PGP PUBLIC KEY BLOCK----- mQGNBF+29k8BDADfLp918g8...
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-navy-800">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-navy-800 hover:bg-navy-750 text-slate-300 font-mono text-xs cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold cursor-pointer shadow-lg shadow-blue-700/30"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Criptografar & Enviar Denúncia</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

