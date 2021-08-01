import { useContext } from 'react';

import { IntroCompileContext } from '../contexts/IntroCompileContext';

export default function useIntroInfo() {
  const {
    templateType,
    intro,
    city,
    profession,
    introTags,
    contactInfo,
    selectedServiceCities,
    blockList,
    // setIsProcessingImages,
    // isProcessingImages,
    // isProcessingBlockImage,
    // blocksWithImageCompressedUrl,
    // setBlocksWithImageCompressedUrl,
  } = useContext(IntroCompileContext);
  return {
    templateType,
    intro,
    city,
    profession,
    introTags,
    contactInfo,
    selectedServiceCities,
    blockList,
  };
}
