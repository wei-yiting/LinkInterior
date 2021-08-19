import React, { useContext } from 'react';

import { IntroRenderContext } from '../../../../contexts/IntroRenderContext';
import {
  SectionWrapper,
  IntroParagraphText,
} from '../../../../styles/layoutStyledComponents/templateLayout';
import { Heading1 } from '../../../../styles/sharedStyledComponents/headings';

export default function RenderIntroParagraph({ title }) {
  const { intro } = useContext(IntroRenderContext);
  return (
    <SectionWrapper>
      <Heading1>{title}</Heading1>
      <IntroParagraphText className="text-lg">{intro}</IntroParagraphText>
    </SectionWrapper>
  );
}
