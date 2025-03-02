import { useState } from 'react';
import styled from "@emotion/styled";
import QuizModal from "@/layout/Quiz/QuizModal.tsx";
import {QuizItemWrapper} from "@/layout/Quiz/QuizStyle.tsx";
//import QuizResultModal from "@/layout/Quiz/QuizResultModal.tsx";


const Quiz: React.FC = () => {
  const [step, setStep] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setStep(0);
  };

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
    //setQuizType(null);
  };

  const handleBackStart = () => {
    setStep(1);
    setScore(0);
  }

  return (
    <QuizStyle>
      <QuizItemWrapper onClick={startQuiz}>
        <img style={{
          width: '90%',
          marginRight: 24}} src="/child.png" alt="어린이사진"/>
      </QuizItemWrapper>
      {/*step 널값 아니면 퀴즈모달 나옴*/}
      {step !== null && (
        <QuizModal step={step} score={score} onStart={handleStart} onNext={handleNextStep} onReset={handleResetQuiz} onBack={handleBackStart} />
      )}
    </QuizStyle>
  );
};

export default Quiz;

const QuizStyle = styled.div`
  font-size: 2rem;
  width: 100%;
  margin-top: 20px;
`
