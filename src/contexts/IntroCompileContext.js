import React, { createContext, useState } from 'react';

import { allCityOptions } from '../utils/constants/city';
import professionOptions from '../utils/constants/profession';

export const IntroCompileContext = createContext();

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

export default function IntroCompileContextProvider({ children }) {
  const [isEditMode, setIsEditMode] = useState(true);
  const [intro, setIntro] = useState('');
  const [city, setCity] = useState(allCityOptions[0]);
  const [profession, setProfession] = useState(professionOptions[0]);
  const [introTags, setIntroTags] = useState([]);
  const [heroImageUrl, setHeroImageUrl] = useState('');
  const [contactInfo, setContactInfo] = useState(DEFAULT_CONTACT_INFO);
  const [selectedServiceCities, setSelectedServiceCities] = useState([]);
  const [imagesGalleryUrls, setImagesGalleryUrls] = useState([]);
  const [templateType, setTemplateType] = useState(1);
  const [isPublished, setIsPublished] = useState(false);
  const [blockList, setBlockList] = useState([]);

  const valueProvided = {
    isEditMode,
    setIsEditMode,
    intro,
    setIntro,
    city,
    setCity,
    profession,
    setProfession,
    introTags,
    setIntroTags,
    heroImageUrl,
    setHeroImageUrl,
    contactInfo,
    setContactInfo,
    selectedServiceCities,
    setSelectedServiceCities,
    imagesGalleryUrls,
    setImagesGalleryUrls,
    templateType,
    setTemplateType,
    isPublished,
    setIsPublished,
    blockList,
    setBlockList,
  };
  return (
    <IntroCompileContext.Provider value={valueProvided}>{children}</IntroCompileContext.Provider>
  );
}
