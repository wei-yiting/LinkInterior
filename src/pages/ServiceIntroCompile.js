import React, { useContext } from 'react';
import styled from 'styled-components/macro';

import { IntroCompileContext } from '../contexts/IntroCompileContext';

import ToggleSwitch from '../components/templates/ToggleSwitch';
import TemplateArea from '../components/templates/TemplateArea';
import BlockArea from '../components/blocks/BlockArea';

const MainContainer = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0 100px;
  display: flex;
  flex-direction: column;
`;

export default function ServiceIntrCompile() {
  const { isEditMode } = useContext(IntroCompileContext);

  return (
    <div className={isEditMode ? 'bg-gray-50' : ''}>
      <MainContainer>
        <ToggleSwitch />
        <TemplateArea />
        <BlockArea />
      </MainContainer>
    </div>
  );
}
