import React from 'react';

const TextArea = ({ placeholder, width, height, value, setValue }) => {
  return (
    <textarea
      placeholder={placeholder}
      className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-main-500 focus:border-main-500 sm:text-lg"
      style={{
        resize: 'none',
        width: width || '100%',
        padding: '1.5rem',
        height: height || 'auto',
      }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default TextArea;
