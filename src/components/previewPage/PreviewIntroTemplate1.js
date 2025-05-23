import React from 'react';

import DropdownInfo from './templateItems/DropdownInfo';
import IntroParagraph from './templateItems/IntroParagraph';
import KeywordTags from './templateItems/KeywordTags';
import HeroImage from './templateItems/HeroImage';
import ContactInfoArea from './templateItems/ContactInfoArea';
import ServiceProvideCity from './templateItems/ServiceProvideCity';
import ImagesWall from './templateItems/ImagesWall';
import { RowWrapper } from '../../styles/layoutStyledComponents/TemplateLayout';

export default function PreviewIntroTemplate1() {
  return (
    <>
      <HeroImage />
      <DropdownInfo flexDirection="row" />
      <IntroParagraph title="業者介紹" />
      <KeywordTags />
      <ImagesWall />
      <RowWrapper flexDirection="row">
        <ContactInfoArea width="50%" margin="30px 0" />
        <ServiceProvideCity width="40%" margin="30px 0" />
      </RowWrapper>
    </>
  );
}
