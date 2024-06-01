import { Book, BookDetailResponse } from '@models/books';
import { BookRepository } from './bookRepository';
import { getBookDetailFixture } from '@test/fixtures/getBookFixture';

export class BookRepositoryFake implements BookRepository {
  async fetchBookDetails(bookId: string): Promise<BookDetailResponse> {
    return Promise.resolve(getBookDetailFixture());
  }

  async fetchAuthorDetails(authorKey: string): Promise<any> {
    return Promise.resolve({});
  }

  async searchBooks(searchTerm: string): Promise<Book[]> {
    return Promise.resolve([]);
  }
}
