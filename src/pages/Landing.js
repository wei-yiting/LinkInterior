import React from 'react';
import styled from 'styled-components/macro';

import LandingHeader from '../components/landingPage/LandingHeader';
import LandingBanner from '../components/landingPage/LandingBanner';
import EditPreviewToggleFeature from '../components/landingPage/features/EditPreviewToggleFeature';
import TemplateSwitchFeature from '../components/landingPage/features/TemplateSwitchFeature';
import ExtendedBlocksFeature from '../components/landingPage/features/ExtendedBlocksFeature';
import PublishFeature from '../components/landingPage/features/PublishFeature';
import { color } from '../styles/theme';
import { MobileShowWrapper } from '../styles/layoutStyledComponents/responsiveLayout';

const MainContainer = styled.main`
  margin: 0 auto 200px;
  width: 90%;
  max-width: 1200px;
  @media (max-width: 900px) {
    margin: 0 auto 100px;
  }
`;

const DivLine = styled.div`
  border-top: 4px solid ${color.main[100]};
  width: ${({ width }) => width || '20%'};
  min-width: ${({ minWidth }) => minWidth || '200px'};
  margin: 0 auto;
  @media (max-width: 900px) {
    border-top: 2px solid ${color.main[100]};
  }
`;

const VerticalLine = styled.div`
  border-left: 1px solid ${color.main[100]};
  height: 100px;
  width: 0;
  margin: 0 auto;
`;

export default function Landing() {
  return (
    <>
      <LandingHeader />
      <LandingBanner />
      <MainContainer>
        <MobileShowWrapper>
          <DivLine minWidth="250px" />
        </MobileShowWrapper>
        <EditPreviewToggleFeature />
        <DivLine />
        <TemplateSwitchFeature />
        <DivLine width="10%" minWidth="100px" />
        <ExtendedBlocksFeature />
        <VerticalLine />
        <PublishFeature />
      </MainContainer>
    </>
  );
}
