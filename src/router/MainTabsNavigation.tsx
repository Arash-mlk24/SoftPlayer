import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {MainTabsNavigationParamsList} from '@utils/interfaces';
import HomeScreen from '@screens/mainAppScreen/mainTabs/HomeScreen';

const {Navigator, Screen} =
  createMaterialBottomTabNavigator<MainTabsNavigationParamsList>();

const MainTabsNavigation = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};

export default MainTabsNavigation;
