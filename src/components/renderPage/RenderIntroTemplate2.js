import React from 'react';

import { SectionWrapper } from '../../styles/layoutStyledComponents/TemplateLayout';
import RenderDropdownInfo from './renderItems/RenderDropdownInfo';
// import { RowWrapper } from '../../styles/layout/TemplateLayout';

export default function RenderIntroTemplate2() {
  return (
    <>
      . {/* <ProfileImage /> */}
      <SectionWrapper margin="100px 0 50px 100px" width="100%">
        {/* <Title>{currentUser.username}</Title> */}
        <RenderDropdownInfo
          flexDirection="column"
          margin="0"
          flex="0"
          justifyContent="flex-start"
          infoMargin="1rem 0"
        />
      </SectionWrapper>
      {/* </RowWrapper>
      <IntroParagraph title="業者介紹" />
      <KeywordTags />
      <ImagesWall />
      <ServiceProvideCity />
      <ContactInfoArea
        width="80%"
        flexDirection="row"
        margin="30px auto"
        justifyContent="space-around"
      /> */}
    </>
  );
}
