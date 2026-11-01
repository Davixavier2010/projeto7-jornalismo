export const DOSSIERS = [
  {
    id: "specimen-01",
    code: "DOSSIÊ_#01",
    category: "GASTOS PÚBLICOS & SAÚDE",
    title: "O Cartel dos Respiradores Fantasmas",
    subtitle: "Como 34 empresas de fachada capturaram R$ 412 milhões em emendas secretas sem entregar um único leito hospitalar.",
    excerpt: "Nossa equipe rastreou notas fiscais eletrônicas, registros da junta comercial e imagens de satélite em 6 estados para desmascarar o esquema de triangulação de compras hospitalares.",
    impactScore: 98,
    leakCount: "1.420 páginas",
    status: "INVESTIGAÇÃO CONCLUÍDA",
    statusType: "alert",
    verifiedBy: "Checagem Cruzada em 4 Etapas",
    leadReporter: "Mariana Alencar & Equipe de Dados",
    date: "14 Out 2026",
    readingTime: "11 min",
    coverImage: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80",
    summary: [
      "Entre janeiro de 2024 e agosto de 2026, uma rede coordenada de CNPJs recém-criados em galpões vazios no interior de Goiás venceu licitações de emergência com dispensa de concorrência.",
      "Mais de 62% dos valores foram transferidos via fintechs sem regulação antes de serem convertidos em criptoativos e remetidos a paraísos fiscais nas Ilhas Virgens Britânicas.",
      "Após a publicação preliminar desta investigação, o Ministério Público Federal e o Tribunal de Contas da União instauraram 7 inquéritos civis públicos e bloquearam R$ 89 milhões em bens."
    ],
    timeline: [
      { date: "12 Jan 2024", event: "Abertura de 8 empresas sob o mesmo endereço de conveniência em Anápolis (GO)." },
      { date: "03 Mai 2024", event: "Primeira liberação de emenda parlamentar no valor de R$ 45 milhões com dispensa de licitação." },
      { date: "18 Nov 2024", event: "Nossos repórteres visitam in loco o suposto parque fabril: encontraram apenas um terreno baldio com placas de 'vende-se'." },
      { date: "22 Set 2025", event: "Cruzamento de 14.000 transações bancárias via vazamento de dados de cartórios." },
      { date: "28 Out 2026", event: "CGU e Polícia Federal realizam mandados de busca e apreensão baseados nos relatórios públicos da Ruptura." }
    ],
    moneyTrail: {
      totalDiverted: "R$ 412.800.000",
      recoveredAmount: "R$ 89.400.000",
      shellCompanies: 34,
      publicAgenciesInvolved: 11
    },
    keyFindings: [
      "Sobrepreço médio de 380% em relação aos valores praticados pela tabela SUS.",
      "Assinaturas digitais de gestores públicos emitidas a partir do mesmo IP da consultoria privada beneficiada.",
      "Transferências fracionadas abaixo do limite de alerta do COAF (R$ 49.900) repetidas centenas de vezes."
    ]
  },
  {
    id: "specimen-02",
    code: "DOSSIÊ_#02",
    category: "VIGILÂNCIA DIGITAL & PRIVACIDADE",
    title: "O Olho no Pátio: Biometria Sem Consentimento",
    subtitle: "A implantação clandestina de reconhecimento facial em 4.200 escolas públicas com venda oculta de perfis biométricos.",
    excerpt: "Auditoria algorítmica revelou que dados de faces de mais de 800 mil crianças e adolescentes foram integrados a bancos de dados de empresas de segurança privada e seguradoras.",
    impactScore: 94,
    leakCount: "860 arquivos brutos",
    status: "AÇÃO CIVIL EM CURSO",
    statusType: "warning",
    verifiedBy: "Perícia Forense Digital",
    leadReporter: "Lucas Moretti & Lab OSINT",
    date: "28 Set 2026",
    readingTime: "14 min",
    coverImage: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
    summary: [
      "Sob o pretexto de 'controle automatizado de presença escolar e merenda', prefeituras de três estados firmaram contratos de R$ 180 milhões com empresas de vigilância israelenses e nacionais.",
      "Análise reversa dos pacotes de rede efetuada pelo nosso laboratório técnico provou que as imagens em alta resolução eram transmitidas sem criptografia para servidores em Frankfurt e Virgínia.",
      "O contrato mantinha cláusulas abusivas de cessão de direitos de propriedade intelectual sobre o modelo treinado com os rostos de menores de idade em situação de vulnerabilidade."
    ],
    timeline: [
      { date: "Março 2024", event: "Início dos pilotos em escolas de regiões periféricas sem consulta aos conselhos tutelares." },
      { date: "Outubro 2024", event: "Vazamento de credenciais administrativas em fóruns da dark web." },
      { date: "Abril 2025", event: "Ruptura intercepta logs de tráfego demonstrando extração biométrica diária de 3.2 Terabytes." },
      { date: "Agosto 2026", event: "ANPD (Autoridade Nacional de Proteção de Dados) notifica 18 municípios após nossa publicação." }
    ],
    moneyTrail: {
      totalDiverted: "R$ 180.500.000",
      recoveredAmount: "Processo em Julgamento",
      shellCompanies: 6,
      publicAgenciesInvolved: 18
    },
    keyFindings: [
      "Taxa de falso positivo 14x maior em crianças negras e pardas, gerando 112 falsos alarmes policiais nas portas das escolas.",
      "Cláusula oculta autorizava o uso do banco de dados para treinamento de inteligência artificial comercial.",
      "Falta de qualquer termo assinado de consentimento livre e esclarecido pelos pais ou responsáveis."
    ]
  },
  {
    id: "specimen-03",
    code: "DOSSIÊ_#03",
    category: "CRIMES AMBIENTAIS & OURO",
    title: "Ouro Fantasma: A Rota Invisível do Mercúrio",
    subtitle: "Como refinarias autorizadas pelo Banco Central lavaram 28 toneladas de ouro ilegal extraído de terras indígenas Yanomami e Munduruku.",
    excerpt: "Cruzamos imagens multiespectrais dos satélites Sentinel-2 com notas fiscais de DTVMs e manifestos de voos de táxi aéreo para mapear pistas clandestinas ativas.",
    impactScore: 99,
    leakCount: "3.200 manifestos de voo",
    status: "IMPACTO INTERNACIONAL",
    statusType: "alert",
    verifiedBy: "Georreferenciamento & OSINT",
    leadReporter: "Camila Guajajara & Tiago Rezende",
    date: "10 Ago 2026",
    readingTime: "18 min",
    coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    summary: [
      "A fraude baseia-se na declaração de 'boa-fé' em títulos de lavra garimpeira fictícios no Pará e Mato Grosso, legalizando ouro retirado com mercúrio dentro de reservas federais.",
      "Identificamos que 84% do ouro exportado para joalherias de luxo na Suíça e Emirados Árabes Unidos tinha origem incompatível com a capacidade geológica declarada.",
      "Após o relatório, duas grandes refinadoras globais cancelaram contratos com distribuidores brasileiros e a União Europeia convocou audiência de emergência."
    ],
    timeline: [
      { date: "Fevereiro 2024", event: "Mapeamento algorítmico de 78 pistas de pouso clandestinas na bacia do Rio Tapajós." },
      { date: "Julho 2024", event: "Coleta de amostras de água revelando concentração de mercúrio 42 vezes acima do limite tolerável pela OMS." },
      { date: "Dezembro 2025", event: "Apreensão de 4 aeronaves no interior de São Paulo com documentos fiscais forjados." },
      { date: "Outubro 2026", event: "STF determina suspensão imediata da presunção de boa-fé em negociações de ouro." }
    ],
    moneyTrail: {
      totalDiverted: "R$ 6.400.000.000",
      recoveredAmount: "R$ 420.000.000 em ouro apreendido",
      shellCompanies: 52,
      publicAgenciesInvolved: 9
    },
    keyFindings: [
      "Mais de 62 pistas ilegais operando diariamente sob radar civil e militar.",
      "Uso de empresas de transporte de valores com blindagem patrimonial internacional.",
      "Contaminação crônica por mercúrio documentada em mais de 1.800 ribeirinhos."
    ]
  },
  {
    id: "specimen-04",
    code: "DOSSIÊ_#04",
    category: "SISTEMA FINANCEIRO & CRÉDITO",
    title: "O Algoritmo do Endividamento Suicida",
    subtitle: "A engenharia matemática de bancos digitais que induz idosos analfabetos ao crédito rotativo automático com CET de 1.840% ao ano.",
    excerpt: "Testes laboratoriais com 40 smartphones clonados documentaram a interface de 'dark patterns' que oculta taxas, simula descontos inexistentes e bloqueia o cancelamento contratual.",
    impactScore: 92,
    leakCount: "540 registros de código-fonte",
    status: "INVESTIGAÇÃO PUBLICADA",
    statusType: "success",
    verifiedBy: "Engenharia Reversa de UI/UX",
    leadReporter: "Sofia Albuquerque",
    date: "19 Jul 2026",
    readingTime: "9 min",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    summary: [
      "Aplicativos de cinco instituições financeiras desenharam telas com botões de recusa com contraste intencionalmente invisível (texto cinza #555 sobre fundo cinza #666).",
      "O aceite do empréstimo de margem consignada era disparado por um simples toque acidental na tela de carregamento de saldo do benefício do INSS.",
      "Mais de 2.1 milhões de aposentados tiveram até 45% de seus proventos retidos sem jamais terem solicitado a linha de crédito."
    ],
    timeline: [
      { date: "Janeiro 2025", event: "Procon registra recorde histórico de 64.000 reclamações contra as mesmas 4 fintechs." },
      { date: "Junho 2025", event: "Nossos repórteres obtêm o manual interno de 'Design Comportamental e Conversão' vazado de uma agência de São Paulo." },
      { date: "Janeiro 2026", event: "Apresentação do caso perante a Comissão de Defesa do Consumidor na Câmara dos Deputados." }
    ],
    moneyTrail: {
      totalDiverted: "R$ 1.250.000.000",
      recoveredAmount: "R$ 310.000.000 em estornos determinados",
      shellCompanies: 14,
      publicAgenciesInvolved: 4
    },
    keyFindings: [
      "Taxa anual de juros efetiva ocultada em camadas de 7 cliques no rodapé dos termos de uso.",
      "Dark pattern de 'fadiga de decisão' desenhado especificamente para perfis de baixa alfabetização digital.",
      "Comissões de até 18% para agentes de crédito que não alertassem o cliente sobre os descontos automáticos."
    ]
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: "case-01",
    tag: "CASO #01 // MINERAÇÃO & 'SUSTENTABILIDADE'",
    title: "Mineração Vale Verde: O Relatório ESG vs. O Chumbo no Rio",
    officialVersion: {
      source: "Relatório de Sustentabilidade Oficial 2025 (Página 12)",
      badge: "NARRATIVA CORPORATIVA",
      quote: "Nossas operações em Cristalina atingiram 100% de neutralidade hídrica. Todas as barragens de rejeito contam com monitoramento por satélite de última geração e zero incidentes ambientais relatados pelo terceiro ano consecutivo. Investimos R$ 40 milhões em reflorestamento nativo.",
      metrics: [
        { label: "Índice de Conformidade Declarado", value: "99.8%" },
        { label: "Acidentes Notificados à ANM", value: "0" },
        { label: "Investimento em Imagem/ESG", value: "R$ 42M" }
      ],
      backgroundStyle: "border-emerald-600/30 bg-emerald-950/20"
    },
    revealedVersion: {
      source: "Dossiê Investigativo Ruptura + Laudos Químicos da UnB",
      badge: "FATOS DOCUMENTADOS PELA REPORTAGEM",
      quote: "Amostras recolhidas por nossa equipe comprovaram 32 transbordamentos clandestinos de arsênio e chumbo no Rio dos Bagres durante a calada da noite em dias de chuva torrencial. Os sensores de monitoramento haviam sido desligados manualmente 18 vezes.",
      metrics: [
        { label: "Concentração de Chumbo na Água", value: "64x Acima da OMS" },
        { label: "Autos de Infração Ignorados", value: "47 multas não pagas" },
        { label: "Doações a Campanhas Locais", value: "R$ 8.4 Milhões" }
      ],
      backgroundStyle: "border-blue-500/40 bg-navy-900"
    }
  },
  {
    id: "case-02",
    tag: "CASO #02 // INFRAESTRUTURA & OBRAS PÚBLICAS",
    title: "Hospital Regional Norte: A Inauguração Fake com Fita Cortada",
    officialVersion: {
      source: "Pronunciamento Oficial do Governo Estadual",
      badge: "DISCURSO POLÍTICO OFICIAL",
      quote: "Entregamos hoje o maior complexo de saúde da região norte: 250 leitos de UTI, tomografia computadorizada de última geração e capacidade para atender 1.200 famílias por dia. Uma vitória histórica contra as filas da saúde.",
      metrics: [
        { label: "Leitos Declarados", value: "250 Ativos" },
        { label: "Status da Obra", value: "100% Concluída" },
        { label: "Custo Anunciado", value: "R$ 84 Milhões" }
      ],
      backgroundStyle: "border-amber-500/30 bg-amber-950/20"
    },
    revealedVersion: {
      source: "Vistoria Noturna Ruptura + Notas de Empenho Secretas",
      badge: "A REALIDADE DOCUMENTADA",
      quote: "Após a saída das câmeras de TV, 40 leitos e aparelhos alugados por 48 horas foram desmontados em caminhões sem placa. O hospital funcionava com apenas 12 leitos sem oxigênio encanado e a tubulação de esgoto desaguava a céu aberto.",
      metrics: [
        { label: "Leitos Reais em Operação", value: "Apenas 12" },
        { label: "Aluguel Cenográfico de Aparelhos", value: "R$ 1.8 Milhão" },
        { label: "Termo de Ajustamento Descumprido", value: "4 anos de atraso" }
      ],
      backgroundStyle: "border-blue-500/40 bg-navy-900"
    }
  },
  {
    id: "case-03",
    tag: "CASO #03 // SEGURANÇA PÚBLICA & DADOS",
    title: "Câmeras Corporais: A 'Falha Técnica' Seletiva",
    officialVersion: {
      source: "Boletim Trimestral da Secretaria de Segurança",
      badge: "RELATÓRIO OFICIAL",
      quote: "O programa de câmeras corporais registrou 99.4% de efetividade e transparência. Todas as intervenções foram arquivadas em conformidade estrita com os protocolos da corregedoria.",
      metrics: [
        { label: "Gravações Armazenadas", value: "480.000 Horas" },
        { label: "Transparência Reivindicada", value: "Total" },
        { label: "Taxa de Falha Declarada", value: "0.6%" }
      ],
      backgroundStyle: "border-slate-600/30 bg-slate-900/30"
    },
    revealedVersion: {
      source: "Auditoria de Logs de Metadata (62.000 Incidentes)",
      badge: "ANÁLISE DE DADOS FORENSE",
      quote: "Em 74% das ocorrências envolvendo mortes violentas por intervenção policial, as câmeras foram desligadas intencionalmente minutos antes ou apresentaram 'bateria descarregada' sem registro prévio de recarga nos docks oficiais.",
      metrics: [
        { label: "Apagões em Casos de Letalidade", value: "74.2% das Ocorrências" },
        { label: "Imagens Deletadas sem Backup", value: "1.400 horas" },
        { label: "Processos Administrativos Abertos", value: "Zero até a Denúncia" }
      ],
      backgroundStyle: "border-blue-500/40 bg-navy-900"
    }
  }
];

export const CLASSIFIED_DOCUMENT = {
  documentId: "MEMO-SEC-LAI-2026/099-B",
  classificationLevel: "ULTRASECRETO // DESCLASSIFICADO VIA LEI 12.527/11",
  subject: "Repasse Emergencial de Recursos Hídricos e Contratações de Consultoria Especial",
  agency: "Secretaria de Obras e Recursos Hídricos do Estado / Diretoria Executiva",
  date: "17 de Março de 2025",
  content: [
    {
      text: "Fica autorizado, sob a égide do Decreto Emergencial de Estiagem nº 44.102, o repasse de verba suplementar no valor de ",
      redacted: "R$ 48.750.000,00 (quarenta e oito milhões e setecentos e cinquenta mil reais)",
      annotation: "Valor 4 vezes superior ao teto licitatório estadual, desviado sem concorrência."
    },
    {
      text: " para a empresa de engenharia e consultoria ",
      redacted: "CONSTRUTORA HORIZONTE AZUL LTDA, de propriedade oculta do deputado [NOME RETIFICADO]",
      annotation: "Empresa constituída em nome da cunhada do relator do orçamento estadual."
    },
    {
      text: ". Fica expressamente dispensada a exigência de certidão negativa de débitos trabalhistas e tributários tendo em vista a alegação de urgência pública. Os comprovantes de medição de obra física ",
      redacted: "serão emitidos 'por amostragem estimada', sem necessidade de vistorias fotográficas no canteiro",
      annotation: "Cláusula sob medida que permitiu o pagamento de 100% da obra antes do assentamento de 5% dos canos."
    },
    {
      text: ". Quaisquer pedidos de acesso formulados por cidadãos ou veículos de imprensa deverão ser retidos com base no artigo 23 da Lei de Acesso até a conclusão do ",
      redacted: "período eleitoral de outubro, visando resguardar a estabilidade da coligação majoritária",
      annotation: "Violação direta do princípio de impessoalidade administrativa com finalidade eleitoral."
    }
  ]
};

export const WIRETAP_LEAK = {
  operationName: "OPERAÇÃO CONEXÃO SUBTERRÂNEA",
  target: "ÁUDIO INTERCEPTADO COM AUTORIZAÇÃO JUDICIAL // FAIXA #07",
  duration: "01:42 min",
  participants: [
    { name: "Alvo A (Operador Financeiro)", role: "Lobbyist / Articulador", color: "text-amber-400" },
    { name: "Alvo B (Secretário Adjunto)", role: "Agente Público / Ordenador de Despesas", color: "text-sky-400" }
  ],
  transcript: [
    {
      speaker: "Alvo A",
      time: "00:08",
      text: "O pessoal já subiu os contratos no sistema. Mas precisa que você libere a ordem de pagamento até as 17h, senão bate o fechamento bancário de sexta."
    },
    {
      speaker: "Alvo B",
      time: "00:23",
      text: "Mas o laudo do engenheiro ainda não chegou. Se o Ministério Público bater aqui na segunda-feira, quem assinou fui eu sozinho."
    },
    {
      speaker: "Alvo A",
      time: "00:41",
      text: "Fica tranquilo. O deputado já conversou com o conselheiro do Tribunal. Aquele processo vai cair na gaveta até 2028. Libera os 12 milhões que a parte da fundação já tá alocada no exterior."
    },
    {
      speaker: "Alvo B",
      time: "01:05",
      text: "Tá bom. Tô assinando com o token agora. Manda o comprovante da offshore pelo Signal depois."
    }
  ]
};

export const IMPACT_METRICS = [
  {
    number: "R$ 14.8 Bi",
    label: "Recursos Públicos Auditados",
    description: "Análise algorítmica de 1.8 milhão de notas fiscais e contratos oficiais."
  },
  {
    number: "1.420+",
    label: "Pedidos de LAI Protocolados",
    description: "Recursos vencidos em instâncias superiores para derrubar sigilos indevidos."
  },
  {
    number: "89",
    label: "Inquéritos Abertos",
    description: "Investigações formais do MPF, Polícia Federal e CPIs provocadas pelas nossas reportagens."
  },
  {
    number: "100%",
    label: "Fontes Protegidas & Código Aberto",
    description: "Todos os scripts de raspagem e bancos de dados anonimizados disponíveis no GitHub."
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "OSINT & Raspagem de Dados Abertos",
    description: "Monitoramos diariamente diários oficiais da União, estados e 5.570 municípios, cruzando contratos com o Cadastro Nacional de Empresas Inidôneas (CEIS) e bases da Receita Federal."
  },
  {
    step: "02",
    title: "Checagem Cruzada Quádrupla",
    description: "Nenhum documento ou denúncia é publicado sem validação cruzada por pelo menos 4 fontes documentais ou periciais independentes (análise forense, georreferenciamento, perícia grafotécnica e testemunhos sob termo)."
  },
  {
    step: "03",
    title: "Criptografia Ponta a Ponta & Anonimato",
    description: "Todas as comunicações com informantes e denunciantes são conduzidas através de canais criptografados com PGP 4096-bit, servidores em jurisdições de alta proteção jornalística e zero retenção de metadados de IP."
  },
  {
    step: "04",
    title: "Reprodutibilidade & Dados Abertos",
    description: "Para cada reportagem de dados, publicamos o notebook em Python/R e a base de dados tratada para que qualquer cidadão, universidade ou veículo concorrente possa auditar e reproduzir nossos cálculos."
  }
];

