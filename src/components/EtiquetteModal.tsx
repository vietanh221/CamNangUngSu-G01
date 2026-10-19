import React from 'react';
import { X, CheckCircle2, XCircle, Scale, Bookmark, BookmarkCheck, Lightbulb, Share2 } from 'lucide-react';
import { EtiquetteItem, CategoryInfo } from '../types';

interface EtiquetteModalProps {
  item: EtiquetteItem | null;
  category: CategoryInfo | undefined;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onClose: () => void;
}

export const EtiquetteModal: React.FC<EtiquetteModalProps> = ({
  item,
  category,
  isSaved,
  onToggleSave,
  onClose
}) => {
  if (!item) return null;

  const isDo = item.type === 'DO';

  const handleShare = () => {
    if (navigator.clipboard) {
      const text = `[Cẩm Nang Ứng Xử G01 - ${category?.name || 'Công cộng'}]\n${isDo ? '✅ NÊN LÀM' : '❌ KHÔNG NÊN LÀM'}: ${item.title}\n\n👉 Chi tiết: ${item.summary}\n💡 Mẹo xử lý: ${item.practicalTip}`;
      navigator.clipboard.writeText(text);
      alert('Đã sao chép nội dung cẩm nang để chia sẻ!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-6 border-b flex items-start justify-between gap-4 ${
          isDo ? 'bg-emerald-50/60 border-emerald-100' : 'bg-rose-50/60 border-rose-100'
        }`}>
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-xl mt-0.5 ${
              isDo ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
            }`}>
              {isDo ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-1 text-slate-500">
                <span>{category?.name || 'Không gian công cộng'}</span>
                <span aria-hidden="true">·</span>
                <span className={isDo ? 'text-emerald-800 font-bold' : 'text-rose-800 font-bold'}>
                  {isDo ? 'HÀNH VI NÊN LÀM' : 'HÀNH VI KHÔNG NÊN LÀM'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {item.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Chuẩn Mực Thực Hành
            </h4>
            <p className="text-slate-800 text-base leading-relaxed font-medium">
              {item.summary}
            </p>
          </div>

          {/* Why it matters */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              <span>Ý Nghĩa Văn Hóa & Tác Động Cộng Đồng</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {item.reason}
            </p>
          </div>

          {/* Practical tip */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider mb-1.5">
              <Lightbulb className="w-4 h-4 text-amber-700" />
              <span>Mẹo Xử Lý Tinh Tế Trong Thực Tế</span>
            </div>
            <p className="text-amber-950 text-sm leading-relaxed">
              {item.practicalTip}
            </p>
          </div>

          {/* Legal reference if applicable */}
          {item.legalReference && (
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-1.5">
                <Scale className="w-4 h-4 text-blue-700" />
                <span>Căn Cứ Pháp Lý & Quy Định Xử Phạt</span>
              </div>
              <p className="text-blue-950 text-sm leading-relaxed">
                {item.legalReference}
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="font-semibold text-slate-700">Từ khóa liên quan:</span>
            {item.tags.map((tag, idx) => (
              <span key={idx}>
                #{tag}{idx < item.tags.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(item.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors border ${
                isSaved
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4 text-emerald-700" /> : <Bookmark className="w-4 h-4" />}
              <span>{isSaved ? 'Đã lưu vào sổ tay' : 'Lưu vào sổ tay'}</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Chia sẻ</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 bg-slate-100 rounded-lg transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
