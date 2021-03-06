import React from 'react';

import { useAuth } from '../../contexts/AuthContext';

import { Title } from '../../styles/sharedStyledComponents/headings';
import DropdownInfo from './templateItems/DropdownInfo';
import IntroParagraph from './templateItems/IntroParagraph';
import KeywordTags from './templateItems/KeywordTags';
import ProfileImage from './templateItems/ProfileImage';
import ContactInfoArea from './templateItems/ContactInfoArea';
import ServiceProvideCity from './templateItems/ServiceProvideCity';
import ImagesSlider from './templateItems/ImagesSlider';
import { SectionWrapper, RowWrapper } from '../../styles/layoutStyledComponents/templateLayout';

export default function PreviewIntroTemplate2() {
  const { currentUser } = useAuth();
  return (
    <>
      <RowWrapper>
        <ProfileImage />
        <SectionWrapper margin="100px 0 50px 100px" width="100%">
          <Title>{currentUser ? currentUser.username : 'LinkInterior 網頁建置平台'}</Title>
          <DropdownInfo
            flexDirection="column"
            margin="0"
            flex="0"
            justifyContent="flex-start"
            infoMargin="1rem 0"
          />
        </SectionWrapper>
      </RowWrapper>
      <IntroParagraph title="業者介紹" />
      <KeywordTags />
      <ImagesSlider />
      <ServiceProvideCity />
      <ContactInfoArea
        width="80%"
        flexDirection="row"
        margin="30px auto"
        justifyContent="space-around"
      />
    </>
  );
}
