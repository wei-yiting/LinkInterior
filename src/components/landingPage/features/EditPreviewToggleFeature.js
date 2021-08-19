import React from 'react';
import styled from 'styled-components/macro';

import editPreviewVideo from '../../../utils/video/editPreview.mp4';
import { color } from '../../../styles/theme';

const FeatureContainer = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 150px;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    margin: 4rem 0 50px;
  }
`;

const FeatureIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 900px) {
    align-items: center;
    width: 100%;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 2.5rem;
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
  width: 75%;
  height: fit-content;
  border-radius: 8px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.075);
  border: 1px solid ${color.gray[50]};
  @media (max-width: 900px) {
    width: 95%;
    margin: 30px auto;
  }
`;

export default function EditPreviewToggleFeature() {
  return (
    <FeatureContainer>
      <FeatureIntroWrapper>
        <FeatureTitle>即時預覽</FeatureTitle>
        <FeatureContent>
          編輯網頁過程
          <br />
          可隨時切換至預覽模式
          <br />
          觀看網頁發佈的樣子
        </FeatureContent>
      </FeatureIntroWrapper>
      <VideoContainer width="800px">
        <video src={editPreviewVideo} loop autoPlay muted playsInline>
          <track default kind="captions" srcLang="zh-tw" />
        </video>
      </VideoContainer>
    </FeatureContainer>
  );
}
