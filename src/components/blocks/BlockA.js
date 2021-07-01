import React from 'react';
import BlockSideTextInput from '../edit/input/BlockSideTextInput';
import BlockSideText from '../preview/items/BlockSideText';

const BlockA = ({ isEdit, blockList, setBlockList, blockIdx, block }) => {
  return isEdit ? (
    <BlockSideTextInput blockList={blockList} setBlockList={setBlockList} blockIdx={blockIdx} />
  ) : (
    <BlockSideText block={block} />
  );
};

export default BlockA;
