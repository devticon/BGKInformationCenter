import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { AuthContextProvider } from './contexts/AuthContext';
import Header from './navigation/Header/Header';
import { Routes } from './navigation/routes';
import TabBar from './navigation/TabBar/TabBar';
import ListsScreen from './screens/ListsScreen/ListsScreen';

const Tab = createBottomTabNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Header />
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
          <Tab.Screen name={Routes.Home} component={ListsScreen} />
          <Tab.Screen name={Routes.Home2} component={View} />
          <Tab.Screen name={Routes.Home3} component={View} />
          <Tab.Screen name={Routes.Home4} component={View} />
        </Tab.Navigator>
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
