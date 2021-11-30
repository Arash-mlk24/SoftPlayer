import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '@screens/mainAppScreen/splashScreen/SplashScreen';
import {AppNavigationParamsList} from '@utils/interfaces';
import React from 'react';
import MainTabsNavigation from '@router/MainTabsNavigation';
import MinorScreensNavigation from '@router/MinorScreensNavigation';

const Stack = createStackNavigator<AppNavigationParamsList>();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="MainTabs" component={MainTabsNavigation} />
        <Stack.Screen name="MinorScreens" component={MinorScreensNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
