import React from 'react';

import { useAuth } from '../../contexts/AuthContext';

import InfoDropdownFields from './templateInputFields/InfoDropdownFeilds';
import IntroField from './templateInputFields/IntroField';
import TagArea from './templateInputFields/TagArea';
import ProfileImageField from './templateInputFields/ProfileImageField';
import ContactInputFields from './templateInputFields/ContactInputFields';
import ServiceProvideCityInput from './templateInputFields/ServiceProvideCityInput';
import ImageSliderField from './templateInputFields/ImageSliderField';
import { SectionWrapper, RowWrapper } from '../../styles/layoutStyledComponents/TemplateLayout';
import { Title } from '../../styles/sharedStyledComponents/headings';

export default function EditIntroTemplate2() {
  const { currentUser } = useAuth();
  return (
    <>
      <RowWrapper>
        <ProfileImageField />
        <SectionWrapper margin="100px 0 50px 100px" width="100%">
          <Title>{currentUser ? currentUser.username : '你的註冊名稱'}</Title>
          <InfoDropdownFields
            flexDirection="column"
            margin="0"
            flex="0"
            justifyContent="flex-start"
            dropdownWidth="100%"
          />
        </SectionWrapper>
      </RowWrapper>
      <IntroField title="我的介紹" />
      <TagArea title="關鍵字標籤" />
      <ImageSliderField />
      <ServiceProvideCityInput width="fit-content" />
      <ContactInputFields
        width="80%"
        flexDirection="row"
        contactInputStyle={{ width: '40%' }}
        mediaInputStyle={{ width: '50%' }}
      />
    </>
  );
}
