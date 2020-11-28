import { RouteProp, useRoute } from '@react-navigation/native';
import React, { FC, useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { useChannelMessages } from '@hooks';
import { useAuthContext } from '../../contexts';
import { Message } from '../../models';
import { Routes, TabParamList } from '../../navigation/routes';
import ChatInput from './ChatInput/ChatInput';
import ChatMessage from './ChatMessage/ChatMessage';
import { styles } from './ChatScreen.styles';

const ChatScreen: FC = () => {
  const { userId, username } = useAuthContext();
  const { params } = useRoute<RouteProp<TabParamList, Routes.Chat>>();
  const { messages, sendMessage } = useChannelMessages(params.teamId, params.channelId);
  const scrollViewRef = useRef<ScrollView>();
  const [optimisticMessage, setOptimisticMessage] = useState<Message | null>(null);

  const handleSend = (content: string) => {
    setOptimisticMessage({
      id: '000',
      content,
      createdDateTime: new Date().toISOString(),
      userDisplayName: username,
      userId,
    });

    sendMessage(content);
  };

  useEffect(() => {
    setOptimisticMessage(null);
  }, [messages]);

  return (
    <>
      <ScrollView
        // @ts-ignore
        ref={scrollViewRef}
        contentContainerStyle={styles.container}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {!!optimisticMessage && <ChatMessage message={optimisticMessage} />}
      </ScrollView>

      <ChatInput onSend={handleSend} />
    </>
  );
};

export default ChatScreen;
