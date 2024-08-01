import React, {useRef} from 'react';
import {ModalOverlay, QuizStyle} from './QuizStyle.tsx';

interface QuizResultModalProps {
  score: number;
  onReset: () => void;
}

const QuizResultModal: React.FC<QuizResultModalProps> = ({ score, onReset }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (overlayRef.current && overlayRef.current === event.target && onReset) {
      onReset();
    }
  };
  return (
    <QuizStyle>
      <ModalOverlay ref={overlayRef} onClick={handleClickOutside} >
        <h2>결과</h2>
        <p>맞춘 개수: {score}</p>
        <button onClick={onReset}>완료</button>
      </ModalOverlay>
    </QuizStyle>
  );
};

export default QuizResultModal;
