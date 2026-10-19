import React from 'react';
import { BookOpen, Sparkles, Printer } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  savedCount: number;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  onPrint
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => setActiveTab('explorer')}
          className="text-left flex items-center gap-2.5 text-slate-900 font-bold tracking-tight text-lg sm:text-xl whitespace-nowrap shrink-0 hover:opacity-85 transition-opacity"
        >
          <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-sm">
            G01
          </span>
          <span className="font-semibold text-slate-900">
            Cẩm Nang Ứng Xử Nơi Công Cộng
          </span>
        </button>

        {/* Zone 2: 4-5 Clean Single-Line Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={() => setActiveTab('explorer')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              activeTab === 'explorer'
                ? 'border-emerald-600 text-emerald-800 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Tra Cứu Nên & Không Nên
          </button>

          <button
            onClick={() => setActiveTab('advisor')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              activeTab === 'advisor'
                ? 'border-emerald-600 text-emerald-800 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Tư Vấn Tình Huống
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              activeTab === 'quiz'
                ? 'border-emerald-600 text-emerald-800 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Trắc Nghiệm Văn Minh
          </button>

          <button
            onClick={() => setActiveTab('regulations')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              activeTab === 'regulations'
                ? 'border-emerald-600 text-emerald-800 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Mức Xử Phạt Pháp Luật
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 relative ${
              activeTab === 'saved'
                ? 'border-emerald-600 text-emerald-800 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Sổ Tay Ghi Nhớ
            {savedCount > 0 && (
              <span className="ml-1.5 text-xs text-emerald-700 font-bold">
                ({savedCount})
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onPrint}
            title="In hoặc lưu cẩm nang tóm tắt dạng PDF"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors whitespace-nowrap"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>In Tóm Tắt</span>
          </button>

          <button
            onClick={() => setActiveTab('advisor')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md transition-colors shadow-sm whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4" />
            <span>Hỏi Đáp Ứng Xử</span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="lg:hidden flex items-center overflow-x-auto py-2 px-4 border-t border-slate-100 gap-4 text-xs font-medium text-slate-600 no-scrollbar">
        <button
          onClick={() => setActiveTab('explorer')}
          className={`whitespace-nowrap shrink-0 px-2 py-1 rounded ${
            activeTab === 'explorer' ? 'bg-emerald-50 text-emerald-800 font-semibold' : ''
          }`}
        >
          Nên & Không Nên
        </button>
        <button
          onClick={() => setActiveTab('advisor')}
          className={`whitespace-nowrap shrink-0 px-2 py-1 rounded ${
            activeTab === 'advisor' ? 'bg-emerald-50 text-emerald-800 font-semibold' : ''
          }`}
        >
          Tư Vấn Tình Huống
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`whitespace-nowrap shrink-0 px-2 py-1 rounded ${
            activeTab === 'quiz' ? 'bg-emerald-50 text-emerald-800 font-semibold' : ''
          }`}
        >
          Trắc Nghiệm
        </button>
        <button
          onClick={() => setActiveTab('regulations')}
          className={`whitespace-nowrap shrink-0 px-2 py-1 rounded ${
            activeTab === 'regulations' ? 'bg-emerald-50 text-emerald-800 font-semibold' : ''
          }`}
        >
          Quy Định Xử Phạt
        </button>
        <button
          onClick={() => setActiveTab('saved')}
          className={`whitespace-nowrap shrink-0 px-2 py-1 rounded ${
            activeTab === 'saved' ? 'bg-emerald-50 text-emerald-800 font-semibold' : ''
          }`}
        >
          Đã Lưu ({savedCount})
        </button>
      </div>
    </header>
  );
};
