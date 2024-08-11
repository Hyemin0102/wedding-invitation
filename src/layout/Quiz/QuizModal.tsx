import React, {useRef} from 'react';
import {ModalOverlay, ModalContent, QuizStartBtn} from './QuizStyle.tsx';

interface QuizModalProps {
  step: number;
  quizType: number;
  onNext: (correct: boolean) => void;
  onReset: () => void;
  onStart: () => void;
  score: number;
}

const QuizModal: React.FC<QuizModalProps> = ({  step, quizType, onStart, onNext, onReset, score }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: React.MouseEvent) => {
    if (overlayRef.current && overlayRef.current === event.target && onReset) {
      onReset();
    }
  };
  const questions: { [key: number]: { question: string, answer: boolean }[] } = {
    1: [
      {question: '퀴즈시작', answer: true},
      { question: '신랑의 가장 좋아하는 음식은 피자이다. O', answer: true }, //step 1
      { question: '신랑은 30세 미만이다. X', answer: false },//step 2
      { question: '신랑은 대학교에서 공학을 전공했다. O', answer: true }, //step 3
    ],
    2: [
      {question: '퀴즈시작', answer: true},
      { question: '신부의 출신지는 서울이다.O', answer: true },
      { question: '신부는 양말을 항상 흰색으로만 신는다. X', answer: false },
      { question: '신부는 해양학을 전공했다.X', answer: false },
    ],
  };

  const handleAnswer = (userAnswer: boolean) => {
    const correctAnswer = questions[quizType][step].answer;
    if (userAnswer === correctAnswer) {
      onNext(true);  // 정답
    } else {
      onNext(false); // 오답
    }
  };

  //Todo step 0 일 때는 시작하는 함수 -> 호출하면 step 1
  const handleStart = () => {
    onStart();
  }


  return (
    <ModalOverlay ref={overlayRef} onClick={handleClickOutside}>
      <ModalContent>
        {/*step이 0은 퀴즈 시작 눌렀을 때*/}
        {step === 0 &&
          <QuizStartBtn onClick={handleStart}>우정테스트 시작!</QuizStartBtn>}
        {/*step이 0이 아니고 3까지는 질문*/}
        {step  !==0 && step <= 3 && (
          <>
            <div>Q{step}</div>
            <div>{questions[quizType][step]?.question}</div>
            {step > 0 && (
              <div>
                <button onClick={() => handleAnswer(true)}>O</button>
                <button onClick={() => handleAnswer(false)}>X</button>
              </div>
            )}

          </>
        )}
        {/*step 4 부터는 결과 나옴*/}
        {step >= 4 && (
          <>
            <div>결과</div>
            <div>맞춘 개수: {score}</div>
            <button onClick={onReset}>완료</button>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default QuizModal;
