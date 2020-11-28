import { colors } from '@theme';
import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { styles } from './Spinner.styles';

const Spinner: FC = () => {
  return <ActivityIndicator style={styles.spinner} size="large" color={colors.primary} />;
};

export default Spinner;
