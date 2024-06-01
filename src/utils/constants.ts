export const OPEN_LIBRARY_API_URL = 'https://openlibrary.org';
export const SEARCH_BOOK_URL = `${OPEN_LIBRARY_API_URL}/search.json`;
export const FETCH_BOOK_DESCRIPTION_URL = `${OPEN_LIBRARY_API_URL}/works`;

export const urlImageCoverById = (coverId: number | string) =>
  `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;

export const PAGE_PAGINATION_SIZE = 5;

export const MAX_ITEMS_SEARCH_INPUT = 3;

export const SEARCH_TERM_DEFAULT = 'react';
