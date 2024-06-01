import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface BookTitleProps {
  title: string;
  firstPublishYear?: string | number;
}

const BookTitle = ({ title, firstPublishYear }: BookTitleProps) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      {firstPublishYear && (
        <Text style={styles.year}>First Published: {firstPublishYear}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  year: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default BookTitle;
