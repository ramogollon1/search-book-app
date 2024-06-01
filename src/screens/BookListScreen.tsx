import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar/SearchBar';
import BookList from '../components/BookList';
import { useBookManagement } from '../hooks/useBookManagement';
import { useNetworkStatus } from '../hooks/useNetworkStatus';
import { useOfflineBooks } from '../hooks/useStorageHooks';

const BookListScreen = () => {
  const isOffline = useNetworkStatus();
  const {
    books,
    loading,
    error,
    isSearchingBooks,
    searchBooksError,
    checkNetworkStatus,
    searchTerm,
    handleSearchTermChange,
    nextPage,
  } = useBookManagement(isOffline);
  const { getOfflineBooks } = useOfflineBooks();

  const showOfflineBooks =
    !loading && !error && books.length === 0 && getOfflineBooks.length > 0;
  const showOnlineBooks =
    !isSearchingBooks && !searchBooksError && books.length > 0;

  return (
    <View style={styles.container}>
      <SearchBar
        fetchBooks={checkNetworkStatus}
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
      />
      {isSearchingBooks && <ActivityIndicator />}
      {searchBooksError && <Text>{searchBooksError.message}</Text>}
      {showOfflineBooks && (
        <BookList
          books={books}
          isOfflineItem={isOffline}
          isSearchingBooks={isSearchingBooks}
          nextPage={nextPage}
        />
      )}
      {showOnlineBooks && (
        <BookList
          books={books}
          isOfflineItem={isOffline}
          isSearchingBooks={isSearchingBooks}
          nextPage={nextPage}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

export default BookListScreen;
