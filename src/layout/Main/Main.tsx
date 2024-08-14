import styled from '@emotion/styled';
// import data from 'data.json';
import mainImg from '@/assets/images/2-1.png';
//import mainImg from '../../assets/images/2-1.png';


const Main = () => {
  // const { greeting } = data;
  return (
    <div style={{position:"relative"}}>
      <MainImg src={mainImg} />
      {/*<RibbonImg><img src="/yellow-ribbon.png" alt="노란리본"/></RibbonImg>*/}
      <SubTitleImg>
        <div>
          <img src="/name.png" alt="이름"/>
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
  //width: 90%;
  //max-width: 450px;
  padding-top: 20px;
`;

// const RibbonImg = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   padding: 0 20px;
// `

// const MainTitle = styled.p`
//   //font-family: ONE-Mobile-POP, serif;
//   font-family: 'Cafe24Meongi-W-v1.0', sans-serif;
//   font-size: 2rem;
//   color: #2F2120;
//   line-height: 120%;
//   white-space: pre-line;
// `;

// const SubTitle = styled.p`
//   font-size: 1.1rem;
//   color: #2F2120;
//   line-height: 140%;
//   white-space: pre-line;
// `;

const SubTitleImg = styled.div`
  //margin: 20px 0 0 15px;
  //padding-right: 20px;
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
