import React from 'react';
import styled from 'styled-components/macro';

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100%;
`;

const Text = styled.p`
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.5em;
`;

export default function SideText({ text }) {
  return (
    <TextWrapper>
      <Text>{text}</Text>
    </TextWrapper>
  );
}
