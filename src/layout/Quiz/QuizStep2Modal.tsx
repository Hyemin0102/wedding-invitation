import React from 'react';

import { ModalOverlay, ModalContent } from './QuizStyle.tsx';

interface QuizStep2ModalProps {
  onNext: (correct: boolean) => void;
}

const QuizStep2Modal: React.FC<QuizStep2ModalProps> = ({ onNext }) => {
  const handleAnswer = (correct: boolean) => {
    onNext(correct);
  };

  return (
    <div css={ModalOverlay}>
      <div css={ModalContent}>
        <h2>2번 퀴즈</h2>
        <button onClick={() => handleAnswer(true)}>정답</button>
        <button onClick={() => handleAnswer(false)}>오답</button>
      </div>
    </div>
  );
};

export default QuizStep2Modal;
