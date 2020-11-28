import { Text } from '@components';
import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from './UserRow.styles';

type User = {
  id: string;
  displayName: string;
  jobTitle: string;
  mail: string;
};

type Props = {
  user: User;
};

const UserRow: FC<Props> = ({ user }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.name}>{user.displayName}</Text>
      <Text style={styles.caption}>{user.mail}</Text>
      {!!user.jobTitle && <Text style={styles.caption}>Stanowisko: {user.jobTitle}</Text>}
    </View>
  );
};

export default UserRow;
