import React from 'react';

import { BlockContainer } from '../../styles/layoutStyledComponents/blockLayout';
import SideText from './blockItems/SideText';
import SideImage from './blockItems/SideImage';

export default function PreviewBlockC({ blockContent, randomBgIdx }) {
  return (
    <BlockContainer>
      <SideImage imageUrl={blockContent.localImageUrl} randomBgIdx={randomBgIdx} />
      <SideText text={blockContent.text} />
    </BlockContainer>
  );
}
