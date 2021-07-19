import { storage } from '../index';

const multipleImagesUpload = (images, urlsSetter) => {
  const promises = [];
  images.forEach((file) => {
    const uploadTask = storage.ref(`images/${file.name}`).put(file);
    promises.push(uploadTask);
    uploadTask.on(
      'state_changed',
      () => {},
      (error) => {
        console.log(error);
      },
      async () => {
        await storage
          .ref('images')
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            urlsSetter((prevState) => [...prevState, url]);
          });
      },
    );
  });
  Promise.all(promises)
    .then()
    .catch((err) => console.log(err));
};

export default multipleImagesUpload;
