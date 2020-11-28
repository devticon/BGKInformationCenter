import { colors, gutter, shadow } from '@theme';
import { StyleSheet } from 'react-native';

const logoAspectRatio = 759 / 171;

export const styles = StyleSheet.create({
  header: {
    height: 64,
    backgroundColor: colors.white,
    paddingRight: gutter * 3,
    paddingLeft: gutter * 3,
    ...shadow(5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    flex: 0.5,
    alignItems: 'flex-start',
  },
  right: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  logo: {
    height: 40,
    width: Math.ceil(40 * logoAspectRatio),
  },
});
