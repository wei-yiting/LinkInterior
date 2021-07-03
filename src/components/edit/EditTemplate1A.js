import React from 'react';

import Intro from './input/Intro';
import Dropdown from './input/Dropdown';
import TagArea from './input/TagArea';
import HeroImageField from './input/HeroImageField';
import ContactInputFields from './input/ContactInputFields';
import { LocationIcon, ProfessionIcon } from '../../utils/icons';

const EditTemplate1A = ({
  intro,
  setIntro,
  cityOptions,
  city,
  setCity,
  professionOptions,
  profession,
  setProfession,
  introTags,
  setIntroTags,
  heroImageUrl,
  setHeroImageUrl,
  contactInfo,
  setContactInfo,
}) => {
  return (
    <>
      <HeroImageField heroImageUrl={heroImageUrl} setHeroImageUrl={setHeroImageUrl} />
      <div style={{ display: 'flex' }}>
        <LocationIcon />
        <Dropdown placeholder="縣市" options={cityOptions} value={city} setValue={setCity} />
        <ProfessionIcon />
        <Dropdown
          placeholder="專長"
          options={professionOptions}
          value={profession}
          setValue={setProfession}
        />
      </div>
      <Intro title="我的介紹" intro={intro} setIntro={setIntro} />
      <TagArea title="關鍵字標籤" tags={introTags} setTags={setIntroTags} />
      <ContactInputFields contactInfo={contactInfo} setContactInfo={setContactInfo} />
    </>
  );
};

export default EditTemplate1A;
