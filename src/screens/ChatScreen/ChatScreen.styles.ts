import { borderRadiusBase, colors, gutter, gutterLarge, gutterMedium } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: gutterLarge,
  },
  message: {
    backgroundColor: colors.white,
    borderRadius: borderRadiusBase,
    marginBottom: gutter,
    padding: gutter,
  },
});
