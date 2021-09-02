import React from 'react';
import styled from 'styled-components/macro';

import templateSwitchVideo from '../../../utils/videos/templateSwitch.mp4';
import { color } from '../../../styles/theme';

const FeatureContainer = styled.section`
  display: flex;
  width: 100%;
  margin: 100px 0 150px;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    margin: 50px 0;
  }
`;

const FeatureIntroWrapper = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 900px) {
    align-items: center;
    width: 100%;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 2rem;
  letter-spacing: 0.1em;
  color: ${color.gray[600]};
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const FeatureContent = styled.p`
  font-size: 1rem;
  letter-spacing: 0.1em;
  color: ${color.gray[900]};
  font-weight: 400;
  line-height: 1.75em;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const VideoContainer = styled.div`
  width: 50%;
  height: fit-content;
  border-radius: 8px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.075);
  border: 1px solid ${color.gray[50]};
  @media (max-width: 900px) {
    width: 95%;
    margin: 30px auto;
    order: 2;
  }
`;

export default function TemplateSwitchFeature() {
  return (
    <FeatureContainer>
      <VideoContainer>
        <video src={templateSwitchVideo} loop autoPlay muted playsInline>
          <track default kind="captions" srcLang="zh-tw" />
        </video>
      </VideoContainer>
      <FeatureIntroWrapper>
        <FeatureTitle>樣板切換</FeatureTitle>
        <FeatureContent>
          隨時切換樣板
          <br />
          挑選適合你的圖文配置
        </FeatureContent>
      </FeatureIntroWrapper>
    </FeatureContainer>
  );
}
