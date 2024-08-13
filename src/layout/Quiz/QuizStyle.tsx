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
  background: #ffffff;
  padding: 20px 20px 30px;
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
  
    cursor: pointer;
    &:nth-child(1) {
      width: 80%;
      transform: rotate(6deg);
      //animation: shakeRight 1.5s infinite ease-in-out;
    }
    &:nth-child(2) {
      width: 100%;
      transform: rotate(-3deg);
      margin-top: 35px;
      //animation: shakeLeft 1.5s infinite ease-in-out;
    }
    @keyframes shakeLeft {
      0% {
        transform: rotate(-3deg);
      }
      50% {
        transform: rotate(3deg);
      }
      100% {
        transform: rotate(-3deg);
      }
    }

    @keyframes shakeRight {
      0% {
        transform: rotate(3deg);
      }
      50% {
        transform: rotate(-3deg);
      }
      100% {
        transform: rotate(3deg);
      }
    }
  }
`;

export const QuizStartBtn = styled.button`
  background: none;
  width: 100%;
  min-height: 200px;
  border: none;
  font-size: 36px;
  font-family: 'Ownglyph_UNZ-Rg', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #222;
`
export const QuizContentWrapper = styled.div`
  height: inherit;
  width: 100%;
  position: relative;
`;
export const QuizStep = styled.div`
  text-align: right;
  font-size: 18px;
  
  >span {
    color: #9D9D9D;
    font-size: 16px;
  }
`

export const QuizContent = styled.div`
  font-size: 28px;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const BtnWrapper = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
  >button {
    width: 90px;
    height: 90px;
    border: none;
    border-radius: 10px;
    font-family: Ownglyph_UNZ-Rg, sans-serif;
  }
`;
export const TrueBtn = styled.button`
  background-color: #E8F3FF;
  >div:nth-of-type(1){
    color: #3182F6;
    font-size: 28px;
  }

  >div:nth-of-type(2){
    font-size: 24px;
    color: #222;
  }
`;
export const FalseBtn = styled.button`
  background-color: #FFEEEE;
  >div:nth-of-type(1){
    color: #EF4452;
    font-size: 28px;
  }

  >div:nth-of-type(2){
    color: #222;
    font-size: 24px;
  }
`;

