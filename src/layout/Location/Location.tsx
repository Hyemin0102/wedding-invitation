import styled from '@emotion/styled';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import {Caption, PointTitle} from '@/components/Text.tsx';

const Location = () => {

  return (
    <LocationWrapper>
      <PointTitle><img src="/location_title.png" alt="파티오벨라"/></PointTitle>
      <Caption><img src="/location_address.png" alt="주소"/></Caption>
      <Map />
      <MapButtons />
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
