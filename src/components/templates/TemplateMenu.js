import React from 'react';
import styled from 'styled-components/macro';

import { SectionWrapper } from '../../styles/layout/TemplateLayout';
import { color } from '../../styles/theme';

const activeStyle = { background: color.main[500], color: 'white' };
const restStyle = { background: 'white' };

const FixedContainer = styled.div`
  position: fixed;
  left: 50vw;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  transform: translate(-50%, -50%);
  padding-top: 50px;
`;

const TemplateMenu = ({ templateType, setTemplateType }) => {
  return (
    <FixedContainer>
      <SectionWrapper justifyContent="center" flexDirection="row" margin="20px auto">
        <span className="relative text-center z-0 inline-flex rounded-md">
          <button
            onClick={() => setTemplateType(1)}
            type="button"
            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-main-500 focus:border-main-500"
            style={templateType === 1 ? activeStyle : restStyle}
          >
            樣板 1
          </button>
          <button
            onClick={() => setTemplateType(2)}
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-main-500 focus:border-main-500"
            style={templateType === 2 ? activeStyle : restStyle}
          >
            樣板 2
          </button>
        </span>
      </SectionWrapper>
    </FixedContainer>
  );
};

export default TemplateMenu;
