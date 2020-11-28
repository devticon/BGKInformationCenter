import { Text } from '@components';
import { formatDateTimeShort } from '@utils';
import React, { FC } from 'react';
import { View } from 'react-native';
import { useAuthContext } from '../../../contexts/AuthContext';
import { styles } from './ChatMessage.styles';

type Message = {
  id: string;
  userId: string;
  userDisplayName: string;
  createdDateTime: string;
  content: string;
};

type Props = {
  message: Message;
};

const ChatMessage: FC<Props> = ({ message }) => {
  const { userId } = useAuthContext();
  const isOwn = message.userId === userId;

  const MessageDetails = (
    <Text style={[styles.messageInfoText, { textAlign: isOwn ? 'right' : 'left' }]}>
      {message.userDisplayName}
      {'\n'}
      {formatDateTimeShort(message.createdDateTime)}
    </Text>
  );

  return (
    <View key={message.id} style={[styles.messageWrapper, { justifyContent: isOwn ? 'flex-end' : 'flex-start' }]}>
      {isOwn && MessageDetails}
      <Text style={[styles.messageText, { textAlign: isOwn ? 'right' : 'left' }]}>{message.content}</Text>
      {!isOwn && MessageDetails}
    </View>
  );
};

export default ChatMessage;
