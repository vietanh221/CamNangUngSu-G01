import React, { useState, useMemo } from 'react';
import { 
  Search, 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  BookmarkCheck, 
  Scale, 
  Lightbulb, 
  ArrowRight,
  Filter,
  Bus,
  Film,
  HeartPulse,
  ArrowUpDown,
  Trees,
  Coffee,
  BookOpen,
  Landmark,
  Building2,
  Sparkles
} from 'lucide-react';
import { CategoryId, CategoryInfo, EtiquetteItem } from '../types';

interface EtiquetteExplorerProps {
  categories: CategoryInfo[];
  items: EtiquetteItem[];
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSelectItem: (item: EtiquetteItem) => void;
  searchRef?: React.RefObject<HTMLInputElement | null>;
}

export const EtiquetteExplorer: React.FC<EtiquetteExplorerProps> = ({
  categories,
  items,
  savedIds,
  onToggleSave,
  onSelectItem,
  searchRef
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'DO' | 'DONT' | 'legal'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping helper
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bus': return <Bus className="w-4 h-4" />;
      case 'Film': return <Film className="w-4 h-4" />;
      case 'HeartPulse': return <HeartPulse className="w-4 h-4" />;
      case 'ArrowUpDown': return <ArrowUpDown className="w-4 h-4" />;
      case 'Trees': return <Trees className="w-4 h-4" />;
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4" />;
      case 'Landmark': return <Landmark className="w-4 h-4" />;
      case 'Building2': return <Building2 className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  // Filtered Items logic
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.categoryId !== selectedCategory) {
        return false;
      }
      // Type filter
      if (typeFilter === 'DO' && item.type !== 'DO') return false;
      if (typeFilter === 'DONT' && item.type !== 'DONT') return false;
      if (typeFilter === 'legal' && !item.legalReference) return false;

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchSummary = item.summary.toLowerCase().includes(query);
        const matchTip = item.practicalTip.toLowerCase().includes(query);
        const matchReason = item.reason.toLowerCase().includes(query);
        const matchTags = item.tags.some(t => t.toLowerCase().includes(query));
        return matchTitle || matchSummary || matchTip || matchReason || matchTags;
      }

      return true;
    });
  }, [items, selectedCategory, typeFilter, searchQuery]);

  // Statistics for current selection
  const dosCount = useMemo(() => filteredItems.filter(i => i.type === 'DO').length, [filteredItems]);
  const dontsCount = useMemo(() => filteredItems.filter(i => i.type === 'DONT').length, [filteredItems]);

  return (
    <section className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Description */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            <span>Tra cứu trực quan</span>
            <span aria-hidden="true">·</span>
            <span>Bộ quy tắc ứng xử đô thị</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Cẩm Nang Hành Vi Nên & Không Nên Làm
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Chọn không gian công cộng bên dưới để xem hướng dẫn chi tiết, lý do văn hóa và căn cứ quy định pháp luật.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6 shadow-sm space-y-4">
          {/* Top row: Search input + Type segmented filter */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm quy tắc (ví dụ: loa ngoài, nhường ghế, rọ mõm, thang cuốn, chen hàng...)"
                className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-medium"
                >
                  Xóa
                </button>
              )}
            </div>

            {/* Segmented Type Filter Buttons */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg shrink-0">
              <button
                onClick={() => setTypeFilter('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  typeFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tất Cả ({items.length})
              </button>
              <button
                onClick={() => setTypeFilter('DO')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors inline-flex items-center gap-1.5 whitespace-nowrap ${
                  typeFilter === 'DO'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-emerald-800'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Nên Làm</span>
              </button>
              <button
                onClick={() => setTypeFilter('DONT')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors inline-flex items-center gap-1.5 whitespace-nowrap ${
                  typeFilter === 'DONT'
                    ? 'bg-rose-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-rose-800'
                }`}
              >
                <XCircle className="w-3.5 h-3.5" />
                <span>Không Nên Làm</span>
              </button>
              <button
                onClick={() => setTypeFilter('legal')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors inline-flex items-center gap-1.5 whitespace-nowrap ${
                  typeFilter === 'legal'
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-blue-800'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Có Xử Phạt Luật</span>
              </button>
            </div>
          </div>

          {/* Category Horizontal Filter Buttons */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Tất cả không gian
              </button>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-emerald-700 text-white font-semibold shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {getCategoryIcon(cat.iconName)}
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
          <div className="flex items-center gap-2 font-medium">
            <span>Hiển thị <strong className="text-slate-800">{filteredItems.length}</strong> chuẩn mực</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-700 font-semibold">{dosCount} Nên làm</span>
            <span aria-hidden="true">·</span>
            <span className="text-rose-700 font-semibold">{dontsCount} Không nên làm</span>
          </div>
          {searchQuery && (
            <span className="text-slate-400">
              Kết quả cho "{searchQuery}"
            </span>
          )}
        </div>

        {/* Etiquette Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-8">
            <p className="text-slate-500 text-base font-medium">
              Không tìm thấy quy tắc nào phù hợp với bộ lọc hoặc từ khóa "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setTypeFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
            >
              Đặt lại tất cả bộ lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => {
              const isDo = item.type === 'DO';
              const isSaved = savedIds.includes(item.id);
              const cat = categories.find((c) => c.id === item.categoryId);

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectItem(item)}
                  className={`group bg-white rounded-xl border transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col justify-between overflow-hidden ${
                    isDo 
                      ? 'border-emerald-200/90 hover:border-emerald-400' 
                      : 'border-rose-200/90 hover:border-rose-400'
                  }`}
                >
                  {/* Card Header Top */}
                  <div className="p-5 pb-3">
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      {/* Space category & Do/Dont indicator */}
                      <div className="flex items-center gap-2 text-xs">
                        <span className={`inline-flex items-center gap-1 font-bold tracking-tight uppercase px-2 py-0.5 rounded ${
                          isDo 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : 'bg-rose-100 text-rose-800'
                        }`}>
                          {isDo ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          <span>{isDo ? 'NÊN LÀM' : 'KHÔNG NÊN'}</span>
                        </span>
                        <span className="text-slate-400" aria-hidden="true">·</span>
                        <span className="text-slate-500 font-medium truncate max-w-[140px]">
                          {cat?.name}
                        </span>
                      </div>

                      {/* Bookmark button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleSave(item.id);
                        }}
                        className={`p-1.5 rounded-md transition-colors ${
                          isSaved
                            ? 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100'
                            : 'text-slate-300 hover:text-slate-600 hover:bg-slate-100'
                        }`}
                        title={isSaved ? 'Xóa khỏi sổ tay' : 'Lưu vào sổ tay'}
                      >
                        {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug mb-2">
                      {item.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>

                  {/* Card Bottom: Practical Tip & Action Footer */}
                  <div className="px-5 pb-4 pt-2">
                    {item.legalReference ? (
                      <div className="mb-3 px-2.5 py-1.5 bg-blue-50/70 border border-blue-200/70 rounded-md text-xs text-blue-900 flex items-center gap-1.5">
                        <Scale className="w-3.5 h-3.5 shrink-0 text-blue-700" />
                        <span className="truncate">{item.legalReference}</span>
                      </div>
                    ) : (
                      <div className="mb-3 px-2.5 py-1.5 bg-amber-50/70 border border-amber-200/70 rounded-md text-xs text-amber-900 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 shrink-0 text-amber-700" />
                        <span className="truncate">{item.practicalTip}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500 font-medium">
                      <span>Xem giải thích chi tiết</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
