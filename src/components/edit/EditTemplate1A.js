import React from 'react';

import IntroField from './templateInputFields/IntroField';
import TagArea from './templateInputFields/TagArea';
import HeroImageField from './templateInputFields/HeroImageField';
import ContactInputFields from './templateInputFields/ContactInputFields';
import ServiceProvideCityInput from './templateInputFields/ServiceProvideCityInput';
import ImageWallField from './templateInputFields/ImageWallField';
import { LocationIcon, ProfessionIcon } from '../../utils/icons';
import { SectionWrapper, DropdownContainer } from '../../styles/TemplateLayout';
import Dropdown from '../../styles/TailwindUI/Dropdown';
import { allCityOptions } from '../../utils/data/city';
import professionOptions from '../../utils/data/profession';

const EditTemplate1A = ({
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
      <SectionWrapper>
        <div style={{ display: 'flex', width: '100%' }}>
          <DropdownContainer>
            <LocationIcon />
            <Dropdown placeholder="縣市" options={allCityOptions} value={city} setValue={setCity} />
          </DropdownContainer>
          <DropdownContainer>
            <ProfessionIcon />
            <Dropdown
              placeholder="專長"
              options={professionOptions}
              value={profession}
              setValue={setProfession}
            />
          </DropdownContainer>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <IntroField title="我的介紹" intro={intro} setIntro={setIntro} />
      </SectionWrapper>
      <SectionWrapper>
        <TagArea title="關鍵字標籤" tags={introTags} setTags={setIntroTags} />
      </SectionWrapper>
      <SectionWrapper>
        <ImageWallField
          imagesGalleryUrls={imagesGalleryUrls}
          setImagesGalleryUrls={setImagesGalleryUrls}
        />
      </SectionWrapper>
      <ContactInputFields contactInfo={contactInfo} setContactInfo={setContactInfo} />
      <ServiceProvideCityInput
        selectedServiceCities={selectedServiceCities}
        setSelectedServiceCities={setSelectedServiceCities}
      />
    </>
  );
};

export default EditTemplate1A;
