import React from 'react';
import styled from 'styled-components/macro';

import { color } from '../../../styles/theme';

const IntroText = styled.p`
  line-height: 1.5rem;
  color: ${color.gray[700]};
`;

export default function IntroPartialText({ data }) {
  const textWithoutLineBreak = data.intro.replace('\n', ' ');
  const partialText = `${textWithoutLineBreak.slice(0, 35)} ...`;
  return <IntroText>{partialText}</IntroText>;
}
