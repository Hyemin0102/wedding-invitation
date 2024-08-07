import React, {useRef} from 'react';
import {ModalOverlay, ModalContent, QuizStartBtn} from './QuizStyle.tsx';

interface QuizModalProps {
  step: number;
  quizType: number;
  onNext: (correct: boolean) => void;
  onReset: () => void;
  score: number;
}

const QuizModal: React.FC<QuizModalProps> = ({  step, quizType, onNext, onReset, score }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  console.log('step', step);
  const handleClickOutside = (event: React.MouseEvent) => {
    if (overlayRef.current && overlayRef.current === event.target && onReset) {
      onReset();
    }
  };

  //Todo 퀴즈 질문, 답변, 정답 형식으로 변경
  const questions: { [key: number]: { question: string, answer: boolean }[] } = {
    1: [
      { question: '신랑의 가장 좋아하는 음식은 피자이다.', answer: true },
      { question: '신랑은 30세 미만이다.', answer: false },
      { question: '신랑은 대학교에서 공학을 전공했다.', answer: true },
    ],
    2: [
      { question: '신부의 출신지는 서울이다.', answer: true },
      { question: '신부는 양말을 항상 흰색으로만 신는다.', answer: false },
      { question: '신부는 해양학을 전공했다.', answer: false },
    ],
  };

  const handleAnswer = (userAnswer: boolean) => {
    const correctAnswer = questions[quizType][step].answer;
    console.log('correctAnswer',correctAnswer);
    if (userAnswer === correctAnswer) {
      onNext(true);  // 정답
    } else {
      onNext(false); // 오답
    }
  };


  return (
    <ModalOverlay ref={overlayRef} onClick={handleClickOutside}>
      <ModalContent>
        {step === 0 &&
          <QuizStartBtn onClick={() => handleAnswer(true)}>퀴즈 시작!</QuizStartBtn>}
        {step  !==0 && step <= 3 && (
          <>
            <h2>{questions[quizType][step -1 ].question}</h2>
            {step > 0 && (
              <div>
                <button onClick={() => handleAnswer(true)}>O</button>
                <button onClick={() => handleAnswer(false)}>X</button>
              </div>
            )}

          </>
        )}
        {step > 3 && (
          <>
            <h2>결과</h2>
            <p>맞춘 개수: {score}</p>
            <button onClick={onReset}>완료</button>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default QuizModal;
