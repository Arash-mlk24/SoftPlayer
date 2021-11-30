import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {width, height} from '@utils/scaling';
import {ILinearGradientBG} from '@utils/interfaces';

const LinearGradientBG = ({topColor, bottomColor}: ILinearGradientBG) => {
  return (
    <LinearGradient
      colors={[topColor, bottomColor]}
      start={{x: 0.0, y: 0.4}}
      end={{x: 0.0, y: 1}}
      style={{
        position: 'absolute',
        width: width,
        height: height,
        alignSelf: 'center',
      }}
    />
  );
};

export default LinearGradientBG;
