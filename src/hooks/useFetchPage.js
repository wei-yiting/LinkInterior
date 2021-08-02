import { useState, useEffect } from 'react';

export default function useFetchPage(collection, term, pageId = '') {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const pageIdToNum = parseInt(pageId, 10);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    collection
      .where(term, '==', pageIdToNum)
      .get()
      .then((querySnapshot) => {
        if (isMounted) {
          querySnapshot.forEach((doc) => {
            setData(doc.data());
            setError(null);
          });
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
  }, []);
  return { loading, error, data };
}
