import { useEffect, useState } from 'react';
import { useLastSearchTerm } from './useStorageHooks';

export function useSearchTerm() {
  const [searchTerm, setSearchTerm] = useState('');
  const { getLastSearchTerm, saveLastSearchTerm } = useLastSearchTerm();

  useEffect(() => {
    getLastSearchTerm().then((lastSearchTerm) => {
      if (lastSearchTerm) {
        setSearchTerm(lastSearchTerm);
      }
    });
  }, []);

  return { searchTerm, setSearchTerm, saveLastSearchTerm };
}
