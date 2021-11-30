import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {MainTabsNavigationParamsList} from '@utils/interfaces';
import HomeScreen from '@screens/mainAppScreen/mainTabs/HomeScreen';
import LibraryScreen from '@screens/mainAppScreen/mainTabs/LibraryScreen';
import SuggestionsScreen from '@screens/mainAppScreen/mainTabs/SuggestionsScreen';
import ShareScreen from '@screens/mainAppScreen/mainTabs/ShareScreen';

const {Navigator, Screen} =
  createMaterialBottomTabNavigator<MainTabsNavigationParamsList>();

const MainTabsNavigation = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Library" component={LibraryScreen} />
      <Screen name="Suggestions" component={SuggestionsScreen} />
      <Screen name="Share" component={ShareScreen} />
    </Navigator>
  );
};

export default MainTabsNavigation;
