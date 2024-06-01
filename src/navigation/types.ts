import { Book } from '@models/books';

export type BookDetail = {
  bookId: string;
  first_publish_year: string | number;
};

export type RootStackParamList = {
  BookList: Book[];
  BookDetail: BookDetail;
};
