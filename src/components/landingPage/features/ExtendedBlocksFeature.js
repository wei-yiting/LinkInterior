import React from 'react';
import styled from 'styled-components/macro';

import extendedBlockVideo from '../../../utils/video/extendedBlock.mp4';
import { color } from '../../../styles/theme';

const FeatureContainer = styled.section`
  display: flex;
  width: 100%;
  margin: 100px 0;
  justify-content: space-between;
`;

const FeatureIntroWrapper = styled.div`
  display: flex;
  width: 35%;
  margin-left: auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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
`;

const VideoContainer = styled.div`
  width: 50%;
  height: fit-content;
  border-radius: 8px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.075);
  border: 1px solid ${color.gray[50]};
`;

export default function ExtendedFeature() {
  return (
    <FeatureContainer>
      <FeatureIntroWrapper>
        <FeatureTitle>擴充網頁內容</FeatureTitle>
        <FeatureContent>
          除了樣板的基本資訊以外
          <br />
          有更多想告訴大家的嗎？
          <br />
          透過新增橫幅圖塊
          <br />
          為你的網頁增加更多內容
        </FeatureContent>
      </FeatureIntroWrapper>
      <VideoContainer>
        <video src={extendedBlockVideo} loop autoPlay muted>
          <track default kind="captions" srcLang="zh-tw" />
        </video>
      </VideoContainer>
    </FeatureContainer>
  );
}
