import { colors, fontSizes, fontWeights, gutter } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 64,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `${colors.dark}dd`,
  },
  modal: {
    flex: 1,
    alignItems: 'flex-end',
  },
  wrapper: {
    top: 64,
    minWidth: 200,
    backgroundColor: colors.white,
    paddingVertical: gutter,
    paddingHorizontal: gutter * 3,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.light,
    paddingVertical: gutter * 1.5,
  },
  itemIcon: {
    marginRight: gutter,
    fontSize: fontSizes.large,
  },
  itemText: {
    fontFamily: fontWeights.SemiBold,
    fontSize: fontSizes.small,
  },
});
