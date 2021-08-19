import React from 'react';
import uuid from 'react-uuid';

import {
  SideTextWrapper,
  SideParagraph,
} from '../../../../styles/layoutStyledComponents/blockLayout';

export default function RenderSideText({ text }) {
  const renderedText = text.split('\\n').map((item) => {
    return (
      <span key={uuid()}>
        {item}
        <br />
      </span>
    );
  });

  return (
    <SideTextWrapper>
      <SideParagraph>{renderedText}</SideParagraph>
    </SideTextWrapper>
  );
}
