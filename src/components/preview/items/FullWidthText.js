import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  white-space: pre-wrap;
  text-align: center;
`;

const FullWidthText = ({ block }) => {
  return <Paragraph>{block.text}</Paragraph>;
};

export default FullWidthText;
