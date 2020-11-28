import { Text } from '@components';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import { useChannelMessages } from '../../hooks/useChannelMessages';
import { Routes, TabParamList } from '../../navigation/routes';

const ChatScreen: FC = () => {
  const { params } = useRoute<RouteProp<TabParamList, Routes.Chat>>();
  const messages = useChannelMessages(params.teamId, params.channelId);

  return (
    <View>
      {messages.map(message => (
        <Text>{message.body.content}</Text>
      ))}
    </View>
  );
};

export default ChatScreen;
