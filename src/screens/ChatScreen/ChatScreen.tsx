import { Text } from '@components';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { useChannelMessages } from '../../hooks/useChannelMessages';
import { Routes, TabParamList } from '../../navigation/routes';
import { styles } from './ChatScreen.styles';

const ChatScreen: FC = () => {
  const { params } = useRoute<RouteProp<TabParamList, Routes.Chat>>();
  const messages = useChannelMessages(params.teamId, params.channelId);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {messages.map((message, i) => (
        <View key={message.id} style={[styles.message, { alignSelf: i % 2 ? 'flex-start' : 'flex-end' }]}>
          <Text>{message.body.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ChatScreen;
