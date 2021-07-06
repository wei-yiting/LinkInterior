import React from 'react';

import IntroParagraph from './templateItems/IntroParagraph';
import InfoSpan from './templateItems/InfoSpan';
import KeywordTags from './templateItems/KeywordTags';
import HeroImage from './templateItems/HeroImage';
import ContactInfoArea from './templateItems/ContactInfoArea';
import ServiceProvideCity from './templateItems/ServiceProvideCity';
import ImagesWall from './templateItems/ImagesWall';
import { LocationIcon, ProfessionIcon } from '../../utils/icons';
import { SectionWrapper, DropdownContainer } from '../../styles/TemplateLayout';

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
    <>
      <HeroImage serviceCompanyName={serviceCompanyName} heroImageUrl={heroImageUrl} />
      <SectionWrapper>
        <div style={{ display: 'flex' }}>
          <DropdownContainer>
            <LocationIcon />
            <InfoSpan>{city.name}</InfoSpan>
          </DropdownContainer>
          <DropdownContainer>
            <ProfessionIcon />
            <InfoSpan>{profession.name}</InfoSpan>
          </DropdownContainer>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <IntroParagraph title="業者介紹" intro={intro} />
        <KeywordTags tags={introTags} />
      </SectionWrapper>
      <SectionWrapper>
        <ImagesWall imagesGalleryUrls={imagesGalleryUrls} />
      </SectionWrapper>
      <SectionWrapper>
        <ContactInfoArea contactInfo={contactInfo} />
      </SectionWrapper>
      <SectionWrapper>
        <ServiceProvideCity selectedServiceCities={selectedServiceCities} />
      </SectionWrapper>
    </>
  );
};

export default Preview1A;
