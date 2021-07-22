import React from 'react';
import styled from 'styled-components/macro';

const Paragraph = styled.p`
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.5em;
  margin: 50px auto;
`;

export default function FullWidthText({ blockContent }) {
  return <Paragraph>{blockContent.text}</Paragraph>;
}
