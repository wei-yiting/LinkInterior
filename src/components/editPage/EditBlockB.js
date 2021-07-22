import React, { useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';

import { BlockContainer } from '../../styles/layoutStyledComponents/BlockLayout';
import SideTextInput from './blockInputFields/SideTextInput';
import SideImageField from './blockInputFields/SideImageField';
import { TrashIcon } from '../../utils/icons';

export default function EditBlockB({ blockIdx, randomBgIdx }) {
  const { blockList, setBlockList } = useContext(IntroCompileContext);

  const deleteBlock = () => {
    setBlockList(blockList.filter((_, index) => index !== blockIdx));
  };

  return (
    <BlockContainer>
      <SideTextInput blockIdx={blockIdx} />
      <SideImageField blockIdx={blockIdx} randomBgIdx={randomBgIdx} />
      <button type="button" onClick={deleteBlock}>
        <TrashIcon />
      </button>
    </BlockContainer>
  );
}
