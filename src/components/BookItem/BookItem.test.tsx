import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BookItem from './BookItem';
import { getBooksFixture } from '../../test/fixtures/books';

describe('BookItem', () => {
  test('renders correctly with book information', () => {
    const { getByText } = render(
      <BookItem item={getBooksFixture()[0]} onPressItem={() => {}} />,
    );
    expect(getByText('Example Book Title')).toBeTruthy();
  });

  test('calls onPressItem function when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <BookItem item={getBooksFixture()[0]} onPressItem={onPressMock} />,
    );

    fireEvent.press(getByTestId('book-item'));

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
