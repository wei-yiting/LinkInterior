import { storage } from '../index';

const imageUpload = async (file) => {
  const uploadTask = storage.ref(`images/${file.name}`).put(file);
  const storageUrl = uploadTask.on(
    'state_changed',
    () => {},
    (error) => {
      console.log(error);
    },
    () => {
      storage
        .ref('images')
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          return url;
        });
    },
  );
  console.log(storageUrl);
  return storageUrl;
};

export default imageUpload;
