import React, { useContext } from 'react';
import styled from 'styled-components/macro';

import { IntroRenderContext } from '../../contexts/IntroRenderContext';
import RenderIntroTemplate1 from './renderTemplate/RenderIntroTemplate1';
import RenderIntroTemplate2 from './renderTemplate/RenderIntroTemplate2';

const TemplateWrapper = styled.div`
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export default function RenderIntroTemplateArea() {
  const { templateType } = useContext(IntroRenderContext);

  return (
    <TemplateWrapper>
      {templateType === 1 ? <RenderIntroTemplate1 /> : null}
      {templateType === 2 ? <RenderIntroTemplate2 /> : null}
    </TemplateWrapper>
  );
}
