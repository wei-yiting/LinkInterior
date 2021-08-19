import React from 'react';
import { SideTextWrapper, SideParagraph } from '../../../styles/layoutStyledComponents/blockLayout';

export default function SideText({ text }) {
  return (
    <SideTextWrapper>
      <SideParagraph>{text}</SideParagraph>
    </SideTextWrapper>
  );
}
