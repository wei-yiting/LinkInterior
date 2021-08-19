import React, { useContext } from 'react';

import { IntroCompileContext } from '../../../contexts/IntroCompileContext';

import { SectionWrapper } from '../../../styles/layoutStyledComponents/templateLayout';
import TextArea from './TextArea';
import { Heading1 } from '../../../styles/sharedStyledComponents/headings';

export default function IntroField({ title }) {
  const { intro, setIntro } = useContext(IntroCompileContext);

  return (
    <SectionWrapper>
      <Heading1>{title}</Heading1>
      <TextArea value={intro} setValue={setIntro} height="24rem" />
    </SectionWrapper>
  );
}
