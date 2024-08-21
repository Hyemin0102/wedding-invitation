import styled from '@emotion/styled';
import mainImg from '@/assets/images/main.png';


const Main = () => {

  return (
    <div style={{position:"relative"}}>
      <MainImg src={mainImg} />
      {/*<RibbonImg><img src="/yellow-ribbon.png" alt="노란리본"/></RibbonImg>*/}
      <SubTitleImg>
        <div>
          <img src="/main_name.png" alt="이름"/>
        </div>
        <div>
          <img src="/date.png" alt="날짜"/>
          <img src="/date_location.png" alt="장소"/>
        </div>
      </SubTitleImg>
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  padding-top: 20px;
`;

const SubTitleImg = styled.div`
  margin-top: 20px;
  img{
    width: 90%;
  }
  
  >div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    width: 85%;
    margin: auto;
  }
`
