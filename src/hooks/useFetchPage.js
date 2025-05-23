import { useState, useEffect } from 'react';
import { query, where, getDocs } from 'firebase/firestore';

export default function useFetchPage(collection, term, pageId = '') {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const pageIdToNum = parseInt(pageId, 10);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const q = query(collection, where(term, '==', pageIdToNum));

        const snapshot = await getDocs(q);

        if (isMounted) {
          snapshot.forEach((doc) => setData(doc.data()));
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [collection, term, pageIdToNum]);

  return { loading, error, data };
}
