import React, { useState } from 'react';
import styled from "@emotion/styled";
import QuizModal from "@/layout/Quiz/QuizModal.tsx";
import {QuizItemWrapper} from "@/layout/Quiz/QuizStyle.tsx";
//import QuizResultModal from "@/layout/Quiz/QuizResultModal.tsx";


const Quiz: React.FC = () => {

  const [step, setStep] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizType, setQuizType] = useState<number | null>(null);

  const startQuiz = (quizType: number) => {
    setQuizType(quizType);
    setStep(0);
  };

  const handleNextStep = (correct: boolean) => {
    if (correct) {
      setScore(score + 1);
    }
    if (step! < 4) {
      setStep(step! + 1);
    } else {
      setStep(5);
    }
  };

  const handleResetQuiz = () => {
    setStep(null);
    setScore(0);
    setQuizType(null);
  };

  return (
    <QuizStyle>
      <div>⭐️ 우정 테스트 ⭐️</div>
      <QuizItemWrapper>
        <div onClick={() => startQuiz(1)}>신랑 퀴즈풀기</div>
        <div onClick={() => startQuiz(2)}>신부 퀴즈풀기</div>
      </QuizItemWrapper>
      {step !== null  && quizType !== null && (
        <QuizModal step={step} quizType={quizType} score={score} onNext={handleNextStep} onReset={handleResetQuiz} />
      )}
    </QuizStyle>
  );
};

export default Quiz;

const QuizStyle = styled.div`
  font-size: 2rem;
`
