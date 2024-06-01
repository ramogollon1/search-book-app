import { Book, BookDetailResponse } from '@models/books';

export function getBookFixture(): Book {
  return {
    key: 'example-key',
    authors: [{ key: 'Example Author' }],
    author_name: ['Example'],
    title: 'Example Book Title',
    description: { value: 'Example book description' },
    first_publish_year: 2022,
  };
}

export function getBookDetailFixture(): BookDetailResponse {
  return {
    title: 'book',
    authors: [
      {
        type: {
          key: 'works/2342',
        },
        author: {
          key: 'works/2342',
        },
        key: 'works/2342',
      },
    ],
    key: 'works/2342',
    covers: [2342],
  };
}
