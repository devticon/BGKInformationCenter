import { borderRadiusBase, colors, fontSizes, fontWeights, gutter, gutterLarge, gutterMedium } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: gutterLarge,
  },
  messageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: gutter / 2,
  },
  messageText: {
    backgroundColor: colors.white,
    borderRadius: borderRadiusBase,
    padding: gutter,
  },
  messageInfoText: {
    fontSize: 10,
    marginHorizontal: gutter,
    opacity: 0.5,
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
