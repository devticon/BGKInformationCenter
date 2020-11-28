import { Icon, Modal as CustomModal, Text } from '@components';
import { fontSizes, fontWeights, margin } from '@theme';
import React, { FC, useState } from 'react';
import { Modal, Pressable, View } from 'react-native';
import { useAuthContext } from '../../../contexts';
import { styles } from './UserMenu.styles';

type Props = {
  onClose: () => void;
};

const UserMenu: FC<Props> = ({ onClose }) => {
  const { logout, username } = useAuthContext();
  const [helpModalVisible, setHelpModalVisible] = useState(false);

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <>
      <Modal transparent onRequestClose={onClose}>
        <View style={styles.modal}>
          <Pressable style={styles.overlay} onPress={onClose} />
          <View style={styles.wrapper}>
            <Text style={[styles.item, styles.itemText, { borderTopWidth: 0 }]}>{username}</Text>
            <Pressable style={styles.item} onPress={() => setHelpModalVisible(true)}>
              <Icon style={styles.itemIcon} name="information-circle-outline" />
              <Text style={styles.itemText}>Pomoc</Text>
            </Pressable>
            <Pressable style={styles.item} onPress={handleLogout}>
              <Icon style={styles.itemIcon} name="log-out-outline" />
              <Text style={styles.itemText}>Wyloguj</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {helpModalVisible && (
        <CustomModal title="Pomoc" onClose={() => setHelpModalVisible(false)}>
          <Text style={{ fontFamily: fontWeights.SemiBold }}>Bank Gospodarstwa Krajowego</Text>
          <Text style={margin.small.y}>Infolinia: 801 598 888 / 22 475 88 88</Text>
          <Text style={{ fontSize: fontSizes.caption }}>(od poniedziałku do piątku w godz. 7:30-17:30)</Text>
        </CustomModal>
      )}
    </>
  );
};

export default UserMenu;
