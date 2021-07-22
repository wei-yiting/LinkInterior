import React, { useContext } from 'react';

import { IntroRenderContext } from '../../contexts/IntroRenderContext';
import RenderIntroTemplateArea from './RenderIntroTemplateArea';
import BlocksArea from './RenderBlocksArea';
import PageLoading from '../shared/PageLoding';
import PageError from '../shared/PageError';
import { IntroPageMainContainer } from '../../styles/layoutStyledComponents/GeneralLayout';

export default function RenderIntroPage() {
  const { error, loading } = useContext(IntroRenderContext);

  return (
    <>
      <IntroPageMainContainer>
        {loading && <PageLoading />}
        {error && <PageError />}
        {!loading && !error && (
          <>
            <RenderIntroTemplateArea />
            <BlocksArea />
          </>
        )}
      </IntroPageMainContainer>
    </>
  );
}
