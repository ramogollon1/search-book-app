import React from 'react';
import { render } from '@testing-library/react-native';
import BookTitle from './BookTitle';

describe('BookTitle component', () => {
  test('renders title correctly', () => {
    const title = 'Test Book Title';
    const { getByText } = render(<BookTitle title={title} />);
    const titleElement = getByText(title);
    expect(titleElement).toBeDefined();
    expect(titleElement.props.style).toMatchObject({
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    });
  });

  test('renders title with first publish year correctly', () => {
    const title = 'Test Book Title';
    const firstPublishYear = '2022';
    const { getByText } = render(
      <BookTitle title={title} firstPublishYear={firstPublishYear} />,
    );
    const titleElement = getByText(title);
    expect(titleElement).toBeDefined();
    expect(titleElement.props.style).toMatchObject({
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    });

    const yearElement = getByText(`First Published: ${firstPublishYear}`);
    expect(yearElement).toBeDefined();
    expect(yearElement.props.style).toMatchObject({
      fontSize: 16,
      marginBottom: 8,
    });
  });
});
