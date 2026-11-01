import React, { useState } from 'react';
import { Header } from './components/Header';
import { BreakingTicker } from './components/BreakingTicker';
import { Hero } from './components/Hero';
import { SpecimenGrid } from './components/SpecimenGrid';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { RedactionDeclassifier } from './components/RedactionDeclassifier';
import { WiretapAudioPlayer } from './components/WiretapAudioPlayer';
import { MetricsImpact } from './components/MetricsImpact';
import { Methodology } from './components/Methodology';
import { PortfolioShowcaseBanner } from './components/PortfolioShowcaseBanner';
import { Footer } from './components/Footer';
import { WhistleblowerModal } from './components/WhistleblowerModal';
import { startAmbientBriefingAudio, stopAmbientBriefingAudio } from './utils/audioEngine';

export function App() {
  const [isWhistleblowerOpen, setIsWhistleblowerOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("TODAS AS FRENTES");

  const handleToggleAudio = () => {
    if (isAudioPlaying) {
      stopAmbientBriefingAudio();
      setIsAudioPlaying(false);
    } else {
      startAmbientBriefingAudio();
      setIsAudioPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Header with live operational status */}
      <Header
        onOpenWhistleblower={() => setIsWhistleblowerOpen(true)}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      {/* Real-time investigative breaking ticker */}
      <BreakingTicker />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          isAudioPlaying={isAudioPlaying}
          onToggleAudio={handleToggleAudio}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Section 01: Investigative Dossiers / Pattern Breaking Specimens */}
        <SpecimenGrid selectedCategory={selectedCategory} />

        {/* Section 02: Interactive Before vs. After Split Slider */}
        <BeforeAfterSlider />

        {/* Section 03: Interactive Document Redaction Declassifier (LAI) */}
        <RedactionDeclassifier />

        {/* Section 04: Pericial Wiretap & Audio Leak with Transcript */}
        <WiretapAudioPlayer />

        {/* Section 05: Data Journalism Metrics & Impact */}
        <MetricsImpact />

        {/* Section 06: Rigor & Ethical Methodology */}
        <Methodology />

        {/* Portfolio Showcase Concept Explanation Banner */}
        <PortfolioShowcaseBanner />
      </main>

      {/* Footer */}
      <Footer onOpenWhistleblower={() => setIsWhistleblowerOpen(true)} />

      {/* Whistleblower Channel Modal */}
      <WhistleblowerModal
        isOpen={isWhistleblowerOpen}
        onClose={() => setIsWhistleblowerOpen(false)}
      />
    </div>
  );
}

export default App;

