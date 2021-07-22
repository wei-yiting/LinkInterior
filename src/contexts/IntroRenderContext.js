import React, { createContext } from 'react';

import { serviceIntroCollection } from '../utils/firebase/index';
import usePageData from '../hooks/usePageData';

export const IntroRenderContext = createContext();

export default function IntroRenderContextProvider({ children, pageId }) {
  const { error, data, loading } = usePageData(serviceIntroCollection, pageId);

  let valueProvided = {};
  if (data) {
    valueProvided = {
      error,
      loading,
      isPublish: data.isPublished,
      templateType: data.templateType,
      blocks: data.blocks,
      companyName: data.companyName,
      heroImageUrl: data.templateContent.heroImageUrl,
      intro: data.templateContent.intro,
      location: data.templateContent.location,
      profession: data.templateContent.profession,
      introTags: data.templateContent.introTags,
      contactInfo: data.templateContent.contact,
      serviceArea: data.templateContent.serviceArea,
      imageGalleryUrls: data.templateContent.imageGalleryUrls,
    };
  }
  return (
    !loading && (
      <IntroRenderContext.Provider value={valueProvided}>{children}</IntroRenderContext.Provider>
    )
  );
}
