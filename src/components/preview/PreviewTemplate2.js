import React from 'react';

import { Title } from '../../styles/sharedStyledComponents/headings';
import DropdownInfo from './templateItems/DropdownInfo';
import IntroParagraph from './templateItems/IntroParagraph';
import KeywordTags from './templateItems/KeywordTags';
import ProfileImage from './templateItems/ProfileImage';
import ContactInfoArea from './templateItems/ContactInfoArea';
import ServiceProvideCity from './templateItems/ServiceProvideCity';
import ImagesWall from './templateItems/ImagesWall';
import { SectionWrapper, RowWrapper } from '../../styles/layout/TemplateLayout';

export default function PreviewTemplate2({
  serviceCompanyName,
  intro,
  city,
  profession,
  introTags,
  heroImageUrl,
  contactInfo,
  selectedServiceCities,
  imagesGalleryUrls,
}) {
  return (
    <>
      <RowWrapper>
        <ProfileImage heroImageUrl={heroImageUrl} />
        <SectionWrapper margin="100px 0 50px 100px" width="100%">
          <Title>{serviceCompanyName}</Title>
          <DropdownInfo
            city={city}
            profession={profession}
            flexDirection="column"
            margin="0"
            flex="0"
            justifyContent="flex-start"
            infoMargin="1rem 0"
          />
        </SectionWrapper>
      </RowWrapper>
      <IntroParagraph title="業者介紹" intro={intro} />
      <KeywordTags tags={introTags} />
      <ImagesWall imagesGalleryUrls={imagesGalleryUrls} />
      <ServiceProvideCity selectedServiceCities={selectedServiceCities} />
      <ContactInfoArea
        contactInfo={contactInfo}
        width="80%"
        flexDirection="row"
        margin="30px auto"
        justifyContent="space-around"
      />
    </>
  );
}
