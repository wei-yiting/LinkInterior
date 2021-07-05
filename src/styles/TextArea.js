import React from 'react';
import { theme } from './theme';

const TextArea = ({ placeholder, width, height }) => {
  return (
    <textarea
      placeholder={placeholder}
      className="my-5 p-1 align-middle shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-900 rounded-md"
      style={{
        resize: 'none',
        width,
        padding: '10px',
        height,
        border: theme.inputBorder,
      }}
    />
  );
};

export default TextArea;
