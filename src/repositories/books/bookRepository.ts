import { Book, BookDetailResponse } from '@models/books';

export interface BookRepository {
  fetchBookDetails(bookId: string): Promise<BookDetailResponse>;
  fetchAuthorDetails(authorKey: string): Promise<any>;
  searchBooks(searchTerm: string, page?: number): Promise<Book[]>;
}
