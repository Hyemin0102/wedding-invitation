import React, {useRef, useState, useEffect} from 'react';
import {
  ModalOverlay,
  ModalContent,
  BtnWrapper,
  QuizContentWrapper,
  QuizStartBtn,
  QuizStep,
  QuizContent,
  TrueBtn,
  FalseBtn,
  QuizStartWrapper,
  QuizResultWrapper,
  Score,
  ResultImg,
  ResultMemo,
  RerultBtn
} from './QuizStyle.tsx';
import Toast from "@/layout/Quiz/Toast.tsx";
//import Toast from "@/layout/Quiz/Toast.tsx";


interface QuizModalProps {
  step: number;
  quizType: number;
  onNext: (correct: boolean) => void;
  onReset: () => void;
  onStart: () => void;
  onBack: () => void;
  score: number;
}

const QuizModal: React.FC<QuizModalProps> = ({  step, quizType, onStart, onNext, onReset,onBack, score }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<null | boolean>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const overlayRef = useRef<HTMLDivElement>(null);
  const name = quizType === 1 ? '광래' : '혜민';

  let resultText = '';
  let resultImageSrc = '';
  let resultMemoText: React.ReactNode = '';
  let resultBtnText = '다시 풀기';

  if (score === 0) {
    resultText = '우정도 0%';
    resultImageSrc = '/score_0.png';
    resultMemoText = (
      <>
        <div>{name}님과 더 친해져볼까요?</div>
        <div>재도전하고 합격 부적 받아보세요!🍀</div>
      </>
    );
  } else if (score === 1) {
    resultText = '우정도 30%';
    resultImageSrc = '/score_1.png';
    resultMemoText = (
      <>
        <div>{name}님에 대해 조금 알고 계시네요!</div>
        <div>재도전하고 합격 부적 받아볼까요~?🍀</div>
      </>
    );
  } else if (score === 2) {
    resultText = '우정도 70%';
    resultImageSrc = '/score_2.png';
    resultMemoText = (
      <>
        <div>{name}님에 대해 거의 알고 계시네요!</div>
        <div>재도전하고 합격 부적 받아볼까요~?🍀</div>
      </>
    );
  } else if (score === 3) {
    resultText = '우정도 100%';
    resultImageSrc = '/score_3.png';
    resultMemoText = (
      <>
        <div>{name}님과 우정도 100% 입니다!</div>
        <div>{name}님의 카카오톡으로 합격 부적을<br></br>
          캡쳐해서 보내주시면 소정의 상품을 드려요🩷</div>
      </>
    );
    resultBtnText='완료';
  }

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
      setToastMessage('정답이에요😘');
      setIsCorrect(true);  // 정답
    } else {
      setToastMessage('정답이 아니에요🥲');
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
      }, 1000);

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
          <QuizStartWrapper>
            <div>
              <div>우정테스트하고</div>
              <div>합격 부적 받아가세요!</div>
              <div>인증 시 소정의 상품을 드려요</div>
            </div>
            <div>
              <img style={{width: '90%'}} src="/test_start.png" alt="테스트 시작"/>
            </div>
            <div>
              <QuizStartBtn onClick={handleStart}>테스트 시작</QuizStartBtn>
            </div>
          </QuizStartWrapper>}
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
          <QuizResultWrapper>
            <Score>{resultText}</Score>
            <ResultImg>
              <img src={resultImageSrc} alt={score.toString()}/>
            </ResultImg>
            <ResultMemo>
              {resultMemoText}
            </ResultMemo>
            <RerultBtn onClick={score >= 0 && score <= 2 ? onBack : onReset}>
              {resultBtnText}
            {score !== 3 && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
              </svg>
            )}
            </RerultBtn>
          </QuizResultWrapper>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default QuizModal;
