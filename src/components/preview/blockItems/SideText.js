import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
`;

const Text = styled.p`
  white-space: pre-wrap;
  text-align: center;
`;

const SideText = ({ text }) => {
  return (
    <TextWrapper>
      <Text>{text}</Text>
    </TextWrapper>
  );
};

export default SideText;
