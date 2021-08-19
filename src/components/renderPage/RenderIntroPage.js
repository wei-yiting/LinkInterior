import React, { useContext } from 'react';

import { IntroRenderContext } from '../../contexts/IntroRenderContext';
import RenderIntroTemplateArea from './RenderIntroTemplateArea';
import RenderBlocksArea from './RenderBlocksArea';
import PageLoading from '../shared/PageLoding';
import PageError from '../shared/PageError';
import { IntroPageMainContainer } from '../../styles/layoutStyledComponents/generalLayout';

export default function RenderIntroPage() {
  const { error, loading, data } = useContext(IntroRenderContext);

  return (
    <>
      {loading && <PageLoading />}
      {error && <PageError />}
      {data && (
        <IntroPageMainContainer>
          <RenderIntroTemplateArea />
          <RenderBlocksArea />
        </IntroPageMainContainer>
      )}
    </>
  );
}
