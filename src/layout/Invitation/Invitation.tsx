import styled from '@emotion/styled';
//import data from 'data.json';
import Host from '../Contact/Host.tsx';
// import RoundButton from '@/components/RoundButton.tsx';
import { Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  //const { greeting } = data;
  return (
    <InvitationWrapper>
      {/*<img src='/invitation.png' alt="초대문구" />*/}
      <Paragraph>
        <div>
          곁에서 매일 재워주고 싶은 사람을 만났습니다.
        </div>
        <div>
          하루의 끝에서 매일 일상을 나누고 싶은 사람을 만났습니다.
        </div>
        <div style={{marginTop: "16px"}}>
          시간과 함께 낡아지는 것이 아니라 깊어지는 사랑을 평생 약속하려 합니다.
        </div>
        <div>귀한 걸음 함께해 주시면 행복한 마음으로 간직하겠습니다.</div>
      </Paragraph>
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
