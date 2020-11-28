import { colors } from '@theme';
import React, { ComponentProps, FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { styles } from './Spinner.styles';

const Spinner: FC<ComponentProps<typeof ActivityIndicator>> = ({ style, ...props }) => {
  return <ActivityIndicator style={[styles.spinner, style]} size="large" color={colors.primary} {...props} />;
};

export default Spinner;
