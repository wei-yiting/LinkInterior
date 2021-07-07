import React from 'react';

import { SectionWrapper } from '../../../styles/layout/TemplateLayout';

const IntroField = ({ title, intro, setIntro }) => {
  return (
    <SectionWrapper>
      <h4>{title}</h4>
      <textarea
        id="story"
        rows="8"
        cols="100"
        style={{ resize: 'none', width: '75%', padding: '10px' }}
        value={intro}
        onChange={(e) => {
          setIntro(e.target.value);
        }}
        placeholder="請填入您的介紹"
      />
    </SectionWrapper>
  );
};

export default IntroField;
