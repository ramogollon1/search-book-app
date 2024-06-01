import { Author } from '@models/authors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AuthorListProps {
  authors: Author[];
}

const AuthorList = ({ authors }: AuthorListProps) => {
  return (
    <View style={styles.authorContainer}>
      <Text style={styles.authorTitle}>Author(s):</Text>
      {authors.map((author, index) => (
        <View key={index} style={styles.authorDetailsContainer}>
          <Text style={styles.authorName}>{author.name}</Text>
          {author.bio && (
            <Text style={styles.authorBio}>
              {typeof author.bio === 'string' ? author.bio : author.bio.value}
            </Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  authorContainer: {
    marginBottom: 16,
  },
  authorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  authorDetailsContainer: {
    marginBottom: 8,
  },
  authorName: {
    fontSize: 16,
  },
  authorBio: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default AuthorList;
