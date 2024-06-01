import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';

function Loader() {
  return (
    <ActivityIndicator
      testID="loader-activity-indicator"
      size="large"
      color="#0000ff"
      style={styles.loading}
    />
  );
}

const styles = StyleSheet.create({
  loading: {
    marginVertical: 16,
  },
});

export default Loader;
