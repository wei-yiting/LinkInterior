import React, { useState } from 'react';
// import uuid from 'react-uuid';

import BlockMenu from './BlockMenu';
import BlockA from './BlockA';
import BlockB from './BlockB';
import BlockC from './BlockC';

const BlockArea = ({ isEdit, serviceCompanyName }) => {
  const [blockList, setBlockList] = useState([]);

  const renderedBlocks = blockList.map((blockContent, index) => {
    switch (blockContent.type) {
      case 'A':
        return (
          <BlockA
            // key={uuid()}
            blockList={blockList}
            setBlockList={setBlockList}
            blockIdx={index}
            isEdit={isEdit}
            blockContent={blockContent}
          />
        );
      case 'B':
        return (
          <BlockB
            // key={uuid()}
            blockList={blockList}
            setBlockList={setBlockList}
            blockIdx={index}
            isEdit={isEdit}
            blockContent={blockContent}
          />
        );
      case 'C':
        return (
          <BlockC
            // key={uuid()}
            blockList={blockList}
            setBlockList={setBlockList}
            blockIdx={index}
            isEdit={isEdit}
            blockContent={blockContent}
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
