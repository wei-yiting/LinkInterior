import React from 'react';
import uuid from 'react-uuid';

import { AddIcon } from '../../utils/icons';

const BlockMenu = ({ blockList, setBlockList }) => {
  const addBlock = (type) => {
    setBlockList([
      ...blockList,
      {
        id: uuid(),
        type,
        text: '',
        imageUrl: '',
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
};

export default BlockMenu;
