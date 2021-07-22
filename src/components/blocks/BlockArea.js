import React, { useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';
import { useAuth } from '../../contexts/AuthContext';

import BlockMenu from './BlockMenu';
import BlockA from './BlockA';
import BlockB from './BlockB';
import BlockC from './BlockC';
import { BlocksAreaContainer } from '../../styles/layoutStyledComponents/BlockLayout';
import { Heading2 } from '../../styles/sharedStyledComponents/headings';

export default function BlockArea() {
  const { isEditMode, blockList } = useContext(IntroCompileContext);
  const { currentUser } = useAuth();

  const renderedBlocks = blockList.map((blockContent, index) => {
    let Block;
    if (blockContent.type === 'A') {
      Block = BlockA;
    } else if (blockContent.type === 'B') {
      Block = BlockB;
    } else if (blockContent.type === 'C') {
      Block = BlockC;
    } else {
      return null;
    }
    return <Block key={blockContent.id} blockIdx={index} blockContent={blockContent} />;
  });

  return isEditMode ? (
    <BlocksAreaContainer>
      <Heading2>更多關於我的介紹</Heading2>
      {renderedBlocks}
      <BlockMenu />
    </BlocksAreaContainer>
  ) : (
    blockList.length !== 0 && (
      <BlocksAreaContainer>
        <Heading2>{`更多關於  ${currentUser.username}`}</Heading2>
        {renderedBlocks}
      </BlocksAreaContainer>
    )
  );
}
