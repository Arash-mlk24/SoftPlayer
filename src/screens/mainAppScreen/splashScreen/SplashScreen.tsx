import LinearGradientBG from '@components/LinearGradientBG';
import TextButton from '@components/TextButton';
import {getObjectData, removeData} from '@database/AppStorage';
import Common from '@res/colors/Common';
import Primary from '@res/colors/Primary';
import {
  getIconContainerStyle,
  getIndicatorStyle,
  getMainContainerStyle,
} from '@res/styles/SplashScreenStyles';
import {ISplashScreen} from '@utils/interfaces';
import Keys from '@utils/Keys';
import {height} from '@utils/scaling';
import React, {useEffect} from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';

const SplashScreen = ({navigation}: ISplashScreen) => {
  useEffect(() => {
    removeData(Keys.LOGGED);
    getObjectData(Keys.LOGGED).then(data => {
      if (data) {
        // get musics
      } else {
        navigation.navigate('MinorScreens', {screen: 'SetDetails'});
      }
    });
  });

  return (
    <View style={getMainContainerStyle(null)}>
      <StatusBar
        backgroundColor={Common.DARK_GREY}
        barStyle={'light-content'}
      />
      <LinearGradientBG topColor={Common.GREY} bottomColor={Common.WHITE} />
      <View style={getIconContainerStyle(null)}></View>
      <ActivityIndicator
        size={height * 0.04}
        style={getIndicatorStyle(null)}
        color={Common.DARK_GREY}
      />
    </View>
  );
};

export default SplashScreen;
