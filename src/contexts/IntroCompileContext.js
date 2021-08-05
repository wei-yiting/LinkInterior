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
  const [templateType, setTemplateType] = useState(1);
  const [selectedHeroImage, setSelectedHeroImage] = useState(null);
  const [intro, setIntro] = useState('');
  const [city, setCity] = useState(allCityOptions[0]);
  const [profession, setProfession] = useState(professionOptions[0]);
  const [introTags, setIntroTags] = useState([]);
  const [heroImageUrl, setHeroImageUrl] = useState('');
  const [contactInfo, setContactInfo] = useState(DEFAULT_CONTACT_INFO);
  const [selectedServiceCities, setSelectedServiceCities] = useState([]);
  const [localImagesGalleryUrls, setLocalImagesGalleryUrls] = useState([]);
  const [selectedGalleryImages, setSelectedGalleryImages] = useState([]);
  const [isPublished, setIsPublished] = useState(false);
  const [blockList, setBlockList] = useState([]);
  const [emptyFieldReminder, setEmptyFieldReminder] = useState('');

  const valueProvided = {
    isEditMode,
    setIsEditMode,
    templateType,
    setTemplateType,
    selectedHeroImage,
    setSelectedHeroImage,
    heroImageUrl,
    setHeroImageUrl,
    intro,
    setIntro,
    city,
    setCity,
    profession,
    setProfession,
    introTags,
    setIntroTags,
    contactInfo,
    setContactInfo,
    selectedServiceCities,
    setSelectedServiceCities,
    selectedGalleryImages,
    setSelectedGalleryImages,
    localImagesGalleryUrls,
    setLocalImagesGalleryUrls,
    isPublished,
    setIsPublished,
    blockList,
    setBlockList,
    emptyFieldReminder,
    setEmptyFieldReminder,
  };
  return (
    <IntroCompileContext.Provider value={valueProvided}>{children}</IntroCompileContext.Provider>
  );
}
