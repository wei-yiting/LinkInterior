import React from 'react';

import IntroParagraph from './items/IntroParagraph';
import InfoSpan from './items/InfoSpan';
import KeywordTags from './items/KeywordTags';
import { LocationIcon, ProfessionIcon } from '../icons';

const Preview1A = ({ intro, city, profession, introTags }) => {
  return (
    <div>
      <IntroParagraph title="業者介紹" intro={intro} />
      <LocationIcon />
      <InfoSpan>{city}</InfoSpan>
      <ProfessionIcon />
      <InfoSpan>{profession}</InfoSpan>
      <KeywordTags tags={introTags} />
    </div>
  );
};

export default Preview1A;
