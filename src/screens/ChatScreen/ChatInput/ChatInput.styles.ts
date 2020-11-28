import { colors, fontSizes, fontWeights, gutter, gutterMedium } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
