import React from 'react';

import BlockContainer from '../../styles/BlockContainer';
import FullWidthTextInput from './blockInputFields/FullWidthTextInput';
import { TrashIcon } from '../../utils/icons';

const EditBlockA = ({ blockList, setBlockList, blockIdx }) => {
  const deleteBlock = () => {
    console.log('delete!', blockIdx);
    setBlockList(blockList.filter((_, index) => index !== blockIdx));
    console.log(blockList);
  };

  return (
    <BlockContainer>
      <FullWidthTextInput blockList={blockList} setBlockList={setBlockList} blockIdx={blockIdx} />
      <button type="button" onClick={deleteBlock}>
        <TrashIcon />
      </button>
    </BlockContainer>
  );
};

export default EditBlockA;
