import React, { FC } from 'react';
import { Image, View } from 'react-native';
import logo from '../../../assets/images/logo.png';
import { styles } from './Header.styles';

const Header: FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.right}></View>
    </View>
  );
};

export default Header;
