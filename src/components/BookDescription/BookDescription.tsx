import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface BookDescriptionProps {
  description: string;
}

const BookDescription = ({ description }: BookDescriptionProps) => {
  return <Text style={styles.description}>{description}</Text>;
};

const styles = StyleSheet.create({
  description: {
    marginBottom: 16,
  },
});

export default BookDescription;
