import React, { useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';

import { BlockContainer } from '../../styles/layoutStyledComponents/BlockLayout';
import FullWidthTextInput from './blockInputFields/FullWidthTextInput';
import { TrashIcon } from '../../utils/icons';

export default function EditBlockA({ blockIdx }) {
  const { blockList, setBlockList } = useContext(IntroCompileContext);

  const deleteBlock = () => {
    setBlockList(blockList.filter((_, index) => index !== blockIdx));
  };

  return (
    <BlockContainer>
      <FullWidthTextInput blockIdx={blockIdx} />
      <button type="button" onClick={deleteBlock}>
        <TrashIcon />
      </button>
    </BlockContainer>
  );
}
