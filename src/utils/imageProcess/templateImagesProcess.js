// import { useContext } from 'react';
// import { IntroCompileContext } from '../contexts/IntroCompileContext';
import {
  singleImageCompressAndStorage,
  multipleImagesCompressedAndStorage,
} from './imageCompressAndStorage';

export default function templateImagesProcess(heroImage, galleryImages) {
  // const {
  //   selectedHeroImage,
  //   selectedGalleryImages,
  //   // blockList,
  //   // setUploadError,
  //   // setIsProcessingBlockImage,
  //   // blocksWithImageCompressedUrl,
  //   // setBlocksWithImageCompressedUrl,
  //   // setIsProcessingImages,
  // } = useContext(IntroCompileContext);

  const introImageProcessPromises = [];

  // useEffect(() => {
  // setIsProcessingImages(true);

  const compressedHeroImageUrl = singleImageCompressAndStorage(
    heroImage,
    'introHeroImage',
    1920,
    1.5,
  );
  introImageProcessPromises.push(compressedHeroImageUrl);

  const compressedGalleryImageUrls = multipleImagesCompressedAndStorage(
    galleryImages,
    'introGalleryImage',
    900,
    0.75,
  );

  introImageProcessPromises.push(compressedGalleryImageUrls);

  return Promise.all(introImageProcessPromises);
}
