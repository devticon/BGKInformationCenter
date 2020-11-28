import { colors, fontSizes, fontWeights, gutterLarge, gutterMedium } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  teamName: {
    paddingHorizontal: gutterLarge,
    paddingBottom: gutterMedium,
    marginTop: gutterLarge,
    fontSize: fontSizes.medium,
    fontFamily: fontWeights.Bold,
    borderBottomWidth: 1,
    borderColor: colors.medium,
  },
  channelName: {
    paddingHorizontal: gutterLarge,
    paddingVertical: gutterMedium,
    borderBottomWidth: 1,
    borderColor: colors.medium,
    fontSize: fontSizes.normal,
    fontFamily: fontWeights.SemiBold,
  },
});
