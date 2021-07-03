import React, { useState } from 'react';

import BlockMenu from './BlockMenu';
import BlockA from './BlockA';

const BlockArea = ({ isEdit, serviceCompanyName }) => {
  const [blockList, setBlockList] = useState([]);

  const renderedBlocks = blockList.map((block, index) => {
    switch (block.type) {
      case 'A':
        return (
          <BlockA
            blockList={blockList}
            setBlockList={setBlockList}
            blockIdx={index}
            isEdit={isEdit}
            block={block}
          />
        );
      default:
        return null;
    }
  });

  return (
    <div>
      <h3>{isEdit ? '更多關於我的介紹' : `更多關於  ${serviceCompanyName}`}</h3>
      {renderedBlocks}
      {isEdit ? (
        <BlockMenu blockList={blockList} setBlockList={setBlockList} isEdit={isEdit} />
      ) : null}
    </div>
  );
};

export default BlockArea;
