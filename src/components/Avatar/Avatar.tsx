import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';
import Text from '../Text/Text';
import { styles } from './Avatar.styles';

type Props = {
  name?: string;
  style?: ViewStyle;
};

const Avatar: FC<Props> = ({ name = '', style }) => {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('');

  return (
    <View style={[styles.wrapper, style]}>
      <Text style={styles.text}>{initials}</Text>
    </View>
  );
};

export default Avatar;
