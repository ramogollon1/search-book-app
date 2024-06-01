import { urlImageCoverById } from '../../utils/constants';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface BookCoverProps {
  coverId: number | string;
}

const BookCover = ({ coverId }: BookCoverProps) => {
  return (
    <Image
      testID="book-cover-image"
      source={{ uri: urlImageCoverById(coverId) }}
      style={styles.coverImage}
    />
  );
};

const styles = StyleSheet.create({
  coverImage: {
    width: 200,
    height: 300,
    marginBottom: 16,
  },
});

export default BookCover;
