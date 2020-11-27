import { Button, Icon } from '@components';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { View } from 'react-native';
import { tabMenu } from '../tab-menu';
import { styles } from './TabBar.styles';

const TabBar: FC<BottomTabBarProps> = ({ navigation, state }) => {
  const activeTabRoute = state.routeNames[state.index];

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
