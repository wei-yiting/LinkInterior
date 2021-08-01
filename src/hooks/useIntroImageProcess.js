import { useContext } from 'react';
import { IntroCompileContext } from '../contexts/IntroCompileContext';
import {
  singleImageCompressAndStorage,
  multipleImagesCompressedAndStorage,
} from '../utils/imageProcess/imageCompressAndStorage';

export default function useIntroImageProcess() {
  const {
    selectedHeroImage,
    selectedGalleryImages,
    // blockList,
    // setUploadError,
    // setIsProcessingBlockImage,
    // blocksWithImageCompressedUrl,
    // setBlocksWithImageCompressedUrl,
    // setIsProcessingImages,
  } = useContext(IntroCompileContext);

  const introImageProcessPromises = [];

  // useEffect(() => {
  // setIsProcessingImages(true);

  const compressedHeroImageUrl = singleImageCompressAndStorage(
    selectedHeroImage,
    'introHeroImage',
    1920,
    1.5,
  );
  introImageProcessPromises.push(compressedHeroImageUrl);

  const compressedGalleryImageUrls = multipleImagesCompressedAndStorage(
    selectedGalleryImages,
    'introGalleryImage',
    900,
    0.75,
  );

  introImageProcessPromises.push(compressedGalleryImageUrls);

  // (async () => {
  //   // setIsProcessingBlockImage(true);
  //   await blockList.forEach(async (block, idx) => {
  //     if (block.imageFile) {
  //       try {
  //         const compressedBlockImageUrl = await singleImageCompressAndStorage(
  //           block.imageFile,
  //           'blockImage',
  //           900,
  //           0.75,
  //         );
  //         setBlocksWithImageCompressedUrl(
  //           blocksWithImageCompressedUrl.map((blockContent, i) => {
  //             if (i === idx) {
  //               return { ...blockContent, image: compressedBlockImageUrl };
  //             }
  //             return blockContent;
  //           }),
  //         );
  //       } catch {
  //         // setUploadError('在處理上傳圖檔時發生錯誤');
  //       }
  //     }
  //   });
  //   // setIsProcessingBlockImage(false);
  // })();
  // }, []);

  return Promise.all(introImageProcessPromises);
}
