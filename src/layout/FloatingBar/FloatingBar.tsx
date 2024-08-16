// import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
// import { increment, onValue, ref, update } from 'firebase/database';
// import { realtimeDb } from 'firebase.ts';
import JSConfetti from 'js-confetti';
//import Heart from '@/assets/icons/heart_plus.svg?react';
import Share from '@/assets/icons/share.svg?react';
import Upward from '@/assets/icons/upward.svg?react';
import Button from '@/components/Button.tsx';

const FloatingBar = ({ isVisible }: { isVisible: boolean }) => {
  const { emojis } = data;

  // TODO: count 기능 사용 원할시 firebase realtime db 연결!
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  // TODO: realtime db 에 likes 객체 추가.
  //   const dbRef = ref(realtimeDb, 'likes');
  //   onValue(dbRef, (snapshot) => {
  //     setCount(Number(snapshot.val()));
  //   });
  // }, []);

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

  const handleCount = () => {
    void jsConfetti.addConfetti({ emojis });

    // 버튼 클릭시 likes 수 증가
    // const dbRef = ref(realtimeDb);
    // void update(dbRef, {
    //   likes: increment(1),
    // });
  };

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const jsConfetti = new JSConfetti();


  return (
    <Nav>
        {isVisible && (
          <>
            <div style={{width: '50px'}} onClick={handleCopy}>
              <img src="/share_btn.png" alt="공유"/>
            </div>
            <div style={{width: '50px'}} onClick={handleScroll}>
              <img src="/top_btn.png" alt="위로"/>
            </div>
            {/*<Button onClick={handleCopy}>*/}
            {/*  <Share fill="#8c8c8c"/>*/}
            {/*  공유*/}
            {/*</Button>*/}
            {/*<Button onClick={handleScroll}>*/}
            {/*<Upward fill="#8c8c8c"/>*/}
            {/*위로*/}
            {/*</Button>*/}
          </>
        )}
      <div style={{width: '50px'}} onClick={handleCount}>
        <img src="/like_btn.png" alt="하트"/>
      </div>
      {/*<Button onClick={handleCount}>*/}
      {/*  <Heart fill="#F64B4B" />*/}
      {/*  /!*{count || ''}*!/*/}
      {/*</Button>*/}
    </Nav>
  );
};

export default FloatingBar;

const Nav = styled.nav`
  //min-width: 280px;
  width: fit-content;
  position: fixed;
  bottom: 30px;
  right: 20px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: flex;
`;
