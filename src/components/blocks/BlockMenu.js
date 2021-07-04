import React from 'react';

import { AddIcon } from '../../utils/icons';

const BlockMenu = ({ blockList, setBlockList }) => {
  const addBlock = (type) => {
    setBlockList([
      ...blockList,
      {
        type,
        text: '',
        image: '',
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
        <span>左圖右文</span>
      </button>
    </div>
  );
};

export default BlockMenu;
