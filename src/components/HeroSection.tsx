import React from 'react';
import { Search, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

interface HeroSectionProps {
  onSearchFocus: () => void;
  onExploreClick: () => void;
  onAdvisorClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearchFocus,
  onExploreClick,
  onAdvisorClick
}) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-3">
              <span>Đề Án Văn Minh Đô Thị G01</span>
              <span aria-hidden="true">·</span>
              <span>Bộ Quy Tắc Ứng Xử Nơi Công Cộng</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4" style={{ textWrap: 'balance' }}>
              Xây dựng nếp sống văn minh từ những hành vi nhỏ nhất
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl">
              Cẩm nang tư vấn toàn diện các hành vi <span className="font-semibold text-emerald-700">NÊN LÀM</span> và <span className="font-semibold text-rose-700">KHÔNG NÊN LÀM</span> tại các không gian công cộng, giúp giải tỏa xung đột bằng sự thấu hiểu, tôn trọng và bảo vệ trật tự chung.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={onExploreClick}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Khám Phá Cẩm Nang Tra Cứu</span>
              </button>

              <button
                onClick={onAdvisorClick}
                className="px-5 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <HeartHandshake className="w-4 h-4 text-emerald-700" />
                <span>Tư Vấn Tình Huống Thực Tế</span>
              </button>
            </div>

            {/* Quick stats strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 text-slate-700">
              <div>
                <div className="text-2xl font-bold text-slate-900 tabular-nums">09</div>
                <div className="text-xs text-slate-500 mt-0.5">Không gian đô thị</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-700 tabular-nums">40+</div>
                <div className="text-xs text-slate-500 mt-0.5">Quy tắc chuẩn mực</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 tabular-nums">100%</div>
                <div className="text-xs text-slate-500 mt-0.5">Cơ sở luật & văn hóa</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Artwork */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm aspect-[16/10] lg:aspect-[4/3] flex items-center justify-center">
              <img
                src="/src/assets/images/cam_nang_hero_1792415539233.jpg"
                alt="Minh họa người dân thực hành ứng xử văn minh nơi công cộng"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  // Fallback container if image fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add('bg-gradient-to-br', 'from-emerald-50', 'to-teal-100', 'p-8');
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Thông Điệp Văn Minh G01
                  </span>
                  <p className="text-sm font-medium mt-0.5 text-slate-100">
                    "Tôn trọng không gian chung là tôn trọng chính phẩm giá của bạn."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
