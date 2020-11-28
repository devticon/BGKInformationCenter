import { Icon, Text } from '@components';
import React, { FC } from 'react';
import { Modal, Pressable, View } from 'react-native';
import { useAuthContext } from '../../../contexts';
import { styles } from './UserMenu.styles';

type Props = {
  onClose: () => void;
};

const UserMenu: FC<Props> = ({ onClose }) => {
  const { logout, username } = useAuthContext();

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <Modal transparent onRequestClose={onClose}>
      <View style={styles.modal}>
        <Pressable style={styles.overlay} onPress={onClose} />
        <View style={styles.wrapper}>
          <Text style={[styles.item, styles.itemText, { borderTopWidth: 0 }]}>{username}</Text>
          <Pressable style={styles.item}>
            <Icon style={styles.itemIcon} name="log-out-outline" />
            <Text style={styles.itemText} onPress={handleLogout}>
              Wyloguj
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default UserMenu;
