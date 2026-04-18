"use client";

import { useState } from "react";
import quizData from "@/data/quiz.json";

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  const question = quizData.questions[currentStep];
  const progress = ((currentStep) / quizData.questions.length) * 100;
  const isLastQuestion = currentStep === quizData.questions.length - 1;

  const handleSelect = (optionId: string) => {
    setAnswers({ ...answers, [question.id]: optionId });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // In a real app, calculate results and push to results page
      alert("Quiz Complete! Your answers: " + JSON.stringify(answers, null, 2));
    } else {
      setCurrentStep(s => s + 1);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col pt-16">
      <div className="w-full h-1 bg-surface-container-highest">
        <div 
          className="h-full bg-secondary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-12 max-w-screen-md mx-auto w-full">
        <div className="mb-12">
          <span className="font-label text-sm uppercase tracking-widest text-secondary font-bold mb-4 block">Step {currentStep + 1} of {quizData.questions.length}</span>
          <h1 className="font-headline text-3xl md:text-5xl font-bold text-on-surface mb-4 leading-tight">{question.title}</h1>
          <p className="font-body text-lg text-on-surface-variant">{question.description}</p>
        </div>

        <div className="space-y-4 mb-16">
          {question.options.map(option => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 flex items-start gap-4 ${
                answers[question.id] === option.id 
                  ? "border-primary bg-primary/5 shadow-sm" 
                  : "border-outline-variant/30 bg-surface hover:border-primary/50 hover:bg-surface-container-low"
              }`}
            >
              <div className={`mt-1 flex items-center justify-center w-6 h-6 rounded-full border-2 ${
                answers[question.id] === option.id ? "border-primary" : "border-outline-variant"
              }`}>
                {answers[question.id] === option.id && <div className="w-3 h-3 bg-primary rounded-full" />}
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-xl">{option.icon}</span>
                  {option.label}
                </h3>
                <p className="font-body text-on-surface-variant text-sm">{option.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-outline-variant/20">
          <button 
            onClick={() => setCurrentStep(s => Math.max(0, s - 1))}
            className={`font-label text-sm uppercase tracking-wider font-bold text-on-surface-variant hover:text-primary transition-colors ${currentStep === 0 ? "invisible" : ""}`}
          >
            Back
          </button>
          
          <button 
            onClick={handleNext}
            disabled={!answers[question.id]}
            className={`px-8 py-4 rounded-full font-label text-sm uppercase tracking-widest font-bold transition-all duration-300 ${
              answers[question.id] 
                ? "bg-primary text-on-primary shadow-[0_10px_30px_rgba(0,29,52,0.15)] hover:-translate-y-0.5" 
                : "bg-surface-container-highest text-outline cursor-not-allowed"
            }`}
          >
            {isLastQuestion ? "See My Results" : "Next Step"}
          </button>
        </div>
      </div>
    </div>
  );
}
