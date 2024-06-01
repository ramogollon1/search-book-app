import React, { useRef } from 'react';
import { FlatList } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BookDetail, RootStackParamList } from '../../navigation/types';
import BooksNotFound from '../../components/BooksNotFound';
import BookItem from '../../components/BookItem';
import { Book } from '../../models/books';
import Loader from '../../components/Loader';

interface BookListProps {
  books: Book[];
  isOfflineItem: boolean;
  isSearchingBooks: boolean;
  nextPage: () => void;
}

const BookList = ({
  books,
  isOfflineItem,
  isSearchingBooks,
  nextPage,
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

  const loadMoreBooks = () => {
    if (!isSearchingBooks) {
      nextPage();
    }
  };

  return (
    <FlatList
      ref={flatListRef}
      data={books}
      keyExtractor={(_, index) => `itemKey_${index}`}
      renderItem={renderItem}
      onEndReached={loadMoreBooks}
      onEndReachedThreshold={0.1}
      ListFooterComponent={() => (isSearchingBooks ? <Loader /> : null)}
    />
  );
};

export default BookList;
