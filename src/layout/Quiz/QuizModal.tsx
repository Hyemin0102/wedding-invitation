import React, {useRef, useState, useEffect} from 'react';
import {ModalOverlay, ModalContent, BtnWrapper, QuizContentWrapper, QuizStartBtn, QuizStep,QuizContent,TrueBtn,FalseBtn} from './QuizStyle.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Toast from "@/layout/Quiz/Toast.tsx";
//import Toast from "@/layout/Quiz/Toast.tsx";


interface QuizModalProps {
  step: number;
  quizType: number;
  onNext: (correct: boolean) => void;
  onReset: () => void;
  onStart: () => void;
  score: number;
}

const QuizModal: React.FC<QuizModalProps> = ({  step, quizType, onStart, onNext, onReset, score }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<null | boolean>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const overlayRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: React.MouseEvent) => {
    if (overlayRef.current && overlayRef.current === event.target && onReset) {
      onReset();
    }
  };
  const questions: { [key: number]: { question: string, answer: boolean }[] } = {
    1: [
      {question: '퀴즈시작', answer: true},
      { question: '신랑의 가장 좋아하는 음식은 피자이다.', answer: true }, //step 1
      { question: '신랑은 30세 미만이다.', answer: false },//step 2
      { question: '신랑은 대학교에서 공학을 전공했다.', answer: true }, //step 3
    ],
    2: [
      {question: '퀴즈시작', answer: true},
      { question: '혜민이의 생일은 1월 2일이에요.', answer: true },
      { question: '신부는 양말을 항상 흰색으로만 신는다. X', answer: false },
      { question: '신부는 해양학을 전공했다.X', answer: false },
    ],
  };

  const handleAnswer = (userAnswer: boolean) => {
    setSelectedAnswer(userAnswer);
    const correctAnswer = questions[quizType][step].answer;
    if (userAnswer === correctAnswer) {
      setToastMessage('정답입니다!');
      setIsCorrect(true);  // 정답
    } else {
      setToastMessage('오답입니다!');
      setIsCorrect(false);  // 정답
    }
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);  // 토스트 메시지 숨기기
        setSelectedAnswer(null); // 스타일 초기화
        if (isCorrect !== null) {
          onNext(isCorrect);  // 다음 퀴즈로 넘어가기
        }
      }, 2000); // 2초 후에 사라지게 설정

      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  //Todo step 0 일 때는 시작하는 함수 -> 호출하면 step 1
  const handleStart = () => {
    onStart();
  }


  return (
    <ModalOverlay ref={overlayRef} onClick={handleClickOutside}>
      <ModalContent>
        {/*step이 0은 퀴즈 시작 눌렀을 때*/}
        {step === 0 &&
          <QuizStartBtn onClick={handleStart}>
            <span>우정테스트 시작</span>
            <span><FontAwesomeIcon icon={faArrowRight} size={"xs"}/></span>
          </QuizStartBtn>}
        {/*step이 0이 아니고 3까지는 질문*/}
        {step  !==0 && step <= 3 && (
          <QuizContentWrapper>
            <QuizStep>0{step}<span> /03</span></QuizStep>
            <QuizContent>{questions[quizType][step]?.question}</QuizContent>
            {step > 0 && (
              <BtnWrapper>
                <TrueBtn
                  onClick={() => handleAnswer(true)}
                  style={{
                    backgroundColor: selectedAnswer === true ? '#B9D0EB' : '#E8F3FF',
                    border: selectedAnswer === true ? '1px solid #3182F6' : '',
                  }}
                ><div>O</div> <div>맞아요</div></TrueBtn>
                <FalseBtn onClick={() => handleAnswer(false)}><div>X</div> <div>아니에요</div></FalseBtn>
              </BtnWrapper>
            )}
            {toastMessage && (
              <Toast>{toastMessage}</Toast> // 토스트 컴포넌트 표시
            )}

          </QuizContentWrapper>
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
