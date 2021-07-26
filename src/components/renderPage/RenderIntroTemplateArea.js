import React, { useContext } from 'react';

import { IntroRenderContext } from '../../contexts/IntroRenderContext';
import RenderIntroTemplate1 from './renderTemplate/RenderIntroTemplate1';
import RenderIntroTemplate2 from './renderTemplate/RenderIntroTemplate2';

export default function RenderIntroTemplateArea() {
  const { templateType } = useContext(IntroRenderContext);

  return (
    <div style={{ marginTop: '40px' }}>
      {templateType === 1 ? <RenderIntroTemplate1 /> : null}
      {templateType === 2 ? <RenderIntroTemplate2 /> : null}
    </div>
  );
}
