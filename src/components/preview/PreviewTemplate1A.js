import React from 'react';

import IntroParagraph from './templateItems/IntroParagraph';
import InfoSpan from './templateItems/InfoSpan';
import KeywordTags from './templateItems/KeywordTags';
import HeroImage from './templateItems/HeroImage';
import ContactInfoArea from './templateItems/ContactInfoArea';
import ServiceProvideCity from './templateItems/ServiceProvideCity';
import ImagesWall from './templateItems/ImagesWall';
import { LocationIcon, ProfessionIcon } from '../../utils/icons';

const Preview1A = ({
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
    <div>
      <HeroImage serviceCompanyName={serviceCompanyName} heroImageUrl={heroImageUrl} />
      <LocationIcon />
      <InfoSpan>{city}</InfoSpan>
      <ProfessionIcon />
      <InfoSpan>{profession}</InfoSpan>
      <IntroParagraph title="業者介紹" intro={intro} />
      <KeywordTags tags={introTags} />
      <ImagesWall imagesGalleryUrls={imagesGalleryUrls} />
      <ContactInfoArea contactInfo={contactInfo} />
      <ServiceProvideCity selectedServiceCities={selectedServiceCities} />
    </div>
  );
};

export default Preview1A;
