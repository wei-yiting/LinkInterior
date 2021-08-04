import React, { useContext } from 'react';
import uuid from 'react-uuid';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';
import { AddIcon } from '../../utils/icons/fontAwesome';

export default function BlockMenu() {
  const { blockList, setBlockList } = useContext(IntroCompileContext);

  const addBlock = (type) => {
    setBlockList([
      ...blockList,
      {
        id: uuid(),
        type,
        text: '',
        localImageUrl: '',
        imageFile: null,
      },
    ]);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          addBlock('A');
        }}
      >
        <AddIcon />
        <span>全幅文字</span>
      </button>
      <button
        type="button"
        onClick={() => {
          addBlock('B');
        }}
      >
        <AddIcon />
        <span>左文右圖</span>
      </button>
      <button
        type="button"
        onClick={() => {
          addBlock('C');
        }}
      >
        <AddIcon />
        <span>右文左圖</span>
      </button>
    </div>
  );
}
