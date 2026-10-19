import React, { useState } from 'react';
import { Scale, AlertCircle, Search, ShieldAlert, FileText, ChevronRight } from 'lucide-react';
import { LegalRegulation } from '../types';

interface LegalRegulationsProps {
  regulations: LegalRegulation[];
}

export const LegalRegulations: React.FC<LegalRegulationsProps> = ({ regulations }) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(regulations.map((r) => r.category)))];

  const filteredRegulations = regulations.filter((reg) => {
    if (selectedCategory !== 'all' && reg.category !== selectedCategory) return false;
    if (filterQuery.trim()) {
      const q = filterQuery.toLowerCase();
      return (
        reg.behavior.toLowerCase().includes(q) ||
        reg.lawDoc.toLowerCase().includes(q) ||
        reg.penaltyRange.toLowerCase().includes(q) ||
        reg.note.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <section className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            <span>Kiến thức pháp lý</span>
            <span aria-hidden="true">·</span>
            <span>Chế tài hành chính hiện hành</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Khung Xử Phạt Vi Phạm Hành Vi Nơi Công Cộng
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Văn minh đô thị không chỉ là lời kêu gọi đạo đức mà còn được pháp luật bảo vệ nghiêm ngặt. Dưới đây là các mức xử phạt theo các Nghị định mới nhất của Chính phủ Việt Nam.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6 shadow-sm flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Tìm kiếm hành vi hoặc số nghị định (ví dụ: vứt rác, chó rọ mõm, hút thuốc...)"
              className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'all' ? 'Tất cả lĩnh vực' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Regulations Table / Cards */}
        <div className="space-y-4">
          {filteredRegulations.map((reg) => (
            <div
              key={reg.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-slate-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-semibold text-slate-500 uppercase tracking-wider">
                    Lĩnh vực:
                  </span>
                  <span className="font-bold text-slate-800">
                    {reg.category}
                  </span>
                  <span className="text-slate-300" aria-hidden="true">·</span>
                  <span className="text-blue-800 font-medium">
                    {reg.lawDoc}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 border border-rose-200 rounded-lg text-rose-800 font-bold text-xs sm:text-sm self-start sm:self-auto tabular-nums">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                  <span>Phạt tiền: {reg.penaltyRange}</span>
                </div>
              </div>

              <div className="pt-3">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  {reg.behavior}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-700">Chi tiết áp dụng: </span>
                  {reg.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note banner */}
        <div className="mt-8 p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs sm:text-sm text-slate-700 flex items-start gap-3">
          <Scale className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-900">Mục tiêu cẩm nang G01: </span>
            Xử phạt là biện pháp cưỡng chế sau cùng của nhà nước. Văn minh tự giác và tôn trọng cộng đồng mới là giải pháp căn cơ để xây dựng những đô thị đáng sống, an toàn và thân thiện.
          </div>
        </div>

      </div>
    </section>
  );
};
