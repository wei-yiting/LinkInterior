import React from 'react';
import { useParams } from 'react-router-dom';

import IntroPageContextProvider from '../contexts/IntroRenderContext';
import RenderIntroPage from '../components/renderPage/RenderIntroPage';
import { MainWrapper } from '../styles/layoutStyledComponents/GeneralLayout';

export default function ServiceIntro() {
  const { pageId } = useParams();

  return (
    <MainWrapper>
      <IntroPageContextProvider pageId={pageId}>
        <RenderIntroPage />
      </IntroPageContextProvider>
    </MainWrapper>
  );
}
