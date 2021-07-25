import React from 'react';

import { BlockContainer } from '../../styles/layoutStyledComponents/BlockLayout';
import FullWidthText from './blockItems/FullWidthText';

export default function PreviewBlockA({ blockContent }) {
  return (
    <BlockContainer>
      <FullWidthText blockContent={blockContent} />
    </BlockContainer>
  );
}
