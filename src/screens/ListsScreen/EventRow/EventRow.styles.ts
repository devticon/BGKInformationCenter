import { fontSizes, fontWeights, gutter, gutterLarge } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    paddingHorizontal: gutterLarge,
    paddingVertical: gutter,
  },
  name: {
    fontSize: fontSizes.normal,
    fontFamily: fontWeights.SemiBold,
  },
  modified: {
    fontSize: fontSizes.caption,
    marginTop: gutter / 2,
  },
});
