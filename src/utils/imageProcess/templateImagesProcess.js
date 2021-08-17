import {
  singleImageCompressAndStorage,
  multipleImagesCompressedAndStorage,
} from './imageCompressAndStorage';

export default function templateImagesProcess(heroImage, galleryImages) {
  const introImageProcessPromises = [];

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
