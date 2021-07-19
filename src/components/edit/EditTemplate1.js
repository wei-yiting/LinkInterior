import React from 'react';

import InfoDropdownFields from './templateInputFields/InfoDropdownFeilds';
import IntroField from './templateInputFields/IntroField';
import TagArea from './templateInputFields/TagArea';
import HeroImageField from './templateInputFields/HeroImageField';
import ContactInputFields from './templateInputFields/ContactInputFields';
import ServiceProvideCityInput from './templateInputFields/ServiceProvideCityInput';
import ImageWallField from './templateInputFields/ImageWallField';
import { RowWrapper } from '../../styles/layout/TemplateLayout';

const EditTemplate1 = ({
  serviceCompanyName,
  intro,
  setIntro,
  city,
  setCity,
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
    <>
      <HeroImageField
        serviceCompanyName={serviceCompanyName}
        heroImageUrl={heroImageUrl}
        setHeroImageUrl={setHeroImageUrl}
      />
      <InfoDropdownFields
        city={city}
        setCity={setCity}
        profession={profession}
        setProfession={setProfession}
        flexDirection="row"
        dropdownWidth="50%"
      />
      <IntroField title="我的介紹" intro={intro} setIntro={setIntro} />
      <TagArea title="關鍵字標籤" tags={introTags} setTags={setIntroTags} />
      <ImageWallField
        imagesGalleryUrls={imagesGalleryUrls}
        setImagesGalleryUrls={setImagesGalleryUrls}
      />
      <RowWrapper>
        <ContactInputFields
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
          width="55%"
          margin="30px 0"
        />
        <ServiceProvideCityInput
          width="40%"
          flex="none"
          margin="30px 0"
          selectedServiceCities={selectedServiceCities}
          setSelectedServiceCities={setSelectedServiceCities}
        />
      </RowWrapper>
    </>
  );
};

export default EditTemplate1;
