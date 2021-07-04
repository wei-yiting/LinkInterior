import React from 'react';

import BlockContainer from '../../styles/BlockContainer';
import SideTextInput from './blockInputFields/SideTextInput';
import SideImageField from './blockInputFields/SideImageField';

import { TrashIcon } from '../../utils/icons';

const EditBlockB = ({ blockList, setBlockList, blockIdx, randomBgIdx }) => {
  const deleteBlock = () => {
    setBlockList(blockList.filter((_, index) => index !== blockIdx));
  };

  return (
    <BlockContainer>
      <SideTextInput blockList={blockList} setBlockList={setBlockList} blockIdx={blockIdx} />
      <SideImageField
        blockList={blockList}
        setBlockList={setBlockList}
        blockIdx={blockIdx}
        randomBgIdx={randomBgIdx}
      />
      <button type="button" onClick={deleteBlock}>
        <TrashIcon />
      </button>
    </BlockContainer>
  );
};

export default EditBlockB;
