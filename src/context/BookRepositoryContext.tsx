import React, { createContext, ReactNode } from 'react';
import { BookRepository } from '../repositories/books/bookRepository';
import { BookRepositoryApi } from '../repositories/books/bookRepositoryApi';

const defaultBookRepository: BookRepository = new BookRepositoryApi();

export const BookRepositoryContext = createContext<BookRepository>(
  defaultBookRepository,
);

interface BookRepositoryProviderProps {
  children: ReactNode;
  repository?: BookRepository;
}

export function BookRepositoryProvider({
  children,
  repository = defaultBookRepository,
}: BookRepositoryProviderProps) {
  return (
    <BookRepositoryContext.Provider value={repository}>
      {children}
    </BookRepositoryContext.Provider>
  );
}
