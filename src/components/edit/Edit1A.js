import React from 'react';

import Intro from './input/Intro';
import Dropdown from './input/Dropdown';
import TagArea from './input/TagArea';
import { LocationIcon, ProfessionIcon } from '../icons';

const Edit1A = ({
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
}) => {
  return (
    <>
      <Intro title="我的介紹" intro={intro} setIntro={setIntro} />
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
      <TagArea title="關鍵字標籤" tags={introTags} setTags={setIntroTags} />
    </>
  );
};

export default Edit1A;
