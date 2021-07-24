import { storage } from '../index';

const imageUpload = (file) => {
  const uploadTask = storage.ref(`images/${file.name}`).put(file);
  uploadTask.on(
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
        .then(() => {
          console.log('upload!');
        });
    },
  );
};

export default imageUpload;
