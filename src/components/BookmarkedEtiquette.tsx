import React from 'react';
import { 
  Bookmark, 
  Trash2, 
  Printer, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { EtiquetteItem, CategoryInfo } from '../types';

interface BookmarkedEtiquetteProps {
  items: EtiquetteItem[];
  categories: CategoryInfo[];
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onClearAll: () => void;
  onSelectItem: (item: EtiquetteItem) => void;
  onExploreMore: () => void;
}

export const BookmarkedEtiquette: React.FC<BookmarkedEtiquetteProps> = ({
  items,
  categories,
  savedIds,
  onToggleSave,
  onClearAll,
  onSelectItem,
  onExploreMore
}) => {
  const savedItems = items.filter((item) => savedIds.includes(item.id));

  return (
    <section className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              <span>Cá nhân hóa</span>
              <span aria-hidden="true">·</span>
              <span>Sổ tay bỏ túi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Quy Tắc Đã Lưu ({savedItems.length})
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Các chuẩn mực ứng xử bạn đã đánh dấu để ghi nhớ hoặc chia sẻ cho gia đình, bạn bè.
            </p>
          </div>

          {savedItems.length > 0 && (
            <div className="flex items-center gap-2.5 self-start sm:self-auto no-print">
              <button
                onClick={() => window.print()}
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>In Sổ Tay Này</span>
              </button>

              <button
                onClick={onClearAll}
                className="px-3.5 py-2 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 hover:bg-rose-100 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Xóa Tất Cả</span>
              </button>
            </div>
          )}
        </div>

        {savedItems.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <Bookmark className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Chưa có quy tắc nào được lưu
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-5">
              Khi duyệt qua danh mục cẩm nang, bấm vào biểu tượng chiếc dấu trang để lưu lại những quy tắc quan trọng vào đây.
            </p>
            <button
              onClick={onExploreMore}
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Khám Phá Cẩm Nang Ngay</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {savedItems.map((item) => {
              const isDo = item.type === 'DO';
              const cat = categories.find((c) => c.id === item.categoryId);

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectItem(item)}
                  className={`bg-white rounded-xl border p-5 flex flex-col justify-between hover:shadow-md transition-all cursor-pointer ${
                    isDo ? 'border-emerald-200' : 'border-rose-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 text-xs">
                        <span className={`inline-flex items-center gap-1 font-bold tracking-tight uppercase px-2 py-0.5 rounded ${
                          isDo ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {isDo ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          <span>{isDo ? 'NÊN LÀM' : 'KHÔNG NÊN'}</span>
                        </span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500 font-medium truncate max-w-[120px]">
                          {cat?.name}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleSave(item.id);
                        }}
                        className="text-rose-400 hover:text-rose-600 p-1"
                        title="Bỏ lưu"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="italic truncate pr-2 text-amber-900">
                      💡 {item.practicalTip}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
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
