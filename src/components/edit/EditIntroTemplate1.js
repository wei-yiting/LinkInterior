import React from 'react';

import InfoDropdownFields from './templateInputFields/InfoDropdownFeilds';
import IntroField from './templateInputFields/IntroField';
import TagArea from './templateInputFields/TagArea';
import HeroImageField from './templateInputFields/HeroImageField';
import ContactInputFields from './templateInputFields/ContactInputFields';
import ServiceProvideCityInput from './templateInputFields/ServiceProvideCityInput';
import ImageWallField from './templateInputFields/ImageWallField';
import { RowWrapper } from '../../styles/layout/TemplateLayout';

export default function EditIntroTemplate1() {
  return (
    <>
      <HeroImageField />
      <InfoDropdownFields flexDirection="row" dropdownWidth="50%" />
      <IntroField title="我的介紹" />
      <TagArea title="關鍵字標籤" />
      <ImageWallField />
      <RowWrapper>
        <ContactInputFields width="55%" margin="30px 0" />
        <ServiceProvideCityInput width="40%" flex="none" margin="30px 0" />
      </RowWrapper>
    </>
  );
}
