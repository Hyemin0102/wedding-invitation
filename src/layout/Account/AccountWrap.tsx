import styled from '@emotion/styled';
import Copy from '@/assets/icons/copy.svg?react';


interface IAccountProps {
  name: string;
  relation: string;
  bank: string;
  account: string;
  phone: string
}
const AccountWrap = ({
  name,
  relation,
  bank,
  account,
  phone
}: IAccountProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(account).then(
      () => {
        alert('계좌번호가 복사되었습니다.😉😉');
      },
      () => {
        alert('계좌번호 복사에 실패했습니다.🥲🥲');
      },
    );
  };

  return (
    <Wrapper>
      <Info>
        <div>
          <Relation>{relation}</Relation>
          <Name>{name}</Name>
        </div>
        <div>
          <SendSMS>
            <a href={`sms:${phone}`}>
              <img src="/message.png" alt="문자보내기" />
            </a>
          </SendSMS>
          <Contact>
            <a href={`tel:${phone}`}>
              <img src="/call.png" alt="전화하기" />
            </a>
          </Contact>
        </div>
      </Info>
      <Details>
        <AccountInfo>
          {bank} {account}
        </AccountInfo>
        <CopyButton onClick={handleCopy}>
          <Copy fill="#dfdfdf" />
        </CopyButton>
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #dfdfdf;
  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 5px 0;
  font-size: 20px;
  justify-content: space-between;
  > div:nth-of-type(1) {
    display:flex;
    align-items: center;
    gap: 4px;
  }
  > div:nth-of-type(2) {
    display:flex;
    align-items: center;
    gap: 4px;
  }
`;
const Relation = styled.span`
  color: #6b6b6b;
`;
const Name = styled.span`
  font-size: 22px;
`;

const Contact = styled.div`
  width: 16px;
  padding: 0 4px;
`;

const SendSMS = styled.div`
  width: 20px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccountInfo = styled.div`  font-size: 18px;`;
const CopyButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.1em 0.2em;
  cursor: pointer;
  gap: 2px;
  outline: none;
  box-shadow: none;
  background: white;
`;



export default AccountWrap;
