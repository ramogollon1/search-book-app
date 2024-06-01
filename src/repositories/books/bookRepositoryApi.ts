import apiOpenLibraryClient from '@api/openLibrary';
import { Book, BookDetailResponse } from '@models/books';
import { BookRepository } from './bookRepository';

export class BookRepositoryApi implements BookRepository {
  async fetchBookDetails(bookId: string): Promise<BookDetailResponse> {
    const response = await apiOpenLibraryClient.get(`/works/${bookId}.json`);
    return response.data;
  }

  async fetchAuthorDetails(authorKey: string): Promise<any> {
    const response = await apiOpenLibraryClient.get(`${authorKey}.json`);
    return response.data;
  }

  async searchBooks(searchTerm: string, page?: number): Promise<Book[]> {
    console.log('searchBooks', { searchTerm, page });
    const response = await apiOpenLibraryClient.get(
      `/search.json?q=${encodeURIComponent(searchTerm)}&page=${page || 1}`,
    );
    return response.data.docs;
  }
}
