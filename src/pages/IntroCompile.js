import React, { useContext } from 'react';
import styled from 'styled-components/macro';

import { IntroCompileContext } from '../contexts/IntroCompileContext';

import ToggleSwitch from '../components/templates/ToggleSwitch';
import TemplateArea from '../components/templates/IntroTemplateArea';
import BlockArea from '../components/blocks/BlockArea';
import PublishOptions from '../components/shared/PublishOptions';

const MainContainer = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0 100px;
  display: flex;
  flex-direction: column;
`;

export default function IntrCompile() {
  const { isEditMode } = useContext(IntroCompileContext);

  return (
    <div className={isEditMode ? 'bg-gray-50' : ''}>
      <MainContainer>
        <ToggleSwitch />
        <TemplateArea />
        <BlockArea />
        <PublishOptions />
      </MainContainer>
    </div>
  );
}
