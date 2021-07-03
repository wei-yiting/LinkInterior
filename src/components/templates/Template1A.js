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
  heroImageUrl,
  setHeroImageUrl,
  contactInfo,
  setContactInfo,
  selectedServiceCities,
  setSelectedServiceCities,
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
          heroImageUrl={heroImageUrl}
          setHeroImageUrl={setHeroImageUrl}
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
          selectedServiceCities={selectedServiceCities}
          setSelectedServiceCities={setSelectedServiceCities}
        />
      ) : (
        <PreviewTemplate1A
          intro={intro}
          city={city}
          profession={profession}
          introTags={introTags}
          heroImageUrl={heroImageUrl}
          contactInfo={contactInfo}
          selectedServiceCities={selectedServiceCities}
        />
      )}
    </div>
  );
};

export default Template1A;
