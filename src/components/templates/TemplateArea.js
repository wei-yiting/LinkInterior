import React, { useState } from 'react';

import TemplateMenu from './TemplateMenu';
import Template1A from './Template1A';
import professions from '../../utils/data/profession';
import { allCities } from '../../utils/data/city';

const TemplateArea = ({ isEdit, serviceCompanyName }) => {
  const [intro, setIntro] = useState('');
  const [city, setCity] = useState('');
  const [profession, setProfession] = useState('');
  const [introTags, setIntroTags] = useState([]);
  const [heroImageUrl, setHeroImageUrl] = useState('');
  const [contactInfo, setContactInfo] = useState({
    mobile: '',
    phone: '',
    line: '',
    email: '',
    address: '',
    website: '',
    fb: '',
    ig: '',
  });
  const [selectedServiceCities, setSelectedServiceCities] = useState([]);

  return (
    <div>
      <TemplateMenu />
      <Template1A
        isEdit={isEdit}
        serviceCompanyName={serviceCompanyName}
        intro={intro}
        setIntro={setIntro}
        cityOptions={allCities}
        city={city}
        setCity={setCity}
        professionOptions={professions}
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
      />
    </div>
  );
};

export default TemplateArea;
