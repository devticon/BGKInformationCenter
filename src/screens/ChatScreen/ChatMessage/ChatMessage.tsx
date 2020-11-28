import { Text } from '@components';
import { formatDateTimeShort } from '@utils';
import React, { FC } from 'react';
import { View } from 'react-native';
import { useAuthContext } from '../../../contexts';
import { Message } from '../../../models';
import { styles } from './ChatMessage.styles';

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
