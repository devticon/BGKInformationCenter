import 'react-native-gesture-handler';
import { CLIENT_ID, TENANT_ID } from '@env';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { authorize } from 'react-native-app-auth';
import Header from './navigation/Header/Header';
import { Routes } from './navigation/routes';
import TabBar from './navigation/TabBar/TabBar';
import ArticlesList from './screens/ArticlesList/ArticlesList';

const config = {
  issuer: `https://login.microsoftonline.com/${TENANT_ID}/v2.0`,
  clientId: CLIENT_ID,
  redirectUrl: 'com.bgkinformationcenter://oauth/redirect/',
  scopes: ['openid', 'profile', 'email', 'offline_access'],
};

const Tab = createBottomTabNavigator();

const App: FC = () => {
  const handleLogin = async () => {
    try {
      const authState = await authorize(config);
      console.log(authState.accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name={Routes.Home} component={ArticlesList} />
        <Tab.Screen name={Routes.Home2} component={ArticlesList} />
        <Tab.Screen name={Routes.Home3} component={ArticlesList} />
        <Tab.Screen name={Routes.Home4} component={ArticlesList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
