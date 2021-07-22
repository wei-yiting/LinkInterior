import React, { useContext } from 'react';

import { IntroCompileContext } from '../contexts/IntroCompileContext';

import ToggleSwitch from '../components/templates/ToggleSwitch';
import IntroTemplateArea from '../components/templates/IntroTemplateArea';
import BlockArea from '../components/blocks/BlockArea';
import PublishOptions from '../components/shared/PublishOptions';
import { IntroPageMainContainer } from '../styles/layoutStyledComponents/GeneralLayout';

export default function IntrCompile() {
  const { isEditMode } = useContext(IntroCompileContext);

  return (
    <div className={isEditMode ? 'bg-gray-50' : ''}>
      <IntroPageMainContainer>
        <ToggleSwitch />
        <IntroTemplateArea />
        <BlockArea />
        <PublishOptions />
      </IntroPageMainContainer>
    </div>
  );
}
