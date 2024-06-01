import { Book } from '@models/books';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useLastSearchTerm() {
  const getLastSearchTerm = async () => {
    try {
      const lastSearchTerm = await AsyncStorage.getItem('lastSearchTerm');
      return lastSearchTerm;
    } catch (err) {
      console.error(
        'Error retrieving last search term from AsyncStorage:',
        err,
      );
      return null;
    }
  };

  const saveLastSearchTerm = async (searchTerm: string) => {
    try {
      await AsyncStorage.setItem('lastSearchTerm', searchTerm);
    } catch (err) {
      console.error('Error saving last search term to AsyncStorage:', err);
    }
  };

  return { getLastSearchTerm, saveLastSearchTerm };
}

export function useOfflineBooks() {
  const getOfflineBooks = async (): Promise<Book[]> => {
    try {
      const storedBooks = await AsyncStorage.getItem('books');
      return storedBooks ? JSON.parse(storedBooks) : [];
    } catch (err) {
      console.error('Error retrieving offline books from AsyncStorage:', err);
      return [];
    }
  };

  const saveBooks = async (booksData: Book[]): Promise<void> => {
    try {
      await AsyncStorage.setItem('books', JSON.stringify(booksData));
    } catch (err) {
      console.error('Error saving books to AsyncStorage:', err);
    }
  };

  return { getOfflineBooks, saveBooks };
}
