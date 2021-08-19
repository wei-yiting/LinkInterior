import React, { useContext } from 'react';

import { IntroCompileContext } from '../../../contexts/IntroCompileContext';
import {
  SectionWrapper,
  IntroParagraphText,
} from '../../../styles/layoutStyledComponents/templateLayout';
import { Heading1 } from '../../../styles/sharedStyledComponents/headings';

export default function IntroParagraph({ title }) {
  const { intro } = useContext(IntroCompileContext);
  return (
    <SectionWrapper>
      <Heading1>{title}</Heading1>
      <IntroParagraphText className="text-lg">{intro}</IntroParagraphText>
    </SectionWrapper>
  );
}
