import React from 'react';

import { BlockContainer } from '../../../styles/layoutStyledComponents/blockLayout';
import RenderSideText from './renderBlockItems/RenderSideText';
import RenderSideImage from './renderBlockItems/RenderSideImage';

export default function RenderBlockC({ blockContent }) {
  return (
    <BlockContainer>
      <RenderSideImage imageUrl={blockContent.image} />
      <RenderSideText text={blockContent.text} />
    </BlockContainer>
  );
}
