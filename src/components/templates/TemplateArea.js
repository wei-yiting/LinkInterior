import React, { useState } from 'react';

import TemplateMenu from './TemplateMenu';
import Template1 from './Template1';
import Template2 from './Template2';
import { allCityOptions } from '../../utils/constants/city';
import professionOptions from '../../utils/constants/profession';

const DEFAULT_CONTACT_INFO = {
  mobile: '',
  phone: '',
  line: '',
  email: '',
  address: '',
  website: '',
  fb: '',
  ig: '',
};

const TemplateArea = ({ isEdit, serviceCompanyName }) => {
  const [intro, setIntro] = useState('');
  const [city, setCity] = useState(allCityOptions[0]);
  const [profession, setProfession] = useState(professionOptions[0]);
  const [introTags, setIntroTags] = useState([]);
  const [heroImageUrl, setHeroImageUrl] = useState('');
  const [contactInfo, setContactInfo] = useState(DEFAULT_CONTACT_INFO);
  const [selectedServiceCities, setSelectedServiceCities] = useState([]);
  const [imagesGalleryUrls, setImagesGalleryUrls] = useState([]);
  const [templateType, setTemplateType] = useState(1);

  let Template;
  if (templateType === 1) {
    Template = Template1;
  } else if (templateType === 2) {
    Template = Template2;
  }

  return (
    <div>
      <TemplateMenu templateType={templateType} setTemplateType={setTemplateType} />
      <Template
        isEdit={isEdit}
        serviceCompanyName={serviceCompanyName}
        intro={intro}
        setIntro={setIntro}
        city={city}
        setCity={setCity}
        profession={profession}
        setProfession={setProfession}
        introTags={introTags}
        setIntroTags={setIntroTags}
        heroImageUrl={heroImageUrl}
        setHeroImageUrl={setHeroImageUrl}
        contactInfo={contactInfo}
        setContactInfo={setContactInfo}
        selectedServiceCities={selectedServiceCities}
        setSelectedServiceCities={setSelectedServiceCities}
        imagesGalleryUrls={imagesGalleryUrls}
        setImagesGalleryUrls={setImagesGalleryUrls}
      />
    </div>
  );
};

export default TemplateArea;
