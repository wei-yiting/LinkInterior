import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  white-space: pre-wrap;
  text-align: center;
`;

const FullWidthText = ({ blockContent }) => {
  return <Paragraph>{blockContent.text}</Paragraph>;
};

export default FullWidthText;
