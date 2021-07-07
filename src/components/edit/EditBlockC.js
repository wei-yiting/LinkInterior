import React from 'react';

import BlockContainer from '../../styles/sharedStyledComponents/BlockContainer';
import SideTextInput from './blockInputFields/SideTextInput';
import SideImageField from './blockInputFields/SideImageField';

import { TrashIcon } from '../../utils/icons';

const EditBlockC = ({ blockList, setBlockList, blockIdx, randomBgIdx }) => {
  const deleteBlock = () => {
    setBlockList(blockList.filter((_, index) => index !== blockIdx));
  };

  return (
    <BlockContainer>
      <SideImageField
        blockList={blockList}
        setBlockList={setBlockList}
        blockIdx={blockIdx}
        randomBgIdx={randomBgIdx}
      />
      <SideTextInput blockList={blockList} setBlockList={setBlockList} blockIdx={blockIdx} />
      <button type="button" onClick={deleteBlock}>
        <TrashIcon />
      </button>
    </BlockContainer>
  );
};

export default EditBlockC;
