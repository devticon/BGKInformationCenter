import { borderRadiusBase, colors, fontSizes, fontWeights, gutter } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: `${colors.dark}dd`,
    padding: gutter * 3,
    justifyContent: 'center',
  },
  modalTop: {
    justifyContent: 'flex-start',
    paddingTop: gutter * 11,
  },
  modal: {
    width: '100%',
    backgroundColor: colors.light,
    borderRadius: borderRadiusBase,
  },
  modalHeader: {
    borderBottomWidth: 1,
    borderColor: `${colors.medium}66`,
    paddingHorizontal: gutter,
    paddingVertical: gutter * 2,
  },
  modalHeaderText: {
    fontSize: fontSizes.normal,
    fontFamily: fontWeights.Bold,
    textAlign: 'center',
  },
  modalHeaderIcon: {
    position: 'absolute',
    right: 0,
    top: 5,
  },
  modalBody: {
    padding: gutter * 3,
  },
  modalFooter: {},
});
