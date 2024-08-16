import React, { useState } from 'react';
import styled from "@emotion/styled";
import QuizModal from "@/layout/Quiz/QuizModal.tsx";
import {QuizItemWrapper} from "@/layout/Quiz/QuizStyle.tsx";
//import QuizResultModal from "@/layout/Quiz/QuizResultModal.tsx";


const Quiz: React.FC = () => {
  const [step, setStep] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizType, setQuizType] = useState<number | null>(null);

  // const startQuiz = (quizType: number) => {
  //   //퀴즈타입 1이면 신랑, 2면 신부, step 0으로 세팅
  //   setQuizType(quizType);
  //   setStep(0);
  // };

  const handleNextStep = (correct: boolean) => {

    if (correct) { //정답 맞으면 score에 1더함
      setScore(score + 1);
    }
    if (step! < 4) { //step 이 0-시작, 1~3까지는 step 하나씩 더함
      setStep(step!+ 1);
    } else { //step 4 부터는 step을 4로 업데이트
      setStep(4);
    }
  };

  //시작 클릭하면 step 1
  const handleStart = () => {
    setStep(1)
  }

  //완료 텍스트 클릭 시
  const handleResetQuiz = () => {
    setStep(null);
    setScore(0);
    setQuizType(null);
  };

  const handleBackStart = () => {
    setStep(1);
    setScore(0);
  }

  return (
    <QuizStyle>
      <QuizItemWrapper>
        <img src="/child.png" alt="어린이사진"/>
        {/*<div onClick={() => startQuiz(2)}>*/}
        {/*  <img src="/test_hm.png" alt="애기혜민"/>*/}
        {/*</div>*/}
        {/*<div onClick={() => startQuiz(1)}>*/}
        {/*  <img src="/test_gr.png" alt="애기광래"/>*/}
        {/*</div>*/}
      </QuizItemWrapper>
      {/*step 과 퀴즈타입이 널값 아니면 퀴즈모달 나옴*/}
      {step !== null  && quizType !== null && (
        <QuizModal step={step} quizType={quizType} score={score} onStart={handleStart} onNext={handleNextStep} onReset={handleResetQuiz} onBack={handleBackStart} />
      )}

        {/*<QuizModal step={1} quizType={2} score={score} onStart={handleStart} onNext={handleNextStep} onReset={handleResetQuiz} />*/}

    </QuizStyle>
  );
};

export default Quiz;

const QuizStyle = styled.div`
  font-size: 2rem;
  width: 100%;
  margin-top: 20px;
`
