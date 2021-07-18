import React from 'react';
import styled from 'styled-components/macro';

const Paragraph = styled.p`
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.5em;
`;

const FullWidthText = ({ blockContent }) => {
  return <Paragraph>{blockContent.text}</Paragraph>;
};

export default FullWidthText;
