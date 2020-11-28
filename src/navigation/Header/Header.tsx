import { Avatar, Button, Spinner } from '@components';
import React, { FC, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import logo from '../../../assets/images/logo.png';
import { useAuthContext } from '../../contexts';
import { styles } from './Header.styles';
import UserMenu from './UserMenu/UserMenu';

const Header: FC = () => {
  const { isAuthenticated, login, isLoading, username } = useAuthContext();
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Image style={styles.logo} source={logo} />
      </View>

      {isLoading ? (
        <Spinner style={styles.spinner} size="small" />
      ) : (
        <View style={styles.right}>
          {isAuthenticated ? (
            <Pressable onPress={() => setUserMenuVisible(true)}>
              <Avatar name={username} />
            </Pressable>
          ) : (
            <Button size="small" variant="outlined" text="Zaloguj" onPress={login} />
          )}
        </View>
      )}

      {userMenuVisible && <UserMenu onClose={() => setUserMenuVisible(false)} />}
    </View>
  );
};

export default Header;
