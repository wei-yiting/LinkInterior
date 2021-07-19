import React from 'react';

import InfoDropdownFields from './templateInputFields/InfoDropdownFeilds';
import IntroField from './templateInputFields/IntroField';
import TagArea from './templateInputFields/TagArea';
import ProfileImageField from './templateInputFields/ProfileImageField';
import ContactInputFields from './templateInputFields/ContactInputFields';
import ServiceProvideCityInput from './templateInputFields/ServiceProvideCityInput';
import ImageWallField from './templateInputFields/ImageWallField';
import { SectionWrapper, RowWrapper } from '../../styles/layout/TemplateLayout';
import { Title } from '../../styles/sharedStyledComponents/headings';

const EditTemplate2 = ({
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
      <RowWrapper>
        <ProfileImageField
          serviceCompanyName={serviceCompanyName}
          heroImageUrl={heroImageUrl}
          setHeroImageUrl={setHeroImageUrl}
        />
        <SectionWrapper margin="100px 0 50px 100px" width="100%">
          <Title>{serviceCompanyName}</Title>
          <InfoDropdownFields
            city={city}
            setCity={setCity}
            profession={profession}
            setProfession={setProfession}
            flexDirection="column"
            margin="0"
            flex="0"
            justifyContent="flex-start"
            dropdownWidth="100%"
          />
        </SectionWrapper>
      </RowWrapper>
      <IntroField title="我的介紹" intro={intro} setIntro={setIntro} />
      <TagArea title="關鍵字標籤" tags={introTags} setTags={setIntroTags} />
      <ImageWallField
        imagesGalleryUrls={imagesGalleryUrls}
        setImagesGalleryUrls={setImagesGalleryUrls}
      />
      <ServiceProvideCityInput
        width="fit-content"
        selectedServiceCities={selectedServiceCities}
        setSelectedServiceCities={setSelectedServiceCities}
      />
      <ContactInputFields
        contactInfo={contactInfo}
        setContactInfo={setContactInfo}
        width="80%"
        flexDirection="row"
        contactInputStyle={{ width: '40%' }}
        mediaInputStyle={{ width: '50%' }}
      />
    </>
  );
};

export default EditTemplate2;
