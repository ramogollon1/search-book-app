import apiOpenLibraryClient from '../../api/openLibrary';
import { Book, BookDetailResponse } from '../../models/books';
import { BookRepository } from './bookRepository';

export class BookRepositoryApi implements BookRepository {
  async fetchBookDetails(bookId: string): Promise<BookDetailResponse> {
    try {
      const response = await apiOpenLibraryClient.get(`/works/${bookId}.json`);
      return response.data;
    } catch (error) {
      console.error('Error fetching book details:', error);
      throw new Error('Failed to fetch book details');
    }
  }

  async fetchAuthorDetails(authorKey: string): Promise<any> {
    try {
      const response = await apiOpenLibraryClient.get(`${authorKey}.json`);
      return response.data;
    } catch (error) {
      console.error('Error fetching author details:', error);
      throw new Error('Failed to fetch author details');
    }
  }

  async searchBooks(searchTerm: string): Promise<Book[]> {
    console.log({ searchTerm });
    try {
      const response = await apiOpenLibraryClient.get(
        `/search.json?q=${encodeURIComponent(searchTerm)}`,
        { timeout: 5000 },
      );
      return response.data.docs;
    } catch (error) {
      console.error('Error searching books:', error);
      throw new Error('Failed to search books');
    }
  }
}
