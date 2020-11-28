import { Button, Text } from '@components';
import { RouteProp, useRoute } from '@react-navigation/native';
import { flexRow } from '@theme';
import React, { FC, useEffect, useRef, useState } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { useChannelMessages } from '../../hooks/useChannelMessages';
import { Routes, TabParamList } from '../../navigation/routes';
import { styles } from './ChatScreen.styles';

const ChatScreen: FC = () => {
  const [value, setValue] = useState('');
  const { params } = useRoute<RouteProp<TabParamList, Routes.Chat>>();
  const { messages, sendMessage } = useChannelMessages(params.teamId, params.channelId);
  const scrollViewRef = useRef<ScrollView>();

  const handleSend = () => {
    sendMessage(value);
    setValue('');
  };

  useEffect(() => {}, []);

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.container}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((message, i) => (
          <View key={message.id} style={[styles.message, { alignSelf: i % 2 ? 'flex-start' : 'flex-end' }]}>
            <Text>{message.content}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={flexRow}>
        <TextInput
          placeholder="Wpisz wiadomość..."
          style={styles.input}
          value={value}
          onChangeText={v => setValue(v)}
          onSubmitEditing={handleSend}
        />
        <Button style={styles.button} text="Wyślij" onPress={handleSend} />
      </View>
    </>
  );
};

export default ChatScreen;
