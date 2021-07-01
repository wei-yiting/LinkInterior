import React from 'react';
import Edit1A from '../edit/Edit1A';
import Preview1A from '../preview/Preview1A';

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
}) => {
  return (
    <div>
      {isEdit ? (
        <Edit1A
          intro={intro}
          setIntro={setIntro}
          cityOptions={cityOptions}
          city={city}
          setCity={setCity}
          professionOptions={professionOptions}
          profession={profession}
          setProfession={setProfession}
        />
      ) : (
        <Preview1A intro={intro} city={city} profession={profession} />
      )}
    </div>
  );
};

export default Template1A;
