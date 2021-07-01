import React, { useState, useEffect } from 'react';

import BlockMenu from './BlockMenu';
import BlockA from './BlockA';

const BlockArea = ({ isEdit }) => {
  const [blockList, setBlockList] = useState([]);

  useEffect(() => {
    console.log(blockList);
  }, [blockList]);

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
      {renderedBlocks}
      {isEdit ? (
        <BlockMenu blockList={blockList} setBlockList={setBlockList} isEdit={isEdit} />
      ) : null}
    </div>
  );
};

export default BlockArea;
