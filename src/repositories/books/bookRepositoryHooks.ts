import { QueryOptions, useQuery } from '@tanstack/react-query';
import { useBookRepository } from '../../hooks/useBookRepository';
import { Book, BookDetailResponse } from '../../models/books';

export function useFetchBookDetails(
  bookId: string,
  options?: QueryOptions<BookDetailResponse>,
) {
  const bookRepository = useBookRepository();

  return useQuery<BookDetailResponse>({
    queryKey: ['fetchBookDetails', bookId],
    queryFn: () => bookRepository.fetchBookDetails(bookId),
    ...options,
  });
}

export function useFetchAuthorDetails(
  authorKey: string,
  options?: QueryOptions<any>,
) {
  const bookRepository = useBookRepository();

  return useQuery<any>({
    queryKey: ['fetchAuthorDetails', authorKey],
    queryFn: () => bookRepository.fetchAuthorDetails(authorKey),
    ...options,
  });
}

export function useSearchBooks(
  searchTerm: string,
  options?: QueryOptions<Book[]>,
  page?: number,
) {
  const bookRepository = useBookRepository();

  return useQuery<Book[]>({
    queryKey: ['searchBooks', searchTerm],
    queryFn: () => bookRepository.searchBooks(searchTerm, page),
    enabled: !!searchTerm && searchTerm.length > 3,
    ...options,
  });
}
