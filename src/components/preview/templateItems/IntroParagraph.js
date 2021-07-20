import React, { useContext } from 'react';
import styled from 'styled-components/macro';

import { IntroCompileContext } from '../../../contexts/IntroCompileContext';
import { SectionWrapper } from '../../../styles/layout/TemplateLayout';
import { Heading1 } from '../../../styles/sharedStyledComponents/headings';

const Paragraph = styled.p`
  white-space: pre-wrap;
  margin: 0.75rem 1.5rem;
`;

export default function IntroParagraph({ title }) {
  const { intro } = useContext(IntroCompileContext);
  return (
    <SectionWrapper>
      <Heading1>{title}</Heading1>
      <Paragraph className="text-lg">{intro}</Paragraph>
    </SectionWrapper>
  );
}
