import { Book } from '../../models/books';
import { urlImageCoverById } from '../../utils/constants';
import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

interface BookItemProps {
  item: Book;
  onPressItem: () => void;
  isOffline?: boolean;
}

const BookItem = ({ item, onPressItem, isOffline = false }: BookItemProps) => {
  return (
    <TouchableOpacity onPress={onPressItem} testID="book-item">
      <View style={styles.itemContainer}>
        {!item.cover_i || isOffline ? (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderText}>No preview to this book</Text>
          </View>
        ) : (
          <Image
            source={{
              uri: urlImageCoverById(item.cover_i),
            }}
            style={styles.coverImage}
          />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>
            Author: {item.author_name?.join(', ')}
          </Text>
          <Text style={styles.year}>
            First Publish Year: {item.first_publish_year}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  author: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  year: {
    fontSize: 16,
  },
  placeholderContainer: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
  },
  coverImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
  },
});

export default BookItem;
