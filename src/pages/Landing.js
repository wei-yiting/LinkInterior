import React from 'react';
import styled from 'styled-components/macro';

import LandingHeader from '../components/landingPage/LandingHeader';
import LandingBanner from '../components/landingPage/LandingBanner';
import EditPreviewToggleFeature from '../components/landingPage/features/EditPreviewToggleFeature';
import templateSwitchVideo from '../utils/video/templateSwitch.mp4';
import publishVideo from '../utils/video/publish.mp4';
import extendedBlockVideo from '../utils/video/extendedBlock.mp4';

import { color } from '../styles/theme';

const MainContainer = styled.main`
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
`;

const VideoContainer = styled.div`
  width: ${({ width }) => width || '500px'};
  height: fit-content;
  border-radius: 8px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.075);
  margin: 15px;
  border: 1px solid ${color.gray[50]};
`;

export default function Landing() {
  return (
    <>
      <LandingHeader />
      <LandingBanner />
      <MainContainer>
        <EditPreviewToggleFeature />
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
      </MainContainer>
    </>
  );
}
