import React, { useCallback, useRef } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BookDetail, RootStackParamList } from '../../navigation/types';
import BooksNotFound from '../../components/BooksNotFound';
import BookItem from '../../components/BookItem';
import { Book, BookListProps } from '../../models/books';

const BookList = ({
  books,
  isOfflineItem,
  isSearchingBooks,
  setPage,
}: BookListProps) => {
  const flatListRef = useRef<FlatList | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigateToBookDetail = ({
    bookId,
    first_publish_year,
  }: BookDetail) => {
    const cleanedBookId = bookId.replace('/works/', '');
    navigation.navigate('BookDetail', {
      bookId: cleanedBookId,
      first_publish_year: first_publish_year,
    });
  };

  const renderItem = ({ item }: { item: Book }) => (
    <BookItem
      item={item}
      onPressItem={() =>
        handleNavigateToBookDetail({
          bookId: item.key,
          first_publish_year: item.first_publish_year,
        })
      }
      isOffline={isOfflineItem}
    />
  );

  if (books.length === 0) return <BooksNotFound />;

  return (
    <FlatList
      ref={flatListRef}
      data={books}
      keyExtractor={(_, index) => `itemKey_${index}`}
      renderItem={renderItem}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() =>
        isSearchingBooks ? (
          <ActivityIndicator style={{ marginVertical: 20 }} />
        ) : null
      }
    />
  );
};

export default BookList;
