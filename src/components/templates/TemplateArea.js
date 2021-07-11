import React, { useState } from 'react';

import TemplateMenu from './TemplateMenu';
import Template1A from './Template1A';
import { allCityOptions } from '../../utils/data/city';
import professionOptions from '../../utils/data/profession';

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

  return (
    <div>
      <TemplateMenu />
      <Template1A
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
