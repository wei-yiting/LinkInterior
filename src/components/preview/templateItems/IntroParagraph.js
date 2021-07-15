import React from 'react';
import styled from 'styled-components/macro';

import { SectionWrapper } from '../../../styles/layout/TemplateLayout';
import { Header1 } from '../../../styles/sharedStyledComponents/headers';

const Paragraph = styled.p`
  white-space: pre-wrap;
  margin: 0.75rem 1.5rem;
`;

const IntroParagraph = ({ title, intro }) => {
  return (
    <SectionWrapper>
      <Header1>{title}</Header1>
      <Paragraph className="text-lg">{intro}</Paragraph>
    </SectionWrapper>
  );
};

export default IntroParagraph;
