import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { DarkerButton, OutlineButton } from '../../styles/sharedStyledComponents/buttons';
import { color } from '../../styles/theme';

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8rem;
  @media (max-width: 900px) {
    margin-bottom: 5rem;
  }
`;

const Slogan = styled.h2`
  color: ${color.main[600]};
  font-weight: 600;
  text-align: center;
  font-size: 4rem;
  letter-spacing: 0.1em;
  line-height: 1.5em;
  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  margin: 1rem auto 2rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5em;
`;

const ButtonsArea = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
  justify-content: space-between;
`;

const MobileHiddenWrapper = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

export default function LandingBanner() {
  return (
    <Hero>
      <Slogan>
        輕鬆建立
        <br />
        自己的專屬網頁
      </Slogan>
      <Subtitle>
        專為室內設計施工業者打造的網頁製作平台
        <br />
        按下發佈，讓大家透過網頁認識你
      </Subtitle>
      <ButtonsArea>
        <MobileHiddenWrapper>
          <Link to="/compile-trial">
            <DarkerButton>先不註冊，體驗建立自己的專頁</DarkerButton>
          </Link>
          <Link to="/services">
            <OutlineButton>來去總覽，看其他業者建立的專頁</OutlineButton>
          </Link>
        </MobileHiddenWrapper>
      </ButtonsArea>
    </Hero>
  );
}
