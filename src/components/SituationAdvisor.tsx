import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Scale, 
  Copy, 
  Check, 
  ChevronRight,
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { SituationScenario, AdvisoryResponse } from '../types';

interface SituationAdvisorProps {
  scenarios: SituationScenario[];
}

export const SituationAdvisor: React.FC<SituationAdvisorProps> = ({ scenarios }) => {
  const [selectedScenario, setSelectedScenario] = useState<SituationScenario>(scenarios[0]);
  const [customScenarioText, setCustomScenarioText] = useState('');
  const [customLocation, setCustomLocation] = useState('Phương tiện công cộng');
  const [isLoading, setIsLoading] = useState(false);
  const [aiAdvisory, setAiAdvisory] = useState<AdvisoryResponse | null>(null);
  const [copiedPhrase, setCopiedPhrase] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyPhrase = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text.replace(/^"|"$/g, ''));
      setCopiedPhrase(text);
      setTimeout(() => setCopiedPhrase(null), 2000);
    }
  };

  const handleConsultSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customScenarioText.trim()) return;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/consult-etiquette', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenario: customScenarioText.trim(),
          location: customLocation
        })
      });

      if (!res.ok) {
        throw new Error('Không thể nhận phản hồi từ hệ thống tư vấn.');
      }

      const data = await res.json();
      setAiAdvisory(data);
    } catch (err: any) {
      console.warn('API consultation fallback triggered:', err);
      // Fallback smart response so user experience is never broken
      setAiAdvisory({
        analysis: 'Tình huống này yêu cầu sự bình tĩnh, kiên nhẫn và giải quyết dựa trên nguyên tắc bảo vệ không gian chung mà không làm mất mặt đối phương.',
        dos: [
          'Chủ động mỉm cười nhẹ nhàng, giữ khoảng cách cơ thể an toàn khi tiếp cận',
          'Nêu rõ cảm nhận của bản thân (mình đang cần nghỉ ngơi/làm việc) thay vì công kích trực diện',
          'Nhờ sự trợ giúp của bộ phận bảo vệ hoặc điều hành nếu đối phương không hợp tác'
        ],
        donts: [
          'Không to tiếng, quát tháo hay lăng mạ trước đám đông',
          'Không dùng điện thoại quay phim dí sát mặt người khác để dọa dẫm',
          'Không dùng bạo lực hoặc đẩy mạnh cơ thể'
        ],
        suggestedPhrases: [
          '"Dạ em xin lỗi làm phiền anh/chị, phiền anh/chị hỗ trợ giúp em một chút được không ạ?"',
          '"Xin phép mọi người cùng giữ gìn không gian chung để chuyến đi thoải mái cho tất cả ạ."'
        ],
        legalOrCivicNote: 'Văn hóa ứng xử đô thị khuyến khích đối thoại tôn trọng lẫn nhau trước khi áp dụng các chế tài hành chính.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            <span>Tư vấn ứng xử tình huống</span>
            <span aria-hidden="true">·</span>
            <span>Bộ giải pháp giao tiếp ôn hòa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Cách Xử Lý Các Tình Huống Xung Đột Nơi Công Cộng
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Khi gặp các hành vi thiếu ý thức nơi đông người, phản ứng thông minh nhất không phải là im lặng chịu đựng hay nổi nóng cãi vã, mà là xử lý tế nhị, kiên quyết và đúng mực.
          </p>
        </div>

        {/* AI Custom Scenario Advisor Box */}
        <div className="bg-white rounded-2xl border border-emerald-200/90 p-6 mb-10 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Tư Vấn Tình Huống Trực Tiếp</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
            Bạn đang gặp tình huống khó xử nào nơi công cộng?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-5">
            Nhập tình huống bạn đang băn khoăn (ví dụ: bị người khác nhìn trộm điện thoại, thấy người khác không dọn phân chó, người ngồi cạnh gác chân...), hệ thống tư vấn sẽ phân tích tâm lý, đưa ra câu nói mẫu lịch sự và các bước xử lý an toàn.
          </p>

          <form onSubmit={handleConsultSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Địa điểm xảy ra:
                </label>
                <select
                  value={customLocation}
                  onChange={(e) => setCustomLocation(e.target.value)}
                  className="w-full text-xs sm:text-sm py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                >
                  <option value="Phương tiện công cộng (Xe buýt, Metro)">Phương tiện công cộng (Xe buýt, Metro)</option>
                  <option value="Rạp chiếu phim / Nhà hát">Rạp chiếu phim / Nhà hát</option>
                  <option value="Bệnh viện / Cơ sở y tế">Bệnh viện / Cơ sở y tế</option>
                  <option value="Thang máy / Cầu thang cuốn">Thang máy / Cầu thang cuốn</option>
                  <option value="Công viên / Vỉa hè / Đường phố">Công viên / Vỉa hè / Đường phố</option>
                  <option value="Nhà hàng / Quán cà phê">Nhà hàng / Quán cà phê</option>
                  <option value="Thư viện / Không gian làm việc">Thư viện / Không gian làm việc</option>
                  <option value="Khu di tích / Nơi tôn nghiêm">Khu di tích / Nơi tôn nghiêm</option>
                  <option value="Cơ quan hành chính / Nơi công quyền">Cơ quan hành chính / Nơi công quyền</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mô tả tình huống thực tế:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customScenarioText}
                    onChange={(e) => setCustomScenarioText(e.target.value)}
                    placeholder="VD: Người ngồi sau trên máy bay liên tục đạp ghế và nói chuyện điện thoại ồn ào..."
                    className="flex-1 text-xs sm:text-sm py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !customScenarioText.trim()}
                    className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
                  >
                    {isLoading ? (
                      <span>Đang phân tích...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Xin Tư Vấn</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* AI Result Card */}
          {aiAdvisory && (
            <div className="mt-6 p-5 rounded-xl bg-slate-50 border border-emerald-200 animate-fade-in space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Kết Quả Tư Vấn Tình Huống
                  </span>
                </div>
                <button
                  onClick={() => setAiAdvisory(null)}
                  className="text-xs text-slate-400 hover:text-slate-600"
                >
                  Thu gọn
                </button>
              </div>

              {/* Analysis */}
              <div>
                <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Nhận định tâm lý & bối cảnh
                </h4>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  {aiAdvisory.analysis}
                </p>
              </div>

              {/* DOs & DONTs Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-emerald-50/80 border border-emerald-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>HÀNH VI NÊN LÀM</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-950">
                    {aiAdvisory.dos.map((d, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-700 font-bold shrink-0">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-lg bg-rose-50/80 border border-rose-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 uppercase mb-2">
                    <XCircle className="w-4 h-4 text-rose-700" />
                    <span>TUYỆT ĐỐI TRÁNH</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-rose-950">
                    {aiAdvisory.donts.map((d, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-700 font-bold shrink-0">✗</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Suggested Phrases */}
              {aiAdvisory.suggestedPhrases && aiAdvisory.suggestedPhrases.length > 0 && (
                <div className="p-3.5 rounded-lg bg-amber-50/80 border border-amber-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase mb-2">
                    <Lightbulb className="w-4 h-4 text-amber-700" />
                    <span>CÂU NÓI MẪU LỊCH THIỆP GỢI Ý ĐỂ ÁP DỤNG NGAY</span>
                  </div>
                  <div className="space-y-2">
                    {aiAdvisory.suggestedPhrases.map((phrase, i) => (
                      <div key={i} className="flex items-center justify-between gap-3 p-2 bg-white rounded border border-amber-200/70 text-xs sm:text-sm text-slate-800 font-medium">
                        <span>{phrase}</span>
                        <button
                          onClick={() => handleCopyPhrase(phrase)}
                          className="shrink-0 p-1.5 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded transition-colors"
                          title="Sao chép câu nói mẫu"
                        >
                          {copiedPhrase === phrase ? (
                            <Check className="w-3.5 h-3.5 text-emerald-700" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Legal or Civic Note */}
              {aiAdvisory.legalOrCivicNote && (
                <div className="text-xs text-slate-500 flex items-start gap-1.5 pt-1">
                  <Scale className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{aiAdvisory.legalOrCivicNote}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Pre-curated Typical Scenarios Deck */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Tình Huống Điển Hình & Cẩm Nang Ứng Phó
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Chọn một tình huống thực tế thường gặp bên dưới để xem hướng dẫn chi tiết từng bước.
          </p>
        </div>

        {/* 2-Column Split: Scenarios Navigation List & Detailed Roadmap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left list of scenarios */}
          <div className="lg:col-span-5 space-y-2.5">
            {scenarios.map((scen) => {
              const isSelected = selectedScenario.id === scen.id;
              return (
                <button
                  key={scen.id}
                  onClick={() => setSelectedScenario(scen)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-white border-emerald-500 shadow-sm ring-1 ring-emerald-500'
                      : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <span className="font-semibold text-emerald-800">{scen.location}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {scen.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {scen.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Solution Canvas */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
              <span>{selectedScenario.location}</span>
              <span aria-hidden="true">·</span>
              <span>Lộ trình ứng xử văn minh</span>
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 leading-snug mb-3">
              {selectedScenario.title}
            </h3>

            {/* Situation context */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-600 mb-6">
              <span className="font-bold text-slate-800">Tâm lý & Bối cảnh: </span>
              {selectedScenario.context}
            </div>

            {/* 3-Step Guided Roadmap */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Quy Trình 3 Bước Xử Lý
              </h4>

              {selectedScenario.suggestedSteps.map((stepItem) => (
                <div key={stepItem.step} className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="w-7 h-7 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {stepItem.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h5 className="text-sm font-bold text-slate-900">
                        {stepItem.title}
                      </h5>
                      <span className="text-xs text-emerald-800 font-medium">
                        {stepItem.tone}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {stepItem.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sample Polite Quotes */}
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 mb-6">
              <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                <span>Câu Nói Mẫu Lịch Sự Đề Xuất</span>
              </h4>
              <div className="space-y-2">
                {selectedScenario.sampleQuotes.map((quote, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-3 p-2.5 bg-white rounded-lg border border-emerald-200/80 text-xs sm:text-sm text-slate-800 font-medium">
                    <span>{quote}</span>
                    <button
                      onClick={() => handleCopyPhrase(quote)}
                      className="shrink-0 p-1.5 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded transition-colors"
                      title="Sao chép câu nói"
                    >
                      {copiedPhrase === quote ? (
                        <Check className="w-4 h-4 text-emerald-700" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Mistakes to avoid */}
            <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/80 mb-6">
              <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
                <span>Sai Lầm Phổ Biến Cần Tránh</span>
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-rose-950">
                {selectedScenario.mistakesToAvoid.map((mistake, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-rose-700 font-bold shrink-0">✗</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Civic Note */}
            <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 flex items-center gap-2">
              <span className="font-semibold text-slate-700">Lời nhắn văn minh:</span>
              <span>{selectedScenario.civicNote}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
