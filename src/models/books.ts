import { Authors } from './authors';

export interface Book {
  key: string;
  title: string;
  author_name: string[];
  authors: { key: string }[];
  first_publish_year: string | number;
  cover_i?: number;
  description?: { value: string };
}

export interface BookDetailResponse {
  title: string;
  authors: Authors[];
  key: string;
  covers: string[] | number[];
  description?: { value: string };
}
