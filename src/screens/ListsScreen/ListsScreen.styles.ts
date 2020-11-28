import { fontSizes, fontWeights, gutter, gutterLarge, gutterMedium } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  list: {
    paddingBottom: gutterMedium,
  },
  title: {
    paddingHorizontal: gutterLarge,
    paddingBottom: gutter,
    marginTop: gutterLarge,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: fontSizes.medium,
    marginLeft: gutterMedium,
    fontFamily: fontWeights.Bold,
  },
});
