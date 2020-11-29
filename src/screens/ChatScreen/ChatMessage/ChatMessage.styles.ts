import { borderRadiusBase, colors, gutter } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  messageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: gutter / 2,
  },
  messageText: {
    backgroundColor: colors.white,
    borderRadius: borderRadiusBase,
    padding: gutter,
    flexShrink: 1,
  },
  messageInfoText: {
    fontSize: 10,
    marginHorizontal: gutter,
    opacity: 0.5,
  },
});
