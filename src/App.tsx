import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import { gun } from './gun';
import Header from './navigation/Header/Header';
import { Routes } from './navigation/routes';
import TabBar from './navigation/TabBar/TabBar';
import ArticlesList from './screens/ArticlesList/ArticlesList';

const Tab = createBottomTabNavigator();

const App: FC = () => {
  useEffect(() => {
    gun.get('me').on(user => {
      console.log(user.displayName);
    });
  }, []);

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
