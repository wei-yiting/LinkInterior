import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';

import Intro from './input/Intro';
import Dropdown from './input/Dropdown';
import TagArea from './input/TagArea';

const Edit1A = ({
  intro,
  setIntro,
  cityOptions,
  city,
  setCity,
  professionOptions,
  profession,
  setProfession,
}) => {
  return (
    <>
      <Intro title="我的介紹" intro={intro} setIntro={setIntro} />
      <div style={{ display: 'flex' }}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <Dropdown placeholder="縣市" options={cityOptions} value={city} setValue={setCity} />
        <FontAwesomeIcon icon={faBriefcase} />
        <Dropdown
          placeholder="專長"
          options={professionOptions}
          value={profession}
          setValue={setProfession}
        />
      </div>
      <TagArea title="關鍵字標籤" />
    </>
  );
};

export default Edit1A;
