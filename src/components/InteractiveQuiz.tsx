import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw, 
  ChevronRight, 
  Printer, 
  Sparkles,
  HelpCircle,
  Share2
} from 'lucide-react';
import { QuizQuestion } from '../types';

interface InteractiveQuizProps {
  questions: QuizQuestion[];
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [userName, setUserName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (optionId: string) => {
    if (isAnswered) return;
    setSelectedOptionId(optionId);
    setIsAnswered(true);

    const chosen = currentQuestion.options.find((o) => o.id === optionId);
    if (chosen?.isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
    setShowCertificate(false);
  };

  const getRank = (scoreVal: number) => {
    if (scoreVal >= 9) {
      return {
        title: 'Đại Sứ Văn Minh Đô Thị G01',
        desc: 'Bạn nắm vững các chuẩn mực ứng xử, phản ứng tinh tế và có tinh thần trách nhiệm cộng đồng xuất sắc!',
        color: 'text-emerald-700',
        badgeBg: 'bg-emerald-50 border-emerald-200'
      };
    }
    if (scoreVal >= 7) {
      return {
        title: 'Công Dân Văn Minh Gương Mẫu',
        desc: 'Bạn có ý thức văn hóa nơi công cộng rất tốt, luôn tôn trọng trật tự và không gian của người xung quanh.',
        color: 'text-blue-700',
        badgeBg: 'bg-blue-50 border-blue-200'
      };
    }
    if (scoreVal >= 5) {
      return {
        title: 'Công Dân Cần Hoàn Thiện Thêm',
        desc: 'Bạn đã nắm được các quy tắc cơ bản, nhưng cần chú ý thêm một số tình huống đặc thù như thang máy, rạp phim.',
        color: 'text-amber-700',
        badgeBg: 'bg-amber-50 border-amber-200'
      };
    }
    return {
      title: 'Cần Tham Khảo Thêm Cẩm Nang',
      desc: 'Hãy dành chút thời gian tra cứu mục Cẩm Nang để tự tin hơn trong các tình huống giao tiếp đời sống nhé!',
      color: 'text-rose-700',
      badgeBg: 'bg-rose-50 border-rose-200'
    };
  };

  const rank = getRank(score);

  return (
    <section className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            <span>Đố vui tương tác</span>
            <span aria-hidden="true">·</span>
            <span>Khảo sát ý thức đô thị</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Trắc Nghiệm Văn Hóa Ứng Xử Nơi Công Cộng
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-xl mx-auto">
            10 tình huống thực tế giúp bạn đo lường mức độ tinh tế và hiểu biết pháp luật khi sinh hoạt tại các không gian chung.
          </p>
        </div>

        {!isCompleted ? (
          /* Active Question Card */
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {/* Progress Top Bar */}
            <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
              <span className="font-semibold text-emerald-800">
                Câu hỏi {currentIndex + 1} / {questions.length}
              </span>
              <span>
                Điểm hiện tại: <strong className="text-slate-900 tabular-nums">{score}</strong> / {questions.length}
              </span>
            </div>

            {/* Progress bar line */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-6">
              <div 
                className="bg-emerald-600 h-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Scenario Header */}
            <div className="mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Bối cảnh: {currentQuestion.location}
              </span>
              <p className="text-sm text-slate-600 italic mt-1 bg-slate-50 p-3 rounded-lg border border-slate-100">
                "{currentQuestion.scenario}"
              </p>
            </div>

            {/* Question Title */}
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-6 leading-snug">
              {currentQuestion.question}
            </h3>

            {/* Options List */}
            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedOptionId === option.id;
                let optionStyle = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50';

                if (isAnswered) {
                  if (option.isCorrect) {
                    optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-medium';
                  } else if (isSelected && !option.isCorrect) {
                    optionStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                  } else {
                    optionStyle = 'border-slate-200 opacity-60';
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-xs sm:text-sm flex items-start gap-3 ${optionStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {option.id}
                    </span>
                    <span className="flex-1 leading-relaxed">
                      {option.text}
                    </span>
                    {isAnswered && option.isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                    )}
                    {isAnswered && isSelected && !option.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-700 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation Box */}
            {isAnswered && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 animate-fade-in">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-700">
                  <HelpCircle className="w-4 h-4 text-emerald-700" />
                  <span>Giải Thích Chuyên Gia</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {currentQuestion.options.find((o) => o.id === selectedOptionId)?.explanation ||
                    currentQuestion.options.find((o) => o.isCorrect)?.explanation}
                </p>
              </div>
            )}

            {/* Next Button */}
            {isAnswered && (
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <span>{currentIndex < questions.length - 1 ? 'Câu Tiếp Theo' : 'Xem Kết Quả & Chứng Nhận'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Completion & Certification View */
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Kết Quả Khảo Sát Văn Minh Đô Thị
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2">
              Điểm của bạn: <span className="text-emerald-700 tabular-nums">{score}</span> / {questions.length}
            </h3>

            {/* Rank badge */}
            <div className={`inline-block p-4 rounded-xl border my-4 max-w-md ${rank.badgeBg}`}>
              <h4 className={`text-base font-bold ${rank.color}`}>
                Danh Hiệu: {rank.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {rank.desc}
              </p>
            </div>

            {/* Name input for certificate */}
            {!showCertificate ? (
              <div className="max-w-sm mx-auto my-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Nhập họ và tên để nhận Giấy Chứng Nhận Điện Tử:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="VD: Nguyễn Văn An"
                    className="flex-1 text-sm py-2 px-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    onClick={() => setShowCertificate(true)}
                    disabled={!userName.trim()}
                    className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 disabled:bg-slate-300 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Cấp Chứng Nhận
                  </button>
                </div>
              </div>
            ) : (
              /* Printable Certificate View */
              <div className="my-8 p-8 rounded-2xl border-2 border-emerald-600 bg-emerald-50/30 text-center relative max-w-xl mx-auto shadow-sm">
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
                  Đề Án Văn Minh Đô Thị G01 · Năm 2026
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-1">
                  CHỨNG NHẬN CÔNG DÂN VĂN MINH
                </h4>
                <div className="w-16 h-0.5 bg-emerald-600 mx-auto my-3" />
                <p className="text-xs text-slate-600 mb-2">Chứng nhận trân trọng trao tặng cho:</p>
                <h5 className="text-2xl font-extrabold text-emerald-800 mb-3">
                  {userName}
                </h5>
                <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto leading-relaxed mb-4">
                  Đã hoàn thành xuất sắc bài kiểm tra trắc nghiệm kiến thức ứng xử nơi công cộng với kết quả <strong>{score}/10</strong> điểm, đạt danh hiệu <strong>{rank.title}</strong>.
                </p>
                <div className="text-xs text-slate-500 pt-3 border-t border-emerald-200 flex items-center justify-between">
                  <span>Mã số: G01-VN-{Date.now().toString().slice(-6)}</span>
                  <span>Ngày cấp: {new Date().toLocaleDateString('vi-VN')}</span>
                </div>

                <div className="mt-4 flex justify-center gap-3 no-print">
                  <button
                    onClick={() => window.print()}
                    className="px-3.5 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>In Chứng Nhận</span>
                  </button>
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={handleRestart}
                className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Làm Lại Bài Trắc Nghiệm</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
