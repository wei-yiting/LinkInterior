import React from 'react';
import { FullWidthParagraph } from '../../../styles/layoutStyledComponents/BlockLayout';

export default function FullWidthText({ blockContent }) {
  return <FullWidthParagraph>{blockContent.text}</FullWidthParagraph>;
}
