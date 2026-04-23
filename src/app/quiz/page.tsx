"use client";

import { useState } from "react";
import quizData from "@/data/quiz.json";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageContext";

export default function QuizPage() {
  const { t } = useLanguage();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showModal, setShowModal] = useState(false);
  
  const question = quizData.questions[currentStep];
  const progress = ((currentStep) / quizData.questions.length) * 100;
  const isLastQuestion = currentStep === quizData.questions.length - 1;

  const handleSelect = (optionId: string) => {
    setAnswers({ ...answers, [question.id]: optionId });
    
    // 모달을 띄우는 마지막 질문이 아닐 경우만 자동 넘김
    if (!isLastQuestion) {
      setTimeout(() => {
        setCurrentStep(s => s + 1);
      }, 350); // 선택 애니메이션 인지할 수 있는 적절한 딜레이
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowModal(true);
    } else {
      setCurrentStep(s => s + 1);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col pt-16">
      <div className="w-full h-1 bg-surface-container-highest">
        <div 
          className="h-full bg-[#18324A] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-12 max-w-screen-md mx-auto w-full">
        <div className="mb-12">
          <span className="font-label text-sm uppercase tracking-widest text-[#9DB7AE] font-bold mb-4 block">{t("Step")} {currentStep + 1} of {quizData.questions.length}</span>
          <h1 className="font-headline text-3xl md:text-5xl font-bold text-[#18324A] mb-4 leading-tight">{question.title}</h1>
          <p className="font-body text-lg text-[#2F6672]">{question.description}</p>
        </div>

        <div className="space-y-4 mb-16">
          {question.options.map(option => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 flex items-start gap-4 ${
                answers[question.id] === option.id 
                  ? "border-[#E8A48C] bg-[#E8A48C]/5 shadow-sm" 
                  : "border-[#9DB7AE]/30 bg-surface hover:border-[#18324A]/50 hover:bg-[#EEF4F3]"
              }`}
            >
              <div className={`mt-1 flex items-center justify-center w-6 h-6 rounded-full border-2 transition-colors ${
                answers[question.id] === option.id ? "border-[#E8A48C]" : "border-[#9DB7AE]"
              }`}>
                {answers[question.id] === option.id && <div className="w-3 h-3 bg-[#E8A48C] rounded-full" />}
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-[#18324A] mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#9DB7AE] text-xl">{option.icon}</span>
                  {option.label}
                </h3>
                <p className="font-body text-[#2F6672] text-sm">{option.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-[#9DB7AE]/20">
          <button 
            onClick={() => setCurrentStep(s => Math.max(0, s - 1))}
            className={`font-label text-sm uppercase tracking-wider font-bold text-[#2F6672] hover:text-[#18324A] transition-colors ${currentStep === 0 ? "invisible" : ""}`}
          >{t("Back")}</button>
          
          <button 
            onClick={handleNext}
            disabled={!answers[question.id]}
            className={`px-8 py-4 rounded-full font-label text-sm uppercase tracking-widest font-bold transition-all duration-300 ${
              answers[question.id] 
                ? "bg-[#18324A] text-white shadow-lg hover:-translate-y-0.5" 
                : "bg-[#EEF4F3] text-[#9DB7AE] cursor-not-allowed"
            }`}
          >
            {isLastQuestion ? "See My Results" : "Next Step"}
          </button>
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md rounded-3xl p-8 border-none bg-white">
          <DialogHeader>
            <div className="w-16 h-16 bg-[#EEF4F3] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <DialogTitle className="text-3xl font-bold text-center text-[#18324A]">{t("Analysis Complete")}</DialogTitle>
            <DialogDescription className="text-center text-[#2F6672] text-base mt-4">
              We've processed your responses. Based on your biomechanics, we found the perfect insole for you.
            </DialogDescription>
          </DialogHeader>
          
          <div className="bg-[#EEF4F3] p-4 rounded-2xl my-6 border border-[#9DB7AE]/20">
             <h4 className="font-semibold text-[#18324A] mb-2">{t("Your Profile")} Snippet</h4>
             <ul className="space-y-1 text-sm text-[#2F6672]">
               {Object.entries(answers).map(([qKey, aVal]) => (
                 <li key={qKey}><strong className="capitalize">{qKey}:</strong> {aVal}</li>
               ))}
             </ul>
          </div>

          <DialogFooter className="sm:justify-center">
            <Button onClick={() => window.location.href = "/account"} className="w-full bg-[#E8A48C] hover:bg-[#E8A48C]/90 text-white rounded-full py-6 text-lg tracking-wide">{t("View Your Dashboard")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}
