import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { AuthContextProvider } from './contexts';
import Header from './navigation/Header/Header';
import { Routes, TabParamList } from './navigation/routes';
import TabBar from './navigation/TabBar/TabBar';
import ChatScreen from './screens/ChatScreen/ChatScreen';
import ListsScreen from './screens/ListsScreen/ListsScreen';
import NewsListScreen from './screens/NewsListScreen/NewsListScreen';
import SearchScreen from './screens/SearchScreen/SearchScreen';
import TeamsListScreen from './screens/TeamsListScreen/TeamsListScreen';

const Tab = createBottomTabNavigator<TabParamList>();

const App: FC = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true }).catch();
  }, []);

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Header />
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
          <Tab.Screen name={Routes.NewsList} component={NewsListScreen} />
          <Tab.Screen name={Routes.Lists} component={ListsScreen} />
          <Tab.Screen name={Routes.TeamsList} component={TeamsListScreen} />
          <Tab.Screen name={Routes.Search} component={SearchScreen} />
          <Tab.Screen name={Routes.Chat} component={ChatScreen} options={{ tabBarVisible: false }} />
        </Tab.Navigator>
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
