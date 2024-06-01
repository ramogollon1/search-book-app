import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar/SearchBar';
import BookList from '../components/BookList';
import { useBookManagement } from '../hooks/useBookManagement';
import { useNetworkStatus } from '../hooks/useNetworkStatus';
import { useOfflineBooks } from '../hooks/useStorageHooks';
import { PAGE_PAGINATION_SIZE } from '../utils/constants';

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
  } = useBookManagement(isOffline);
  const { getOfflineBooks } = useOfflineBooks();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (!isSearchingBooks && books.length < PAGE_PAGINATION_SIZE * page) {
      checkNetworkStatus();
    }
  }, [isSearchingBooks, books, page]);

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
          setPage={setPage}
        />
      )}
      {showOnlineBooks && (
        <BookList
          books={books}
          isOfflineItem={isOffline}
          isSearchingBooks={isSearchingBooks}
          setPage={setPage}
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
