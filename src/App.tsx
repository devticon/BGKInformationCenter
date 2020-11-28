import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import { AuthContextProvider } from './contexts/AuthContext';
import Header from './navigation/Header/Header';
import { Routes, TabParamList } from './navigation/routes';
import TabBar from './navigation/TabBar/TabBar';
import ChatScreen from './screens/ChatScreen/ChatScreen';
import ListsScreen from './screens/ListsScreen/ListsScreen';
import NewsListScreen from './screens/NewsListScreen/NewsListScreen';
import TeamsListScreen from './screens/TeamsListScreen/TeamsListScreen';

const Tab = createBottomTabNavigator<TabParamList>();

const App: FC = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Header />
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
          <Tab.Screen name={Routes.Lists} component={ListsScreen} />
          <Tab.Screen name={Routes.NewsList} component={NewsListScreen} />
          <Tab.Screen name={Routes.TeamsList} component={TeamsListScreen} />
          <Tab.Screen name={Routes.Search} component={View} />
          <Tab.Screen name={Routes.Chat} component={ChatScreen} />
        </Tab.Navigator>
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
