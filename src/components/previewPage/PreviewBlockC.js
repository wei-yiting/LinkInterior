import React from 'react';

import { BlockContainer } from '../../styles/layoutStyledComponents/BlockLayout';
import SideText from './blockItems/SideText';
import SideImage from './blockItems/SideImage';

export default function PreviewBlockC({ blockContent, randomBgIdx }) {
  return (
    <BlockContainer>
      <SideImage imageUrl={blockContent.imageUrl} randomBgIdx={randomBgIdx} />
      <SideText text={blockContent.text} />
    </BlockContainer>
  );
}
