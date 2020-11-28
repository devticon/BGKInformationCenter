import { Button } from '@components';
import React, { FC, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { authorize } from 'react-native-app-auth';
import logo from '../../../assets/images/logo.png';
import avatar from '../../../assets/images/avatar.png';
import { authConfig } from '../../auth';
import { styles } from './Header.styles';
import UserMenu from './UserMenu/UserMenu';

const Header: FC = () => {
  const isAuthenticated = true;
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const handleLogin = async () => {
    try {
      const authState = await authorize(authConfig);
      console.log(authState.accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.right}>
        {isAuthenticated ? (
          <Pressable onPress={() => setUserMenuVisible(true)}>
            <Image source={avatar} style={styles.avatar} />
          </Pressable>
        ) : (
          <Button variant="outlined" text="Zaloguj" onPress={handleLogin} />
        )}
      </View>

      {userMenuVisible && <UserMenu onClose={() => setUserMenuVisible(false)} />}
    </View>
  );
};

export default Header;
