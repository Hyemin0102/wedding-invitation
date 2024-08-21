import { useEffect, useRef, useState } from 'react';
import {NavermapsProvider} from 'react-naver-maps';
import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import Account from '@/layout/Account/Account.tsx';
import Container from '@/layout/Container.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';
import Callendar from "@/layout/Callendar/Callendar.tsx";
import Quiz from "@/layout/Quiz/Quiz.tsx";



function App() {
  const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);


  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { offsetTop } = galleryRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
    <NavermapsProvider ncpClientId={ncpClientId}>
      <Container>
        <Wrapper>
          <Main />
        </Wrapper>
        <Wrapper>
          <Invitation />
        </Wrapper>
        <Wrapper>
          <Callendar/>
        </Wrapper>
        <Wrapper ref={galleryRef}>
          <Heading1><img style={{width:'140px'}} src="/gallery.png" alt="갤러리"/></Heading1>
          <GalleryWrap />
        </Wrapper>
        <Wrapper>
          <div><img style={{width:'60px'}} src="/flowers.png" alt="축하"/></div>
          <Account />
        </Wrapper>
        <Wrapper>
          <Heading1 style={{paddingRight:'8px'}}><img src="/location.png" alt="지도"/></Heading1>
          <Location />
        </Wrapper>
        <Wrapper style={{fontFamily:'Ownglyph_UNZ-Rg'}}>
          <div style={{width: '80%'}}><img src="/test_title.png" alt="우정테스트"/></div>
          <Quiz/>
        </Wrapper>
        <div style={{marginTop: "-60px", fontSize: 18}}>
          <img style={{width: "130px", marginLeft: "20px"}} src="/footer.png" alt="마지막"/>
          <div style={{color: '#000000'}}>여기까지 봐주셔서 감사합니다!</div>
          <div style={{color: '#000000'}}>잘 살겠습니다 🥰</div>
        </div>
        <FloatingBar isVisible={isVisible}/>
      </Container>
    </NavermapsProvider>
  );
}

export default App;
