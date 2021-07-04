import { storage } from './index';

const imageUpload = (file, list, listSetter, idx) => {
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
        .then((url) => {
          listSetter(
            list.map((block, index) => {
              if (index === idx) {
                return { ...block, imageUrl: url };
              }
              return block;
            }),
          );
        });
    },
  );
};

export default imageUpload;
