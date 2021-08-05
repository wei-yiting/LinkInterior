import React, { useContext } from 'react';

import { IntroCompileContext } from '../contexts/IntroCompileContext';

import ToggleSwitch from '../components/templates/ToggleSwitch';
import IntroTemplateArea from '../components/templates/IntroTemplateArea';
import BlockArea from '../components/blocks/BlockArea';
import { IntroPageMainContainer } from '../styles/layoutStyledComponents/GeneralLayout';

export default function IntroCompile() {
  const { isEditMode } = useContext(IntroCompileContext);

  return (
    <div className={isEditMode ? 'bg-gray-50' : 'bg-white'}>
      <IntroPageMainContainer>
        <ToggleSwitch />
        <IntroTemplateArea />
        <BlockArea />
      </IntroPageMainContainer>
    </div>
  );
}
