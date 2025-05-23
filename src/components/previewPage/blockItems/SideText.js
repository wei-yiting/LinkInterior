import React from 'react';
import { SideTextWrapper, SideParagraph } from '../../../styles/layoutStyledComponents/BlockLayout';

export default function SideText({ text }) {
  return (
    <SideTextWrapper>
      <SideParagraph>{text}</SideParagraph>
    </SideTextWrapper>
  );
}
