import { RouteProp, useRoute } from '@react-navigation/native';
import React, { FC, useRef } from 'react';
import { ScrollView } from 'react-native';
import { useChannelMessages } from '@hooks';
import { Routes, TabParamList } from '../../navigation/routes';
import ChatInput from './ChatInput/ChatInput';
import ChatMessage from './ChatMessage/ChatMessage';
import { styles } from './ChatScreen.styles';

const ChatScreen: FC = () => {
  const { params } = useRoute<RouteProp<TabParamList, Routes.Chat>>();
  const { messages, sendMessage } = useChannelMessages(params.teamId, params.channelId);
  const scrollViewRef = useRef<ScrollView>();

  return (
    <>
      <ScrollView
        // @ts-ignore
        ref={scrollViewRef}
        contentContainerStyle={styles.container}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map(message => (
          <ChatMessage message={message} />
        ))}
      </ScrollView>

      <ChatInput onSend={sendMessage} />
    </>
  );
};

export default ChatScreen;
