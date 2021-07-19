import React from 'react';
import EditTemplate2 from '../edit/EditTemplate2';
import PreviewTemplate2 from '../preview/PreviewTemplate2';

const Template2 = ({
  serviceCompanyName,
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
  imagesGalleryUrls,
  setImagesGalleryUrls,
}) => {
  return (
    <div style={{ marginTop: '80px' }}>
      {isEdit ? (
        <EditTemplate2
          serviceCompanyName={serviceCompanyName}
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
          imagesGalleryUrls={imagesGalleryUrls}
          setImagesGalleryUrls={setImagesGalleryUrls}
        />
      ) : (
        <PreviewTemplate2
          serviceCompanyName={serviceCompanyName}
          intro={intro}
          city={city}
          profession={profession}
          introTags={introTags}
          heroImageUrl={heroImageUrl}
          contactInfo={contactInfo}
          selectedServiceCities={selectedServiceCities}
          imagesGalleryUrls={imagesGalleryUrls}
        />
      )}
    </div>
  );
};

export default Template2;
