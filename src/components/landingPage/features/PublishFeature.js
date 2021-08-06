import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../../../styles/sharedStyledComponents/buttons';
import publishVideo from '../../../utils/video/publish.mp4';
import { color } from '../../../styles/theme';

const FeatureContainer = styled.section`
  display: flex;
  width: 100%;
  margin: 50px 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FeatureIntroWrapper = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.75rem;
  letter-spacing: 0.1em;
  color: ${color.main[500]};
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const FeatureContent = styled.p`
  font-size: 1rem;
  letter-spacing: 0.1em;
  color: ${color.gray[900]};
  font-weight: 400;
  line-height: 1.75em;
  text-align: center;
`;

const VideoContainer = styled.div`
  width: 50%;
  height: fit-content;
  border-radius: 8px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.075);
  border: 1px solid ${color.gray[50]};
`;

export default function PublishFeature() {
  return (
    <FeatureContainer>
      <VideoContainer>
        <video src={publishVideo} loop autoPlay muted>
          <track default kind="captions" srcLang="zh-tw" />
        </video>
      </VideoContainer>
      <FeatureIntroWrapper>
        <FeatureTitle>一鍵發佈</FeatureTitle>
        <FeatureContent>完成編輯後，點擊發佈你的網頁立即建置完成</FeatureContent>
      </FeatureIntroWrapper>
      <Link to="/sign-up">
        <OutlineButton width="100%">馬上註冊，開始建立我的網頁</OutlineButton>
      </Link>
    </FeatureContainer>
  );
}
