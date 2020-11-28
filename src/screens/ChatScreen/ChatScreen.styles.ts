import { borderRadiusBase, colors, fontSizes, fontWeights, gutter, gutterLarge, gutterMedium } from '@theme';
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
  input: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: gutterMedium,
    paddingVertical: gutter,
    fontSize: fontSizes.small,
    fontFamily: fontWeights.Regular,
  },
  button: {
    borderRadius: 0,
    height: '100%',
  },
});
