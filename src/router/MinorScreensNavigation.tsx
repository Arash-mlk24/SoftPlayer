import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PersonalScreen from '@screens/mainAppScreen/minorTabs/PersonalScreen';
import SetDetailsScreen from '@screens/mainAppScreen/minorTabs/SetDetailsScreen';
import SettingsScreen from '@screens/mainAppScreen/minorTabs/SettingsScreen';
import {MinorScreensNavigationParamsList} from '@utils/interfaces';

const {Screen, Navigator} =
  createStackNavigator<MinorScreensNavigationParamsList>();

const MinorScreensNavigation = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Settings" component={SettingsScreen} />
      <Screen name="Personal" component={PersonalScreen} />
      <Screen name="SetDetails" component={SetDetailsScreen} />
    </Navigator>
  );
};

export default MinorScreensNavigation;
