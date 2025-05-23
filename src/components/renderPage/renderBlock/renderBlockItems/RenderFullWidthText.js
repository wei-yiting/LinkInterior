import React from 'react';
import uuid from 'react-uuid';
import { FullWidthParagraph } from '../../../../styles/layoutStyledComponents/BlockLayout';

export default function RenderFullWidthText({ blockContent }) {
  const renderedText = blockContent.text.split('\\n').map((item) => {
    return (
      <span key={uuid()}>
        {item}
        <br />
      </span>
    );
  });

  return <FullWidthParagraph>{renderedText}</FullWidthParagraph>;
}
