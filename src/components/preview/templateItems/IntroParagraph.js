import React from 'react';
import styled from 'styled-components';

import { SectionWrapper } from '../../../styles/layout/TemplateLayout';

const Paragraph = styled.p`
  white-space: pre-wrap;
`;

const IntroParagraph = ({ title, intro }) => {
  return (
    <SectionWrapper>
      <h3>{title}</h3>
      <Paragraph>{intro}</Paragraph>
    </SectionWrapper>
  );
};

export default IntroParagraph;
