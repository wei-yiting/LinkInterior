import React from 'react';
import styled from 'styled-components/macro';

import templateSwitchVideo from '../utils/video/templateSwitch.mp4';
import publishVideo from '../utils/video/publish.mp4';
import extendedBlockVideo from '../utils/video/extendedBlock.mp4';
import editPreviewVideo from '../utils/video/editPreview.mp4';
import TextLogo from '../utils/logo/TextLogo';
import Logo from '../utils/logo/Logo';
import { DarkerButton } from '../styles/sharedStyledComponents/buttons';
import { color } from '../styles/theme';

const LogoArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 65px;
  margin: 30px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slogan = styled.h2`
  color: ${color.main[600]};
  font-weight: 600;
  text-align: center;
  font-size: 4rem;
  letter-spacing: 0.1em;
  line-height: 1.5em;
`;

const Subtitle = styled.p`
  margin: 1rem auto 2rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5em;
`;

const VideoContainer = styled.div`
  width: ${({ width }) => width || '500px'};
  height: fit-content;
  border-radius: 8px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.075);
  margin: 50px;
  border: 1px solid ${color.gray[50]};
`;

export default function Landing() {
  return (
    <>
      <LogoArea>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <TextLogo fontSize="2rem" textAlign="center">
          LinkInterior
        </TextLogo>
      </LogoArea>
      <Header>
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
        <DarkerButton>免註冊，直接體驗</DarkerButton>
      </Header>
      <VideoContainer width="800px">
        <video src={editPreviewVideo} loop autoPlay muted>
          <track default kind="captions" srcLang="zh-tw" />
        </video>
      </VideoContainer>
      <div style={{ display: 'flex' }}>
        <VideoContainer>
          <video src={templateSwitchVideo} loop autoPlay muted>
            <track default kind="captions" srcLang="zh-tw" />
          </video>
        </VideoContainer>
        <VideoContainer>
          <video src={extendedBlockVideo} loop autoPlay muted>
            <track default kind="captions" srcLang="zh-tw" />
          </video>
        </VideoContainer>
        <VideoContainer>
          <video src={publishVideo} loop autoPlay muted>
            <track default kind="captions" srcLang="zh-tw" />
          </video>
        </VideoContainer>
      </div>
    </>
  );
}
