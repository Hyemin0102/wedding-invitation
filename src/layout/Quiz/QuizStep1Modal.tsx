import React from 'react';

import { ModalOverlay, ModalContent } from './QuizStyle.tsx';

interface QuizStep1ModalProps {
  onNext: (correct: boolean) => void;
}

const QuizStep1Modal: React.FC<QuizStep1ModalProps> = ({ onNext }) => {
  const handleAnswer = (correct: boolean) => {
    onNext(correct);
  };

  return (
    <div css={ModalOverlay}>
      <div css={ModalContent}>
        <h2>1번 퀴즈</h2>
        <button onClick={() => handleAnswer(true)}>정답</button>
        <button onClick={() => handleAnswer(false)}>오답</button>
      </div>
    </div>
  );
};

export default QuizStep1Modal;
