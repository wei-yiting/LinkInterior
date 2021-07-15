import { useState, useEffect } from 'react';
import { storage } from '../utils/firebase';

const useStorage = (file, setUrl) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    // reference
    const storageRef = storage.ref(file.name);
    storageRef.put(file).on(
      'state_changed',
      (snapshot) => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const fileUrl = await storageRef.getDownloadURL();
        setUrl(fileUrl);
      },
    );
  }, [file, setUrl]);
  return { progress, error };
};

export default useStorage;
