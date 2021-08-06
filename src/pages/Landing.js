import React from 'react';
import styled from 'styled-components/macro';

import LandingHeader from '../components/landingPage/LandingHeader';
import LandingBanner from '../components/landingPage/LandingBanner';
import EditPreviewToggleFeature from '../components/landingPage/features/EditPreviewToggleFeature';
import TemplateSwitchFeature from '../components/landingPage/features/TemplateSwitchFeature';
import ExtendedBlocksFeature from '../components/landingPage/features/ExtendedBlocksFeature';
import PublishFeature from '../components/landingPage/features/PublishFeature';
import { color } from '../styles/theme';

const MainContainer = styled.main`
  margin: 0 auto 200px;
  width: 90%;
  max-width: 1200px;
`;

const DivLine = styled.div`
  border-top: 4px solid ${color.main[100]};
  width: ${({ width }) => width || '20%'};
  margin: 0 auto;
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
        <EditPreviewToggleFeature />
        <DivLine />
        <TemplateSwitchFeature />
        <DivLine width="10%" />
        <ExtendedBlocksFeature />
        <VerticalLine />
        <PublishFeature />
      </MainContainer>
    </>
  );
}
