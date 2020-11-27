import { borderRadiusBase, colors, gutter, shadow } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabsContainer: {
    height: gutter * 6,
    borderTopStartRadius: borderRadiusBase,
    borderTopEndRadius: borderRadiusBase,
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingHorizontal: gutter,
    width: '100%',
    justifyContent: 'space-around',
    ...shadow(5),
  },
  tab: {
    borderRadius: 0,
    position: 'relative',
    height: '100%',
  },
  tabIcon: {
    fontSize: 28,
    color: colors.medium,
  },
  activeIcon: {
    color: colors.dark,
  },
  activeTabIndicator: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    height: 3,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
});
