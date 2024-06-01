import React from 'react';
import { render } from '@testing-library/react-native';
import BookCover from './BookCover';

describe('BookCover component', () => {
  it('renders the book cover correctly', () => {
    const coverId = 'exampleCoverId';
    const { getByTestId } = render(<BookCover coverId={coverId} />);
    expect(getByTestId('book-cover-image')).toBeTruthy();
  });
});
