import styled from '@emotion/styled';
//import data from 'data.json';
import Host from '../Contact/Host.tsx';
// import RoundButton from '@/components/RoundButton.tsx';
//import { Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  //const { greeting } = data;
  return (
    <InvitationWrapper>
      <div style={{marginBottom: '10px'}}>
        <img style={{width: '80%'}} src='/aa.png' alt="리본" />
        <img style={{width: '95%'}} src='/invitation_4.png' alt="초대문구" />
      </div>
      <Host />
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
