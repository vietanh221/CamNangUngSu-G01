/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EtiquetteExplorer } from './components/EtiquetteExplorer';
import { SituationAdvisor } from './components/SituationAdvisor';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { LegalRegulations } from './components/LegalRegulations';
import { BookmarkedEtiquette } from './components/BookmarkedEtiquette';
import { EtiquetteModal } from './components/EtiquetteModal';
import { PrintHandbookModal } from './components/PrintHandbookModal';
import { Footer } from './components/Footer';

import { CATEGORIES, ETIQUETTE_ITEMS, LEGAL_REGULATIONS } from './data/etiquetteData';
import { POPULAR_SCENARIOS, QUIZ_QUESTIONS } from './data/interactiveData';
import { EtiquetteItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('explorer');
  const [selectedItem, setSelectedItem] = useState<EtiquetteItem | null>(null);
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Persistent bookmarked IDs
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('g01_saved_etiquette');
      return stored ? JSON.parse(stored) : ['tr-01', 'el-01', 'sp-01'];
    } catch {
      return ['tr-01', 'el-01', 'sp-01'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('g01_saved_etiquette', JSON.stringify(savedIds));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [savedIds]);

  const handleToggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleClearAllSaved = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ quy tắc đã lưu trong sổ tay?')) {
      setSavedIds([]);
    }
  };

  const handleSearchFocus = () => {
    setActiveTab('explorer');
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  };

  const selectedCategory = selectedItem
    ? CATEGORIES.find((c) => c.id === selectedItem.categoryId)
    : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Top Bar adhering to 3-zone contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedIds.length}
        onPrint={() => setShowPrintModal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section shown on the primary Explorer view */}
        {activeTab === 'explorer' && (
          <HeroSection
            onSearchFocus={handleSearchFocus}
            onExploreClick={() => {
              const el = document.getElementById('handbook-catalog');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onAdvisorClick={() => setActiveTab('advisor')}
          />
        )}

        <div id="handbook-catalog">
          {activeTab === 'explorer' && (
            <EtiquetteExplorer
              categories={CATEGORIES}
              items={ETIQUETTE_ITEMS}
              savedIds={savedIds}
              onToggleSave={handleToggleSave}
              onSelectItem={(item) => setSelectedItem(item)}
              searchRef={searchInputRef}
            />
          )}

          {activeTab === 'advisor' && (
            <SituationAdvisor scenarios={POPULAR_SCENARIOS} />
          )}

          {activeTab === 'quiz' && (
            <InteractiveQuiz questions={QUIZ_QUESTIONS} />
          )}

          {activeTab === 'regulations' && (
            <LegalRegulations regulations={LEGAL_REGULATIONS} />
          )}

          {activeTab === 'saved' && (
            <BookmarkedEtiquette
              items={ETIQUETTE_ITEMS}
              categories={CATEGORIES}
              savedIds={savedIds}
              onToggleSave={handleToggleSave}
              onClearAll={handleClearAllSaved}
              onSelectItem={(item) => setSelectedItem(item)}
              onExploreMore={() => setActiveTab('explorer')}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer onTabChange={(tab) => setActiveTab(tab)} />

      {/* Deep-dive Item Detail Modal */}
      <EtiquetteModal
        item={selectedItem}
        category={selectedCategory}
        isSaved={selectedItem ? savedIds.includes(selectedItem.id) : false}
        onToggleSave={handleToggleSave}
        onClose={() => setSelectedItem(null)}
      />

      {/* Printable Pocket Handbook Modal */}
      {showPrintModal && (
        <PrintHandbookModal
          categories={CATEGORIES}
          items={ETIQUETTE_ITEMS}
          onClose={() => setShowPrintModal(false)}
        />
      )}
    </div>
  );
}
