import React from 'react';
import { render } from '@testing-library/react-native';
import BooksNotFound from './BooksNotFound';

describe('BooksNotFound component', () => {
  test('renders correctly', () => {
    const { getByText, getByTestId } = render(<BooksNotFound />);
    const noBooksContainer = getByTestId('no-books-container');
    expect(noBooksContainer).toBeDefined();

    const noBooksText = getByText('No books were found with that search term.');
    expect(noBooksText).toBeDefined();
    expect(noBooksText.props.style).toMatchObject({
      fontSize: 18,
      textAlign: 'center',
    });
  });
});
