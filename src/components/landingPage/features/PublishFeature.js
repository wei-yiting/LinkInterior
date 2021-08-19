import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../../../styles/sharedStyledComponents/buttons';
import publishVideo from '../../../utils/video/publish.mp4';
import { color } from '../../../styles/theme';
import {
  MobileShowWrapper,
  MobileHiddenWrapper,
} from '../../../styles/layoutStyledComponents/responsiveLayout';

const FeatureContainer = styled.section`
  display: flex;
  width: 100%;
  margin: 50px 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    margin: 20px 0;
  }
`;

const FeatureIntroWrapper = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 1.5rem;
  @media (max-width: 900px) {
    align-items: center;
    width: 100%;
    margin: 1rem 0;
  }
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
  @media (max-width: 900px) {
    text-align: center;
    width: 80%;
    margin: 0 auto;
    span {
      display: block;
    }
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
    margin: 10px auto;
  }
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
        <FeatureContent>
          完成編輯後，<span>點擊發佈你的網頁立即建置完成</span>
        </FeatureContent>
      </FeatureIntroWrapper>
      <MobileHiddenWrapper>
        <Link to="/sign-up">
          <OutlineButton width="100%">馬上註冊，開始建立我的網頁</OutlineButton>
        </Link>
      </MobileHiddenWrapper>
      <MobileShowWrapper>
        <Link to="/services">
          <OutlineButton width="100%">來去看其他人建立的網頁</OutlineButton>
        </Link>
      </MobileShowWrapper>
    </FeatureContainer>
  );
}
