import React from 'react';

import DropdownInfo from './templateItems/DropdownInfo';
import IntroParagraph from './templateItems/IntroParagraph';
import KeywordTags from './templateItems/KeywordTags';
import HeroImage from './templateItems/HeroImage';
import ContactInfoArea from './templateItems/ContactInfoArea';
import ServiceProvideCity from './templateItems/ServiceProvideCity';
import ImagesWall from './templateItems/ImagesWall';
import { RowWrapper } from '../../styles/layout/TemplateLayout';

const Preview1 = ({
  serviceCompanyName,
  intro,
  city,
  profession,
  introTags,
  heroImageUrl,
  contactInfo,
  selectedServiceCities,
  imagesGalleryUrls,
}) => {
  return (
    <>
      <HeroImage serviceCompanyName={serviceCompanyName} heroImageUrl={heroImageUrl} />
      <DropdownInfo city={city} profession={profession} flexDirection="row" />
      <IntroParagraph title="業者介紹" intro={intro} />
      <KeywordTags tags={introTags} />
      <ImagesWall imagesGalleryUrls={imagesGalleryUrls} />
      <RowWrapper flexDirection="row">
        <ContactInfoArea contactInfo={contactInfo} width="55%" margin="30px 0" />
        <ServiceProvideCity
          selectedServiceCities={selectedServiceCities}
          width="40%"
          margin="30px 0"
        />
      </RowWrapper>
    </>
  );
};

export default Preview1;