import { useState, useEffect } from 'react';

export default function useUpload(collection, docId, data) {
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    setUpdating(true);
    collection
      .doc(docId)
      .update(data)
      .then(() => {})
      .catch((err) => {
        setError(err);
      })
      .finally(() => setUpdating(false));
  }, [collection, docId]);

  return { updating, error };
}
