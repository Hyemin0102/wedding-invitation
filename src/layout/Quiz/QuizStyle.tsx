import styled from "@emotion/styled";

export const QuizStyle = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  min-height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QuizItemWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  min-height: 200px;
  width: 80%;
  margin: auto;
  
  > div {
    margin-top: 15px;
    width: 100%;
    border: 1px solid;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const QuizStartBtn = styled.button`
  background: none;
  width: 100%;
  height: 200px;
  border: none;
  font-size: 36px;
  font-family: 'Ownglyph_UNZ-Rg', sans-serif;
`
