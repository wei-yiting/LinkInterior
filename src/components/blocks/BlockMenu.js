import React from 'react';

import { AddIcon } from '../../utils/icons';

const BlockMenu = ({ blockList, setBlockList }) => {
  const addBlock = () => {
    setBlockList([
      ...blockList,
      {
        type: 'A',
        text: '',
        image: '',
      },
    ]);
  };

  return (
    <div>
      <button type="button" onClick={addBlock}>
        <AddIcon />
      </button>
    </div>
  );
};

export default BlockMenu;
