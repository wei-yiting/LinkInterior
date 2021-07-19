import React from 'react';

import { SectionWrapper } from '../../styles/layout/TemplateLayout';

const TemplateMenu = () => {
  return (
    <SectionWrapper justifyContent="center" flexDirection="row" margin="20px auto">
      <span className="relative text-center z-0 inline-flex rounded-md">
        <button
          type="button"
          className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-main-500 focus:border-main-500"
        >
          樣板 A
        </button>
        <button
          type="button"
          className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-main-500 focus:border-main-500"
        >
          樣板 B
        </button>
      </span>
    </SectionWrapper>
  );
};

export default TemplateMenu;
