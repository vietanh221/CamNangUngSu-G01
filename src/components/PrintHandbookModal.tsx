import React from 'react';
import { X, Printer, CheckCircle2, XCircle } from 'lucide-react';
import { EtiquetteItem, CategoryInfo } from '../types';

interface PrintHandbookModalProps {
  categories: CategoryInfo[];
  items: EtiquetteItem[];
  onClose: () => void;
}

export const PrintHandbookModal: React.FC<PrintHandbookModalProps> = ({
  categories,
  items,
  onClose
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 no-print">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Bản In Tóm Tắt Cẩm Nang Ứng Xử Đô Thị G01
            </h3>
            <p className="text-xs text-slate-500">
              Bản tóm tắt chuẩn mực NÊN và KHÔNG NÊN làm tại các không gian công cộng.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In Ngay (Print)</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="py-6 space-y-6">
          <div className="text-center border-b pb-4">
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
              ĐỀ ÁN XÂY DỰNG NẾP SỐNG VĂN MINH ĐÔ THỊ G01
            </div>
            <h1 className="text-2xl font-black text-slate-900 mt-1">
              CẨM NANG ỨNG XỬ NƠI CÔNG CỘNG
            </h1>
            <p className="text-xs text-slate-500 mt-1 italic">
              "Mỗi hành vi văn minh là một đóa hoa cho thành phố thanh lịch"
            </p>
          </div>

          {/* Grouped by categories */}
          <div className="space-y-6">
            {categories.map((cat) => {
              const catItems = items.filter((i) => i.categoryId === cat.id);
              const dos = catItems.filter((i) => i.type === 'DO');
              const donts = catItems.filter((i) => i.type === 'DONT');

              return (
                <div key={cat.id} className="border border-slate-200 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-slate-900 mb-2 border-b border-slate-100 pb-1 flex items-center justify-between">
                    <span>{cat.name}</span>
                    <span className="text-xs font-normal text-slate-500">{cat.shortDesc}</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {/* DOs */}
                    <div className="space-y-1.5">
                      <div className="font-bold text-emerald-800 uppercase text-[11px] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                        <span>NÊN LÀM</span>
                      </div>
                      <ul className="space-y-1 text-slate-700">
                        {dos.map((item) => (
                          <li key={item.id} className="flex items-start gap-1.5">
                            <span className="text-emerald-700 font-bold">•</span>
                            <div>
                              <strong>{item.title}:</strong> {item.summary}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* DONTs */}
                    <div className="space-y-1.5">
                      <div className="font-bold text-rose-800 uppercase text-[11px] flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5 text-rose-700" />
                        <span>KHÔNG NÊN LÀM</span>
                      </div>
                      <ul className="space-y-1 text-slate-700">
                        {donts.map((item) => (
                          <li key={item.id} className="flex items-start gap-1.5">
                            <span className="text-rose-700 font-bold">•</span>
                            <div>
                              <strong>{item.title}:</strong> {item.summary}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center text-xs text-slate-400 pt-4 border-t">
            Cẩm Nang Ứng Xử Nơi Công Cộng G01 · Phát hành vì cộng đồng văn minh, nghĩa tình và đáng sống.
          </div>
        </div>
      </div>
    </div>
  );
};
