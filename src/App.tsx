import { CLIENT_ID, TENANT_ID } from '@env';
import React, { FC } from 'react';
import { Button } from 'react-native';
import { authorize } from 'react-native-app-auth';
import ArticlesList from './screens/ArticlesList/ArticlesList';

const config = {
  issuer: `https://login.microsoftonline.com/${TENANT_ID}/v2.0`,
  clientId: CLIENT_ID,
  redirectUrl: 'com.bgkinformationcenter://oauth/redirect/',
  scopes: ['openid', 'profile', 'email', 'offline_access'],
};

const App: FC = () => {
  const handleLogin = async () => {
    try {
      const authState = await authorize(config);
      console.log(authState);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button title="Login" onPress={handleLogin} />
      <ArticlesList />
    </>
  );
};

export default App;
