import { colors, fontSizes, fontWeights } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    width: 32,
    height: 32,
    borderRadius: 99,
    backgroundColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fontWeights.Bold,
    fontSize: fontSizes.caption,
    color: colors.white,
  },
});
