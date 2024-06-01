import React from 'react';
import { render } from '@testing-library/react-native';
import AuthorList from './AuthorList';
import { getAuthors } from '../../test/fixtures/authors';

describe('AuthorList component', () => {
  it('renders the list of authors correctly', () => {
    const { getByText } = render(<AuthorList authors={getAuthors()} />);
    expect(getByText('Author(s):')).toBeTruthy();
    expect(getByText('Author 1')).toBeTruthy();
    expect(getByText('Author 2')).toBeTruthy();
    expect(getByText('Bio 1')).toBeTruthy();
    expect(getByText('Bio 2')).toBeTruthy();
  });
});
