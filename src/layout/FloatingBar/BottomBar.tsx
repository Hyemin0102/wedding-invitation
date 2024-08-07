// import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Share from '@/assets/icons/share.svg?react';
import Upward from '@/assets/icons/upward.svg?react';
import Button from '@/components/Button.tsx';

const BottomBar = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        alert('주소가 복사되었습니다.😉😉');
      },
      () => {
        alert('주소 복사에 실패했습니다.🥲🥲');
      },
    );
  };

  const handleScroll = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };



  return (
    <BottomNav>
      <Button onClick={handleCopy}>
        <Share fill="#e88ca6" />
        공유
      </Button>
      <Button onClick={handleScroll}>
        <Upward fill="#e88ca6" />
        위로
      </Button>
    </BottomNav>
  );
};

export default BottomBar;

const BottomNav = styled.nav`
  width: fit-content;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
