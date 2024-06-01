import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/store';
import MainNavigator from './src/navigation/MainNavigator';
import { BookRepositoryProvider } from './src/context/BookRepositoryContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

if (__DEV__) {
  require('./ReactotronConfig');
}

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BookRepositoryProvider>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </BookRepositoryProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
