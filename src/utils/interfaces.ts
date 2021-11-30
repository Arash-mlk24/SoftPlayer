import {StackNavigationProp} from '@react-navigation/stack';
import {StyleProp, ViewStyle} from 'react-native';

// ---------------  screens  ---------------
export type ISplashScreen = {
  navigation: StackNavigationProp<AppNavigationParamsList, 'Splash'>;
};
export type IMainAppScreen = {};
export type IHomeScreen = {};
export type ISettingsScreen = {};
export type ILibraryScreen = {};
export type IPersonalScreen = {};
export type IShareScreen = {};
export type ISuggestionsScreen = {};
export type ISetDetailsScreen = {
  navigation: StackNavigationProp<AppNavigationParamsList, 'MinorScreens'>;
};

// ---------------  navigation params list  ---------------
export type AppNavigationParamsList = {
  Splash?: ISplashScreen;
  MainTabs?: MainTabsNavigationParamsList;
  MinorScreens?: MinorScreensNavigationParamsList;
};
export type MainAppNavigationParamsList = {
  MainTabs: MainTabsNavigationParamsList;
  MinorScreens: MinorScreensNavigationParamsList;
};

export type MainTabsNavigationParamsList = {
  Home?: IHomeScreen;
  Library?: ILibraryScreen;
  Suggestions?: ISuggestionsScreen;
  Share?: IShareScreen;
};

export type MinorScreensNavigationParamsList = {
  Settings?: ISettingsScreen;
  Personal?: IPersonalScreen;
  SetDetails?: ISetDetailsScreen;
};

// components
export type ILinearGradientBG = {
  topColor: string;
  bottomColor: string;
};
export type ITextButton = {
  text: string;
  onPress: any;
  width: any;
  height: any;
  textColor: any;
  buttonColor?: any;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  fontSize?: any;
  borderColor?: any;
  indicator?: boolean;
};
