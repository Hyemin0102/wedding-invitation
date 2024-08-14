import styled from '@emotion/styled';

const Container = styled.div`
  //border: 30px solid transparent; /* 테두리의 초기 값 설정 */
  ////border-image-source: url('/background.png'); /* 이미지 경로 설정 */
  //border-image-slice: 30% 49%; /* 이미지의 크기 설정 */
  //border-image-width: 280px; /* 테두리 이미지의 너비 설정 */
  //background-color: #ffffff;

  background-color: #FBF8EF;
  padding: 0 0 120px 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 200px;
  
  @media screen and (min-width: 500px) {
      width: 500px;
  }
`;
export default Container;
