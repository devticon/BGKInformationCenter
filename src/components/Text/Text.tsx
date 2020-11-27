import React, { ComponentProps, FC } from 'react';
import { Text as RNText } from 'react-native';
import { styles } from './Text.styles';

const Text: FC<ComponentProps<typeof RNText>> = ({ children, style, ...props }) => {
  return (
    <RNText {...props} style={[styles.text, style]}>
      {children}
    </RNText>
  );
};

export default Text;
