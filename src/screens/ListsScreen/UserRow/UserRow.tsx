import { Avatar, Text } from '@components';
import React, { FC } from 'react';
import { View } from 'react-native';
import { User } from '../../../models';
import { styles } from './UserRow.styles';

type Props = {
  user: User;
};

const UserRow: FC<Props> = ({ user }) => {
  return (
    <View style={styles.row}>
      <Avatar style={styles.avatar} name={user.displayName} />
      <View>
        <Text style={styles.name}>{user.displayName}</Text>
        <Text style={styles.caption}>{user.mail}</Text>
        {!!user.jobTitle && <Text style={styles.caption}>Stanowisko: {user.jobTitle}</Text>}
      </View>
    </View>
  );
};

export default UserRow;
