import React from 'react';

import { SectionWrapper } from '../../../styles/layout/TemplateLayout';
import TextArea from './TextArea';

const IntroField = ({ title, intro, setIntro }) => {
  return (
    <SectionWrapper>
      <h4>{title}</h4>
      <TextArea value={intro} setValue={setIntro} height="200px" />
    </SectionWrapper>
  );
};

export default IntroField;
