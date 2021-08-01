import { storage } from '../firebase';
import compressImage from './compressImage';

export const singleImageCompressAndStorage = async (file, directory, width = 600, size = 0.5) => {
  return new Promise((resolve, reject) => {
    (async () => {
      const compressedFile = await compressImage(file, width, size);
      const storageRef = storage.ref(`${directory}/${file.name}`);
      storageRef.put(compressedFile).on(
        'state_changed',
        () => {},
        (err) => {
          reject(err);
        },
        async () => {
          const fileUrl = await storageRef.getDownloadURL();
          resolve(fileUrl);
        },
      );
    })();
  });
};

export const multipleImagesCompressedAndStorage = async (
  files,
  directory,
  width = 900,
  size = 1,
) => {
  const promises = [];
  files.forEach((file) => {
    const fileCompressedUrl = new Promise((resolve, reject) => {
      (async () => {
        const compressedFile = await compressImage(file, width, size);
        const storageRef = storage.ref(`${directory}/${file.name}`);
        storageRef.put(compressedFile).on(
          'state_changed',
          () => {},
          (err) => {
            reject(err);
          },
          async () => {
            const fileUrl = await storageRef.getDownloadURL();
            resolve(fileUrl);
          },
        );
      })();
    });
    promises.push(fileCompressedUrl);
  });
  return Promise.all(promises);
};
