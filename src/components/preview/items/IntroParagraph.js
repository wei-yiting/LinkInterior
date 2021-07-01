import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  white-space: pre-wrap;
`;

const IntroParagraph = ({ title, intro }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Paragraph>{intro}</Paragraph>
    </div>
  );
};

export default IntroParagraph;
