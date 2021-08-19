import React from 'react';

import { BlockContainer } from '../../../styles/layoutStyledComponents/blockLayout';
import RenderSideText from './renderBlockItems/RenderSideText';
import RenderSideImage from './renderBlockItems/RenderSideImage';

export default function RenderBlockB({ blockContent }) {
  return (
    <BlockContainer>
      <RenderSideText text={blockContent.text} />
      <RenderSideImage imageUrl={blockContent.image} />
    </BlockContainer>
  );
}
