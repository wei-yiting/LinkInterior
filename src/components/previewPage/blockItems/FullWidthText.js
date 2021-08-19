import React from 'react';
import { FullWidthParagraph } from '../../../styles/layoutStyledComponents/blockLayout';

export default function FullWidthText({ blockContent }) {
  return <FullWidthParagraph>{blockContent.text}</FullWidthParagraph>;
}
