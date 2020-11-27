import React, { ComponentProps, FC } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from './Icon.styles';

const Icon: FC<ComponentProps<typeof Ionicon>> = ({ style, ...props }) => {
  return <Ionicon {...props} style={[styles.icon, style]} />;
};

export default Icon;
