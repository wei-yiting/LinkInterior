import { storage } from '../firebase';
import imageCompress from './compressImage';

const imageCompressAndStorage = async (file, directory, width = 600, size = 0.5) => {
  return new Promise((resolve, reject) => {
    (async () => {
      const compressedFile = await imageCompress(file, width, size);
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

export default imageCompressAndStorage;
