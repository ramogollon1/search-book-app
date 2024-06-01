import React from 'react';
import { Text, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import BookCover from '../components/BookCover';
import BookTitle from '../components/BookTitle';
import BookDescription from '../components/BookDescription';
import AuthorList from '../components/AuthorList';
import {
  useFetchBookDetails,
  useFetchAuthorDetails,
} from '../repositories/books/bookRepositoryHooks';

type BookDetailNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'BookDetail'
>;

const BookDetailScreen = ({ route }: BookDetailNavigationProp) => {
  const { bookId, first_publish_year } = route.params;
  const { data: bookDetails, isLoading, error } = useFetchBookDetails(bookId);
  const {
    data: authorDetails,
    isLoading: authorLoading,
    error: authorError,
  } = useFetchAuthorDetails(bookDetails?.authors[0]?.author.key || '');

  if (isLoading || authorLoading) {
    return <ActivityIndicator />;
  }

  if (error || authorError) {
    return <Text>{error?.message}</Text>;
  }

  if (!bookDetails) {
    return <Text>No book details available</Text>;
  }

  const { title, description, covers } = bookDetails;
  const hasCovers = covers && covers.length > 0;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {hasCovers && <BookCover coverId={covers[0]} />}
      <BookTitle title={title} firstPublishYear={first_publish_year} />
      {description && <BookDescription description={description.value} />}
      {authorDetails && authorDetails.length > 0 && (
        <AuthorList authors={authorDetails} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default BookDetailScreen;
