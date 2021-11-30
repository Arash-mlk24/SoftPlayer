import {createStackNavigator} from '@react-navigation/stack';
import MainTabsNavigation from '@router/MainTabsNavigation';
import MinorScreensNavigation from '@router/MinorScreensNavigation';
import {IMainAppScreen, MainAppNavigationParamsList} from '@utils/interfaces';
import React from 'react';

const {Navigator, Screen} = createStackNavigator<MainAppNavigationParamsList>();

function MainAppScreen(props: IMainAppScreen) {
  return <Navigator initialRouteName="MainTabs"></Navigator>;
}

export default MainAppScreen;
