import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useBookRepository } from '../../hooks/useBookRepository';
import { Book, BookDetailResponse } from '../../models/books';
import { MAX_ITEMS_SEARCH_INPUT } from '../../utils/constants';

export function useFetchBookDetails(
  bookId: string,
  options?: UseQueryOptions<BookDetailResponse, Error>,
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
  options?: UseQueryOptions<any, Error>,
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
  options?: UseQueryOptions<Book[], Error>,
) {
  const bookRepository = useBookRepository();

  return useQuery<Book[]>({
    queryKey: ['searchBooks', searchTerm],
    queryFn: () => bookRepository.searchBooks(searchTerm),
    enabled: !!searchTerm && searchTerm.length > MAX_ITEMS_SEARCH_INPUT,
    retry: 1,
    staleTime: 60000,
    ...options,
  });
}
