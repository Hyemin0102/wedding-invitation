import styled from '@emotion/styled';
// import {PointTitle} from "@/components/Text.tsx";
// import data from 'data.json';
// import { Caption, PointTitle } from '@/components/Text.tsx';
// import { ILocationInfo } from '@/types/data.ts';

const Address = () => {
  //const { locationInfo } = data;
  return (
    <>
    <WayWrapper>
      <WayList>
        <WayIcon>
          <div>  <img src="/wayIcon_metro.png" alt="전철"/></div>
          <div><img src="/metro_text.png" alt="전철"/></div>
        </WayIcon>
        <WayText><img style={{width:' 95%'}} src="/wayText_metro.png" alt="전철 오는 길"/></WayText>
      </WayList>
      <WayList style={{paddingBottom:"20px"}}>
        <WayIcon>
          <div><img src="/wayIcon_bus.png" alt="버스"/></div>
          <div><img style={{width:"27px"}} src="/bus_text.png" alt="버스"/></div>
          </WayIcon>
        <WayText>
          <div style={{display:"flex", gap:"8px", flexDirection:"column"}}>
            <img src="/wayText_bus_1.png" alt="버스 오는 길"/>
            <img style={{width:' 74%'}} src="/wayText_bus_2.png" alt="버스 오는 길"/>
          </div>
        </WayText>
      </WayList>
      <WayList style={{paddingBottom:"20px"}}>
        <WayIcon>
          <div><img src="/wayIcon_car.png" alt="차"/></div>
          <div><img src="/car_text.png" alt="차"/></div>
          </WayIcon>
        <WayText>
          <div style={{display:"flex", gap:"8px", flexDirection:"column"}}>
            <img style={{width:' 89%'}} src="/wayText_car_1.png" alt="차 오는 길"/>
            <img style={{width:' 77%'}}  src="/wayText_car_2.png" alt="차 오는 길"/>
          </div>
        </WayText>
      </WayList>
    </WayWrapper>
    </>
  );
};

export default Address;

const WayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  gap: 20px;
`;

const WayList = styled.div`
  display: flex;
  gap: 30px;
  padding: 10px;
  margin: 0 10px;
  border-bottom: 1px solid #D0D0D0;
  align-items: center;
`;

const WayIcon = styled.div`
  width: 20%;
  img {
    width: 34px;
  }
`;

const WayText = styled.div`
  width: 80%;
  img {
    //width: 80%;
    display: block
  }
  
`;
