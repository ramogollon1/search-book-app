import React from 'react';
import { render } from '@testing-library/react-native';
import BookDescription from './BookDescription';

describe('BookDescription component', () => {
  it('renders the description correctly', () => {
    const description = 'This is a book description';

    const { getByText } = render(<BookDescription description={description} />);

    expect(getByText(description)).toBeTruthy();
  });
});
