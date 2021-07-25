import React from 'react';

import { BlockContainer } from '../../styles/layoutStyledComponents/BlockLayout';
import SideText from './blockItems/SideText';
import SideImage from './blockItems/SideImage';

const PreviewBlockB = ({ blockContent, randomBgIdx }) => {
  return (
    <BlockContainer>
      <SideText text={blockContent.text} />
      <SideImage imageUrl={blockContent.localImageUrl} randomBgIdx={randomBgIdx} />
    </BlockContainer>
  );
};

export default PreviewBlockB;
