import React, { useContext } from 'react';

import { IntroRenderContext } from '../../contexts/IntroRenderContext';
import { Heading2 } from '../../styles/sharedStyledComponents/headings';
import { BlocksAreaContainer } from '../../styles/layoutStyledComponents/BlockLayout';
import RenderBlockA from './renderBlock/RenderBlockA';
import RenderBlockB from './renderBlock/RenderBlockB';
import RenderBlockC from './renderBlock/RenderBlockC';

export default function RenderBlocksArea() {
  const { companyName, blockList } = useContext(IntroRenderContext);

  const renderedBlocks = blockList.map((blockContent, index) => {
    let RenderBlock;
    if (blockContent.type === 'A') {
      RenderBlock = RenderBlockA;
    } else if (blockContent.type === 'B') {
      RenderBlock = RenderBlockB;
    } else if (blockContent.type === 'C') {
      RenderBlock = RenderBlockC;
    } else {
      return null;
    }
    return <RenderBlock key={blockContent.id} blockIdx={index} blockContent={blockContent} />;
  });

  return (
    blockList.length !== 0 && (
      <BlocksAreaContainer>
        <Heading2>{`更多關於  ${companyName}`}</Heading2>
        {renderedBlocks}
      </BlocksAreaContainer>
    )
  );
}
