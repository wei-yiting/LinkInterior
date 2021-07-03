import React from 'react';
import EditBlockA from '../edit/EditBlockA';
import PreviewBlockA from '../preview/PreviewBlockA';

const BlockA = ({ isEdit, blockList, setBlockList, blockIdx, blockContent }) => {
  return isEdit ? (
    <EditBlockA blockList={blockList} setBlockList={setBlockList} blockIdx={blockIdx} />
  ) : (
    <PreviewBlockA blockContent={blockContent} />
  );
};

export default BlockA;
