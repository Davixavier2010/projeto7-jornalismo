import React from 'react';
import { AlertCircle, Flame, ShieldAlert, Terminal } from 'lucide-react';

export const BreakingTicker = () => {
  const alerts = [
    "URGENTE: TCU bloqueia R$ 89 milhões em contas vinculadas à investigação da Ruptura",
    "DOSSIÊ #02: ANPD abre processo sancionador contra prefeituras por coleta de biometria facial de crianças",
    "NOVO LAI: Ministério da Saúde é obrigado a liberar 4.000 e-mails sobre compras emergenciais",
    "VAZAMENTO: 3.200 manifestos de voo revelam rotas de garimpo clandestino no Rio Tapajós",
    "FORENSE DIGITAL: 40 bancos de teste comprovam taxas invisíveis de 1.840% ao ano em apps de empréstimo",
    "ATENÇÃO: Canal de denúncias PGP atualizado para chave RSA 4096-bit com proteção total de metadados"
  ];

  return (
    <div className="bg-navy-900 border-y border-blue-900/50 py-2.5 overflow-hidden select-none">
      <div className="flex items-center">
        {/* Label badge pinned on left */}
        <div className="bg-blue-600 text-white font-mono text-xs font-bold px-3 py-1 flex items-center gap-2 z-10 shrink-0 ml-4 rounded-sm shadow-md">
          <Terminal className="w-3.5 h-3.5 animate-pulse text-sky-200" />
          <span>PLANTÃO_WIRE</span>
        </div>

        {/* Marquee Content */}
        <div className="flex overflow-hidden whitespace-nowrap pl-4">
          <div className="flex animate-marquee gap-8 text-xs font-mono text-slate-300">
            {alerts.concat(alerts).map((alert, index) => (
              <span key={index} className="inline-flex items-center gap-2 hover:text-sky-300 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>{alert}</span>
                <span className="text-slate-600 font-bold">//</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

