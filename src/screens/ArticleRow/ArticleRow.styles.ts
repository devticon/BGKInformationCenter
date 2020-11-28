import { fontSizes, fontWeights, gutter, gutterLarge, gutterMedium } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    paddingHorizontal: gutterLarge,
    paddingVertical: gutter,
    flexDirection: 'row',
  },
  left: {
    width: '60%',
    paddingVertical: gutter,
  },
  right: {
    width: '40%',
  },
  title: {
    fontSize: fontSizes.normal,
    fontFamily: fontWeights.SemiBold,
    marginRight: gutterMedium,
    lineHeight: 20,
  },
  footer: {
    fontSize: fontSizes.caption,
    marginTop: gutter,
    lineHeight: 20,
  },
  image: {
    width: '100%',
    height: 104,
  },
});
