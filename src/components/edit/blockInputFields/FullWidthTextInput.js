import React, { useState } from 'react';
import styled from 'styled-components/macro';

const TextAreaWrapper = styled.div`
  width: 80%;
  height: 100%;
`;

const textareaStyle = {
  width: '100%',
  height: '100%',
  resize: 'none',
  padding: '1rem',
  textAlign: 'justify',
  textAlignLast: 'center',
};

const FullWidthTextInput = ({ blockList, setBlockList, blockIdx }) => {
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
    <TextAreaWrapper>
      <textarea
        id="blockA"
        style={textareaStyle}
        value={inputText}
        onChange={handleTextareaChange}
        placeholder="請填入文字說明"
        className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-500 sm:text-sm"
      />
    </TextAreaWrapper>
  );
};

export default FullWidthTextInput;
