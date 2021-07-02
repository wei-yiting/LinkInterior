import React from 'react';
import FullWidthTextInput from './input/FullWidthTextInput';

const EditBlockA = ({ blockList, setBlockList, blockIdx }) => {
  return (
    <FullWidthTextInput blockList={blockList} setBlockList={setBlockList} blockIdx={blockIdx} />
  );
};

export default EditBlockA;
