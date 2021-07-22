import React from 'react';

import RenderHeroImage from './renderItems/RenderHeroImage';
import RenderDropdownInfo from './renderItems/RenderDropdownInfo';
// import { RowWrapper } from '../../styles/layout/TemplateLayout';

export default function RenderIntroTemplate1() {
  return (
    <>
      <RenderHeroImage />
      <RenderDropdownInfo flexDirection="row" />
      {/* <IntroParagraph title="業者介紹" />
      <KeywordTags />
      <ImagesWall />
      <RowWrapper flexDirection="row">
        <ContactInfoArea width="55%" margin="30px 0" />
        <ServiceProvideCity width="40%" margin="30px 0" />
      </RowWrapper> */}
    </>
  );
}
