import React from 'react';
import { Heart, PhoneCall, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onTabChange: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  return (
    <footer className="bg-white border-t border-slate-200 py-10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-black text-xs">
                G01
              </span>
              <span className="font-bold text-slate-900 text-base">
                Cẩm Nang Ứng Xử Nơi Công Cộng
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              Dự án cẩm nang số cung cấp thông tin tư vấn ứng xử chuẩn mực, nâng cao ý thức văn hóa cộng đồng và thượng tôn pháp luật tại các không gian đô thị.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-700" />
              <span>Phản ánh vi phạm trật tự đô thị: Tổng đài <strong>1022</strong></span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Chuyên Mục Cẩm Nang
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <button
                  onClick={() => onTabChange('explorer')}
                  className="hover:text-emerald-700 transition-colors"
                >
                  Tra cứu Nên & Không nên
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTabChange('advisor')}
                  className="hover:text-emerald-700 transition-colors"
                >
                  Tư vấn giải quyết tình huống
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTabChange('quiz')}
                  className="hover:text-emerald-700 transition-colors"
                >
                  Trắc nghiệm kiến thức ứng xử
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTabChange('regulations')}
                  className="hover:text-emerald-700 transition-colors"
                >
                  Tra cứu mức xử phạt pháp luật
                </button>
              </li>
            </ul>
          </div>

          {/* Civic pledge */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Khẩu Hiệu Văn Minh
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed italic bg-emerald-50/50 p-3 rounded-lg border border-emerald-100">
              "Xếp hàng lần lượt · Nhường ghế ưu tiên · Giữ gìn vệ sinh · Nói năng nhã nhặn · Tôn trọng không gian chung."
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © 2026 Cẩm Nang Ứng Xử Nơi Công Cộng G01. Phát triển vì nếp sống văn minh đô thị.
          </div>
          <div className="flex items-center gap-1">
            <span>Chung tay vì cộng đồng thân thiện & thanh lịch</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
