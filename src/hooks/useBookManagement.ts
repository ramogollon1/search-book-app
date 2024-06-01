import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBooksStart,
  fetchBooksSuccess,
  fetchBooksFailure,
} from '../redux/slices/bookSlice';
import { useSearchBooks } from '../repositories/books/bookRepositoryHooks';
import { useOfflineBooks, useLastSearchTerm } from './useStorageHooks';
import { RootState } from '../redux/store';
import { Book } from '../models/books';

export function useBookManagement(isOffline: boolean) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.books);
  const { getOfflineBooks, saveBooks } = useOfflineBooks();
  const { getLastSearchTerm, saveLastSearchTerm } = useLastSearchTerm();
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getLastSearchTerm().then((lastSearchTerm) => {
      if (lastSearchTerm) {
        setSearchTerm(lastSearchTerm);
      }
    });
  }, []);

  const {
    data: onlineBooks,
    isLoading: isSearchingBooks,
    error: searchBooksError,
  } = useSearchBooks(searchTerm, undefined, page);

  useEffect(() => {
    if (onlineBooks) {
      setBooks((prevBooks) => [...prevBooks, ...onlineBooks]);
      dispatch(fetchBooksSuccess(onlineBooks));
      saveBooks(onlineBooks);
    }
  }, [onlineBooks]);

  useEffect(() => {
    if (searchBooksError) {
      dispatch(fetchBooksFailure('An unknown error occurred'));
      getOfflineBooks();
    }
  }, [searchBooksError]);

  useEffect(() => {
    if (searchTerm.length > 3) {
      const typingTimeout = setTimeout(() => {
        checkNetworkStatus();
      }, 500);

      return () => clearTimeout(typingTimeout);
    }
  }, [searchTerm]);

  const fetchBooks = () => {
    dispatch(fetchBooksStart());
  };

  const checkNetworkStatus = () => {
    if (isOffline) {
      getOfflineBooks();
    } else {
      fetchBooks();
    }
  };

  const handleSearchTermChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    saveLastSearchTerm(newSearchTerm);
    setPage(1);
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return {
    books,
    loading,
    error,
    isSearchingBooks,
    searchBooksError,
    checkNetworkStatus,
    searchTerm,
    handleSearchTermChange,
    nextPage,
  };
}
