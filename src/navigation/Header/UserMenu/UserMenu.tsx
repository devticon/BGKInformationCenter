import { Icon, Text } from '@components';
import React, { FC } from 'react';
import { Modal, Pressable, View } from 'react-native';
import { styles } from './UserMenu.styles';

type Props = {
  onClose: () => void;
};

const UserMenu: FC<Props> = ({ onClose }) => {
  return (
    <Modal transparent onRequestClose={onClose}>
      <View style={styles.modal}>
        <Pressable style={styles.overlay} onPress={onClose} />
        <View style={styles.wrapper}>
          <Pressable style={[styles.item, { borderTopWidth: 0 }]}>
            <Icon style={styles.itemIcon} name="settings-outline" />
            <Text style={styles.itemText}>Ustawienia</Text>
          </Pressable>
          <Pressable style={styles.item}>
            <Icon style={styles.itemIcon} name="log-out-outline" />
            <Text style={styles.itemText}>Wyloguj</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default UserMenu;
