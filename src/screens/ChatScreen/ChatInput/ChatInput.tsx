import { Button } from '@components';
import { flexRow } from '@theme';
import React, { FC, useState } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './ChatInput.styles';

type Props = {
  onSend: (value: string) => void;
};

const ChatInput: FC<Props> = ({ onSend }) => {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (value) {
      onSend(value);
      setValue('');
    }
  };

  return (
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
  );
};

export default ChatInput;
