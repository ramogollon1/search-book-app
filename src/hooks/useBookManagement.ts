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
import {
  MAX_ITEMS_SEARCH_INPUT,
  PAGE_PAGINATION_SIZE,
} from '../utils/constants';

export function useBookManagement(isOffline: boolean) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.books);
  const { getOfflineBooks, saveBooks } = useOfflineBooks();
  const { getLastSearchTerm, saveLastSearchTerm } = useLastSearchTerm();
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const {
    data: onlineBooks,
    isLoading: isSearchingBooks,
    error: searchBooksError,
  } = useSearchBooks(searchTerm);

  useEffect(() => {
    getLastSearchTerm().then((lastSearchTerm) => {
      if (lastSearchTerm) {
        setSearchTerm(lastSearchTerm);
      }
    });
  }, []);

  useEffect(() => {
    if (onlineBooks) {
      setAllBooks(onlineBooks);
      setBooks(onlineBooks.slice(0, PAGE_PAGINATION_SIZE));
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
    if (searchTerm.length > MAX_ITEMS_SEARCH_INPUT) {
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
    setAllBooks([]);
    setBooks([]);
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
    const nextBooks = allBooks.slice(
      page * PAGE_PAGINATION_SIZE,
      (page + 1) * PAGE_PAGINATION_SIZE,
    );
    setBooks((prevBooks) => [...prevBooks, ...nextBooks]);
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
