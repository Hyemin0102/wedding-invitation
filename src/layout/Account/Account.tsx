import styled from '@emotion/styled';
import data from 'data.json';
import AccountWrap from './AccountWrap.tsx';
import Accordion from '@/components/Accordion.tsx';

const Account = () => {
  const { hostInfo } = data;
  return (
    <HostInfoWrapper>
      {hostInfo.map((host) => {
        return (
          <Accordion title={<img src={host.imageUrl} alt={host.host} />} key={host.host}>
            {host.accountInfo.map((account) => {
              return (
                <AccountWrap
                  key={account.name}
                  name={account.name}
                  relation={account.relation}
                  bank={account.bank}
                  account={account.account}
                  phone={account.phone}
                />
              );
            })}
          </Accordion>
        );
      })}
    </HostInfoWrapper>
  );
};

export default Account;

const HostInfoWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  padding: 20px;
`;
