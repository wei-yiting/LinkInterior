import React from 'react';
import EditBlockB from '../edit/EditBlockA';
import PreviewBlockB from '../preview/PreviewBlockA';

const BlockB = ({ isEdit, blockList, setBlockList, blockIdx, blockContent }) => {
  return isEdit ? (
    <EditBlockB blockList={blockList} setBlockList={setBlockList} blockIdx={blockIdx} />
  ) : (
    <PreviewBlockB blockContent={blockContent} />
  );
};

export default BlockB;
