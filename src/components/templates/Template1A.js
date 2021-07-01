import React from 'react';
import EditTemplate1A from '../edit/EditTemplate1A';
import PreviewTemplate1A from '../preview/PreviewTemplate1A';

const Template1A = ({
  intro,
  setIntro,
  isEdit,
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
    <div>
      {isEdit ? (
        <EditTemplate1A
          intro={intro}
          setIntro={setIntro}
          cityOptions={cityOptions}
          city={city}
          setCity={setCity}
          professionOptions={professionOptions}
          profession={profession}
          setProfession={setProfession}
          introTags={introTags}
          setIntroTags={setIntroTags}
        />
      ) : (
        <PreviewTemplate1A
          intro={intro}
          city={city}
          profession={profession}
          introTags={introTags}
        />
      )}
    </div>
  );
};

export default Template1A;