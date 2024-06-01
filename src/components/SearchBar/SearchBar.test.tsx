import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  test('renders correctly', () => {
    const fetchBooks = jest.fn();
    const onSearchTermChange = jest.fn();
    const searchTerm = 'Test search';

    const { getByPlaceholderText, getByText } = render(
      <SearchBar
        fetchBooks={fetchBooks}
        searchTerm={searchTerm}
        onSearchTermChange={onSearchTermChange}
      />,
    );

    const inputElement = getByPlaceholderText('Search for books..');
    expect(inputElement.props.value).toBe(searchTerm);

    fireEvent.changeText(inputElement, 'New search term');
    expect(onSearchTermChange).toHaveBeenCalledWith('New search term');

    const searchButton = getByText('Search');
    fireEvent.press(searchButton);
    expect(fetchBooks).toHaveBeenCalledTimes(1);
  });
});
