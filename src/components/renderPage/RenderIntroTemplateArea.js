import React, { useContext } from 'react';

import { IntroRenderContext } from '../../contexts/IntroRenderContext';
import RenderIntroTemplate1 from './RenderIntroTemplate1';
import RenderIntroTemplate2 from './RenderIntroTemplate2';

export default function RenderIntroTemplateArea() {
  const { templateType } = useContext(IntroRenderContext);

  return (
    <>
      {templateType === 1 ? <RenderIntroTemplate1 /> : null}
      {templateType === 2 ? <RenderIntroTemplate2 /> : null}
    </>
  );
}
