import React, { useState } from 'react';

import BlockMenu from './BlockMenu';
import BlockA from './BlockA';
import BlockB from './BlockB';
import BlockC from './BlockC';
import { BlockAreaContainer } from '../../styles/layout/BlockLayout';
import { Header2 } from '../../styles/sharedStyledComponents/headers';

const BlockArea = ({ isEdit, serviceCompanyName }) => {
  const [blockList, setBlockList] = useState([]);

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
    return (
      <Block
        isEdit={isEdit}
        key={blockContent.id}
        blockList={blockList}
        setBlockList={setBlockList}
        blockIdx={index}
        blockContent={blockContent}
      />
    );
  });

  return (
    <BlockAreaContainer>
      <Header2>{isEdit ? '更多關於我的介紹' : `更多關於  ${serviceCompanyName}`}</Header2>
      {renderedBlocks}
      {isEdit ? (
        <BlockMenu blockList={blockList} setBlockList={setBlockList} isEdit={isEdit} />
      ) : null}
    </BlockAreaContainer>
  );
};

export default BlockArea;
