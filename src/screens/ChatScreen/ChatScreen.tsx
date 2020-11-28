import { Button, Text } from '@components';
import { RouteProp, useRoute } from '@react-navigation/native';
import { flexRow } from '@theme';
import { formatDateTimeShort } from '@utils';
import React, { FC, useRef, useState } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { useAuthContext } from '../../contexts/AuthContext';
import { useChannelMessages } from '../../hooks/useChannelMessages';
import { Routes, TabParamList } from '../../navigation/routes';
import { styles } from './ChatScreen.styles';

const ChatScreen: FC = () => {
  const { userId } = useAuthContext();
  const [value, setValue] = useState('');
  const { params } = useRoute<RouteProp<TabParamList, Routes.Chat>>();
  const { messages, sendMessage } = useChannelMessages(params.teamId, params.channelId);
  const scrollViewRef = useRef<ScrollView>();

  const handleSend = () => {
    if (value) {
      sendMessage(value);
      setValue('');
    }
  };

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.container}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map(message => {
          const isOwn = message.userId === userId;

          const MessageDetails = (
            <Text style={[styles.messageInfoText, { textAlign: isOwn ? 'right' : 'left' }]}>
              {message.userDisplayName}
              {'\n'}
              {formatDateTimeShort(message.createdDateTime)}
            </Text>
          );

          return (
            <View
              key={message.id}
              style={[styles.messageWrapper, { justifyContent: isOwn ? 'flex-end' : 'flex-start' }]}
            >
              {isOwn && MessageDetails}
              <Text style={[styles.messageText, { textAlign: isOwn ? 'right' : 'left' }]}>{message.content}</Text>
              {!isOwn && MessageDetails}
            </View>
          );
        })}
      </ScrollView>
      <View style={flexRow}>
        <TextInput
          placeholder="Wpisz wiadomość..."
          style={styles.input}
          value={value}
          onChangeText={v => setValue(v)}
          returnKeyType="send"
          onSubmitEditing={handleSend}
        />
        <Button style={styles.button} text="Wyślij" onPress={handleSend} />
      </View>
    </>
  );
};

export default ChatScreen;
