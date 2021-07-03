import { storage } from './index';

const imageUpload = (file, urlSetter, progressSetter) => {
  const uploadTask = storage.ref(`images/${file.name}`).put(file);
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      progressSetter(progress);
    },
    (error) => {
      console.log(error);
    },
    () => {
      storage
        .ref('images')
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          urlSetter(url);
        });
    },
  );
};

export default imageUpload;
