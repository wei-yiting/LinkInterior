import React from 'react';
import { useParams } from 'react-router-dom';

import IntroPageContextProvider from '../contexts/IntroRenderContext';
import RenderIntroPage from '../components/renderPage/RenderIntroPage';

export default function ServiceIntro() {
  const { pageId } = useParams();

  return (
    <IntroPageContextProvider pageId={pageId}>
      <RenderIntroPage />
    </IntroPageContextProvider>
  );
}
