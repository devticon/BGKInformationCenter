import { Button, Icon } from '@components';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { View } from 'react-native';
import { tabMenu } from '../tab-menu';
import { styles } from './TabBar.styles';

const TabBar: FC<BottomTabBarProps> = ({ navigation, state, descriptors }) => {
  const activeTabRoute = state.routeNames[state.index];
  const focusedRoute = state.routes[state.index];
  const focusedDescriptor = descriptors[focusedRoute.key];
  const focusedOptions = focusedDescriptor.options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.tabsContainer}>
      {tabMenu.map((tab, index) => {
        const isActive = tab.route === activeTabRoute;

        return (
          <Button variant="transparent" key={index} style={styles.tab} onPress={() => navigation.navigate(tab.route)}>
            <View style={[isActive && styles.activeTabIndicator]} />
            <Icon style={[styles.tabIcon, isActive && styles.activeIcon]} name={tab.icon} />
          </Button>
        );
      })}
    </View>
  );
};

export default TabBar;
