import { useState, useEffect } from 'react';

export default function useUpload(collection, docId, data) {
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setUploading(true);
    collection
      .doc(docId)
      .set(data)
      .then(() => {})
      .catch((err) => {
        setError(err);
      })
      .finally(() => setUploading(false));
  }, [collection, docId]);

  return { uploading, error };
}
