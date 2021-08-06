import React from 'react';
import styled from 'styled-components/macro';

import LandingHeader from '../components/landingPage/LandingHeader';
import LandingBanner from '../components/landingPage/LandingBanner';
import templateSwitchVideo from '../utils/video/templateSwitch.mp4';
import publishVideo from '../utils/video/publish.mp4';
import extendedBlockVideo from '../utils/video/extendedBlock.mp4';
import editPreviewVideo from '../utils/video/editPreview.mp4';

import { color } from '../styles/theme';

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
      <LandingHeader />
      <LandingBanner />
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
