import React, { useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';
import { BlockContainer } from '../../styles/layoutStyledComponents/BlockLayout';
import SideTextInput from './blockInputFields/SideTextInput';
import SideImageField from './blockInputFields/SideImageField';

import { TrashIcon } from '../../utils/icons/fontAwesome';

export default function EditBlockC({ blockIdx, randomBgIdx }) {
  const { blockList, setBlockList } = useContext(IntroCompileContext);
  const deleteBlock = () => {
    setBlockList(blockList.filter((_, index) => index !== blockIdx));
  };

  return (
    <BlockContainer>
      <SideImageField blockIdx={blockIdx} randomBgIdx={randomBgIdx} />
      <SideTextInput blockIdx={blockIdx} />
      <button type="button" onClick={deleteBlock}>
        <TrashIcon />
      </button>
    </BlockContainer>
  );
}
