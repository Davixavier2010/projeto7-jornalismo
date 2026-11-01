# 🌐 RUPTURA // Jornalismo Investigativo & Dossiês de Dados

> **Site Vitrine de Alta Performance para Portfólio** inspirado na estética e princípios de design premiados do [Pattern Breaking](https://patternbreak.ing/) (Driftime® - *Awwwards Honorable Mention*), com adaptação visual completa para uma sofisticada paleta **Azul Escuro / Deep Navy & Cobalto Editorial**.

---

## 📸 Conceito e Inspiração

O **Pattern Breaking** original expunha táticas obscuras (*dark patterns*) do e-commerce através de uma interface expositiva de espécimes, tipografia brutalista/editorial e elementos interativos de antes/depois.

Nesta **versão vitrine para jornalismo investigativo e de dados**, elevamos essa linguagem ao ápice da comunicação pública e rigor editorial:
- **Investigações como Espécimes Forenses**: Dossiês estruturados com código catalográfico (`DOSSIÊ_#01`), contagem de vazamentos, scores de impacto e modal com trilha financeira e linha do tempo.
- **O Divisor "Fato vs. Versão Oficial"**: Slider interativo de antes/depois que contrapõe o discurso oficial/propaganda corporativa contra as provas documentadas pelos repórteres.
- **Desclassificador Interativo de Documentos**: Um memorando confidencial onde o visitante clica nas tarjas pretas para revelar cláusulas secretas obtidas via LAI (Lei de Acesso à Informação).
- **Sala de Escuta Pericial**: Player simulado de grampos telefônicos autorizados com equalizador animado e transcrição sincronizada em tempo real.
- **Cofre Seguro de Denúncias (Whistleblower)**: Interface criptografada de envio anônimo com simulação de digest PGP e geração de hash SHA-256.

---

## 🎨 Paleta de Cores (Azul Escuro / Deep Navy)

Conforme a especificação, todos os tons roxos/violetas foram substituídos por uma paleta editorial de **Azul Escuro, Cobalto e Navy Profundo**:

| Cor | Hex | Aplicação |
|---|---|---|
| **Void Navy** | `#040812` / `#050B14` | Fundo principal da página |
| **Surface Slate Navy** | `#07101E` / `#0B172C` | Cabeçalho, barras e superfícies |
| **Card Navy** | `#0F203C` | Cards de dossiês e painéis |
| **Navy Border** | `#1B3766` | Bordas e divisores sutis |
| **Electric Cobalt** | `#2563EB` / `#3B82F6` | Botões de ação, realces e destaques |
| **Sky Glow / Telemetry** | `#38BDF8` | Monospace tags, status em tempo real e gráficos |

---

## ⚡ Tecnologias Utilizadas

- **React 18** (Vite 6)
- **Tailwind CSS 3.4** (com design system configurado em `tailwind.config.js`)
- **Lucide Icons**
- **Web Audio API** (Sintetizador procedural de áudio briefing ambiente)
- **Google Fonts** (*Space Grotesk*, *Playfair Display*, *Inter*, *JetBrains Mono*)

---

## 🚀 Como Executar Localmente

O servidor de desenvolvimento já está pronto e rodando:

```bash
# Rodar em modo de desenvolvimento
npm run dev

# Gerar build otimizada para produção (pasta /dist)
npm run build

# Visualizar a versão compilada
npm run preview
```

Acesse em seu navegador:
👉 **`http://localhost:5173/`**

---

## 📂 Estrutura do Projeto

```text
projeto7-jornalismo/
├── index.html                   # HTML base com fontes e meta tags
├── package.json                 # Dependências e scripts
├── tailwind.config.js           # Tokens da paleta Navy/Cobalto
├── src/
│   ├── main.jsx                 # Ponto de entrada
│   ├── App.jsx                  # Orquestração do site vitrine
│   ├── index.css                # Estilos globais e scanlines
│   ├── data/
│   │   └── journalismData.js    # Dados dos dossiês, cronologias e investigações
│   ├── utils/
│   │   └── audioEngine.js       # Sintetizador procedural de áudio para o briefing
│   └── components/
│       ├── Header.jsx           # Top status bar e navegação responsiva
│       ├── BreakingTicker.jsx   # Letreiro animado de notícias urgentes
│       ├── Hero.jsx             # Hero editorial com áudio briefing integrado
│       ├── SpecimenGrid.jsx     # Catálogo de dossiês em formato de espécimes
│       ├── DossierModal.jsx     # Modal aprofundado com trilha financeira e provas
│       ├── BeforeAfterSlider.jsx# Slider interativo "Fato vs. Versão Oficial"
│       ├── RedactionDeclassifier.jsx # Desclassificador com tarjas pretas interativas
│       ├── WiretapAudioPlayer.jsx # Sala de escuta com transcrição sincronizada
│       ├── MetricsImpact.jsx    # Indicadores de dados e impacto público
│       ├── Methodology.jsx      # Protocolo dos 4 pilares de rigor jornalístico
│       ├── WhistleblowerModal.jsx # Cofre seguro para informantes
│       ├── PortfolioShowcaseBanner.jsx # Seção explicativa para apresentação do portfólio
│       └── Footer.jsx           # Newsletter, PGP fingerprint e rodapé
```

---

## 💼 Como Apresentar no seu Portfólio

Ao demonstrar este case para clientes ou recrutadores, destaque:
1. **Design de Quebra de Padrão**: A habilidade de transformar referências mundiais de vanguarda (*Pattern Breaking / Driftime*) em soluções editoriais de alto valor.
2. **Harmonia Cromática**: O domínio da paleta monocromática em **Azul Escuro / Navy** com alto contraste e legibilidade impecável.
3. **Interatividade Imersiva**: Demonstre o **Slider Antes/Depois**, o clique nas **tarjas do documento secreto**, a **sala de escuta** e o botão de **Áudio Briefing** que reproduz som procedural diretamente no navegador.

