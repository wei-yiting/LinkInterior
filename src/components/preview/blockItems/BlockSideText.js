import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  white-space: pre-wrap;
  text-align: center;
  width: 40%;
`;

const BlockSideText = ({ block }) => {
  return <Paragraph>{block.text}</Paragraph>;
};

export default BlockSideText;
