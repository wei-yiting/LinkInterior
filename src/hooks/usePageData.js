import { useState, useEffect } from 'react';

export default function usePageData(collection, docId = '') {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    collection
      .doc(docId)
      .get()
      .then((snapshot) => {
        if (isMounted) {
          setData(snapshot.data());
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setData(null);
        }
      })
      .finally(() => isMounted && setLoading(false));
    return () => {
      isMounted = false;
    };
  }, [collection, docId]);
  return { loading, error, data };
}
