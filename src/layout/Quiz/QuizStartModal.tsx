import React from 'react';

import { ModalOverlay, ModalContent } from './QuizStyle.tsx';

interface QuizStartModalProps {
  onNext: () => void;
}

const QuizStartModal: React.FC<QuizStartModalProps> = ({ onNext }) => {
  return (
    <div css={ModalOverlay}>
      <div css={ModalContent}>
        <h2>퀴즈 시작하기</h2>
        <button onClick={onNext}>시작</button>
      </div>
    </div>
  );
};

export default QuizStartModal;
