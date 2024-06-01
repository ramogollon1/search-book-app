import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface SearchBarProps {
  fetchBooks: () => void;
  searchTerm: string;
  onSearchTermChange: (newSearchTerm: string) => void;
}

const SearchBar = ({
  fetchBooks,
  searchTerm,
  onSearchTermChange,
}: SearchBarProps) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search for books.."
        value={searchTerm}
        onChangeText={onSearchTermChange}
        style={styles.input}
        autoCapitalize="none"
      />
      <Button title="Search" onPress={fetchBooks} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 8,
  },
});

export default SearchBar;
