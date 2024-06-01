import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function BooksNotFound() {
  return (
    <View style={styles.noBooksContainer} testID="no-books-container">
      <Text style={styles.noBooksText}>
        No books were found with that search term.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  noBooksContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  noBooksText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default BooksNotFound;
