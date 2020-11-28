import { gutterMedium } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  info: {
    maxWidth: '75%',
    textAlign: 'center',
    marginBottom: gutterMedium,
  },
});
