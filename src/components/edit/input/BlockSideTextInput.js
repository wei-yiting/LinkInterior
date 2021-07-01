import React, { useState } from 'react';

const BlockSideTextInput = ({ blockList, setBlockList, blockIdx }) => {
  const [inputText, setInputText] = useState(blockList[blockIdx].text);

  const handleTextareaChange = (evt) => {
    setInputText(evt.target.value);
    setBlockList(
      blockList.map((block, index) => {
        if (index === blockIdx) {
          return { ...block, text: evt.target.value };
        }
        return block;
      }),
    );
  };

  return (
    <div>
      <textarea
        id="story"
        rows="4"
        cols="100"
        style={{ resize: 'none', width: '40%', padding: '10px' }}
        value={inputText}
        onChange={handleTextareaChange}
        placeholder="請填入文字說明"
      />
    </div>
  );
};

export default BlockSideTextInput;
