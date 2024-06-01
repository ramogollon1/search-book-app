import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import BookList from './BookList';
import { getBooksFixture } from '../../test/fixtures/books';

const mockNextPage = jest.fn();

describe('BookList component', () => {
  test('render component correctly', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <BookList
          books={getBooksFixture()}
          isOfflineItem={false}
          isSearchingBooks={false}
          nextPage={mockNextPage}
        />
      </NavigationContainer>,
    );

    await waitFor(() => {
      expect(getByText('Example Book Title')).toBeTruthy();
    });
  });
});
