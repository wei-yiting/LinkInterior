import React from 'react';
import FullWidthTextInput from './blockInputFields/FullWidthTextInput';

const EditBlockA = ({ blockList, setBlockList, blockIdx }) => {
  return (
    <FullWidthTextInput blockList={blockList} setBlockList={setBlockList} blockIdx={blockIdx} />
  );
};

export default EditBlockA;
