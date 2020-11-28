import React, { FC } from 'react';
import { View } from 'react-native';
import { useAuthContext } from '../../contexts';
import Button from '../Button/Button';
import Text from '../Text/Text';
import { styles } from './LoginRequired.styles';

type Props = {
  text?: string;
};

const LoginRequired: FC<Props> = ({ text }) => {
  const { login, isLoading } = useAuthContext();

  return (
    <View style={styles.wrapper}>
      {text && <Text style={styles.info}>{text}</Text>}
      <Button disabled={isLoading} size="large" text="Zaloguj się" onPress={login} />
    </View>
  );
};

export default LoginRequired;
