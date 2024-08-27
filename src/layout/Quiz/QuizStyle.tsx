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
  z-index: 999;
`;

//모달창 전체
export const ModalContent = styled.div`
  background: #ffffff;
  padding: 30px 20px 30px;
  border-radius: 8px;
  width: 300px;
  min-height: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QuizItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  //min-height: 400px;
  width: 90%;
  margin: auto;
  
  > div {
    cursor: pointer;
  }
`;

export const QuizStartWrapper = styled.div`
  background: none;
  width: 100%;
  min-height: 400px;
  border: none;
  font-size: 28px;
  font-family: 'Ownglyph_UNZ-Rg', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 30px 0;
  gap: 8px;
  color: #222;
  
`;

export const QuizStartBtn = styled.button`
  border: none;
  background-color: #393533;
  color: #ffffff;
  width: 180px;
  line-height: 50px;
  border-radius: 100px;
  font-family: 'Ownglyph_UNZ-Rg', sans-serif;
  font-size: 24px;
  align-self: flex-end;
`
export const QuizContentWrapper = styled.div`
  min-height: 400px;
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
  font-size: 32px;
  margin-top: 40px;
  margin-bottom: 40px;
  word-break: keep-all;
`

export const BtnWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  >button {
    width: 130px;
    height: 130px;
    border: none;
    border-radius: 10px;
    font-family: Ownglyph_UNZ-Rg, sans-serif;
  }
`;
export const TrueBtn = styled.button`
  background-color: #E8F3FF;
  >div:nth-of-type(1){
    color: #3182F6;
    font-size: 63px;
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
    font-size: 63px;
  }

  >div:nth-of-type(2){
    color: #222;
    font-size: 24px;
  }
`;

export const QuizResultWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Score = styled.div`
  background-color: #E8F3FF;
  color: #3182F6;
  border-radius: 100px;
  width: 120px;
  line-height: 40px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
export const ResultImg = styled.div`
  width: 120px;
`;
export const ResultMemo = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;
export const RerultBtn = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  > svg {
    width: 10px;
  }
`;

