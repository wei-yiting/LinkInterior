import { useEffect } from 'react';

export default function useEventListener(eventType, handler) {
  useEffect(() => {
    console.log('useEventListener ran!');
    document.addEventListener(eventType, handler);
    return () => document.removeEventListener(eventType, handler);
  }, [eventType, handler]);
}
