import React from 'react';

import { SectionWrapper } from '../../../styles/layout/TemplateLayout';
import TextArea from './TextArea';
import { Header1 } from '../../../styles/sharedStyledComponents/headers';

const IntroField = ({ title, intro, setIntro }) => {
  return (
    <SectionWrapper>
      <Header1>{title}</Header1>
      <TextArea value={intro} setValue={setIntro} height="24rem" />
    </SectionWrapper>
  );
};

export default IntroField;
