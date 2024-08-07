import styled from '@emotion/styled';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import {AddressCopyIcon, Caption, PointTitle} from '@/components/Text.tsx';

const Location = () => {
  const handleCopyAddress = () => {
    let address = '경기도 안양시 동안구 시민대로 159번길 25'
    navigator.clipboard.writeText(address).then(
      () => {
        alert('주소가 복사되었습니다.😉😉');
      },
      () => {
        alert('주소 복사에 실패했습니다.🥲🥲');
      },
    );
  }

  return (
    <LocationWrapper>
      <PointTitle><img src="/location_title.png" alt="파티오벨라"/></PointTitle>
      <Caption>
        <div><img src="/location_address.png" alt="주소"/></div>
        <AddressCopyIcon onClick={handleCopyAddress}><img src="/copy_icon.png" alt="주소복사"/></AddressCopyIcon>
        </Caption>
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
