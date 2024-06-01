import { useContext } from 'react';
import { BookRepositoryContext } from '../context/BookRepositoryContext';

export function useBookRepository() {
  const bookRepository = useContext(BookRepositoryContext);

  if (!bookRepository) {
    throw new Error('BookRepository is not provided');
  }

  return bookRepository;
}
