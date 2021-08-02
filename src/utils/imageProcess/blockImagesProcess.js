import { multipleImagesCompressedAndStorage } from './imageCompressAndStorage';

export default async function blockImagesProcess(blockList) {
  return new Promise((resolve, reject) => {
    const blocksWithoutImage = blockList.map((block, i) => {
      return { id: i, type: block.type, text: block.text };
    });

    const blockImages = {};
    blockList.forEach((block, index) => {
      if (block.imageFile) {
        blockImages[index] = block.imageFile;
      }
    });

    const indexArray = Object.keys(blockImages);
    const imagesArray = Object.values(blockImages);

    const blocksWithImageCompressedUrl = [...blocksWithoutImage];

    multipleImagesCompressedAndStorage(imagesArray)
      .then((urlArray) => {
        indexArray.forEach((index, i) => {
          blocksWithImageCompressedUrl[index].image = urlArray[i];
        });

        console.log(blocksWithImageCompressedUrl);

        resolve(blocksWithImageCompressedUrl);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
