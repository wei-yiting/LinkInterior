import React from 'react';

import IntroParagraph from './items/IntroParagraph';
import InfoSpan from './items/InfoSpan';
import KeywordTags from './items/KeywordTags';
import HeroImage from './items/HeroImage';
import { LocationIcon, ProfessionIcon } from '../../utils/icons';

const Preview1A = ({ intro, city, profession, introTags, heroImageUrl }) => {
  return (
    <div>
      <HeroImage heroImageUrl={heroImageUrl} />
      <LocationIcon />
      <InfoSpan>{city}</InfoSpan>
      <ProfessionIcon />
      <InfoSpan>{profession}</InfoSpan>
      <IntroParagraph title="業者介紹" intro={intro} />
      <KeywordTags tags={introTags} />
    </div>
  );
};

export default Preview1A;
