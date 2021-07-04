import React from 'react';

import BlockContainer from '../../styles/BlockContainer';
import SideText from './blockItems/SideText';
import SideImage from './blockItems/SideImage';

const PreviewBlockC = ({ blockContent, randomBgIdx }) => {
  return (
    <BlockContainer>
      <SideImage imageUrl={blockContent.imageUrl} randomBgIdx={randomBgIdx} />
      <SideText text={blockContent.text} />
    </BlockContainer>
  );
};

export default PreviewBlockC;
