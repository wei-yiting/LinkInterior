import React from 'react';

import { SectionWrapper } from '../../../styles/layout/TemplateLayout';
import TextArea from './TextArea';
import { Heading1 } from '../../../styles/sharedStyledComponents/headings';

const IntroField = ({ title, intro, setIntro }) => {
  return (
    <SectionWrapper>
      <Heading1>{title}</Heading1>
      <TextArea value={intro} setValue={setIntro} height="24rem" />
    </SectionWrapper>
  );
};

export default IntroField;
