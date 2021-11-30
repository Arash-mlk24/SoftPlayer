import TextButton from '@components/TextButton';
import Common from '@res/colors/Common';
import Primary from '@res/colors/Primary';
import {
  getFormsContainerStyle,
  getMainContainerStyle,
} from '@res/styles/SetDetailsScreenStyles';
import {ISetDetailsScreen} from '@utils/interfaces';
import {height, width} from '@utils/scaling';
import React, {useState} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

function SetDetailsScreen(props: ISetDetailsScreen) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const hasFullNameError = () => {
    let flag = false;
    for (let index = 0; index < fullName.length; index++) {
      if (
        !/[a-zA-Z]/.test(fullName.charAt(index)) &&
        fullName.charAt(index) !== ' '
      ) {
        return false;
      }
      if (/[a-zA-Z]/.test(fullName.charAt(index))) {
        flag = true;
      }
    }
    if (flag) return false;
    return true;
  };

  const hasEmailError = () => {};

  const hasError = () => {
    if (fullName === '' || email === '') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={getMainContainerStyle(null)}>
      <Image
        // source={require('@res/images/headphones.jpg')}
        source={require('./headphones.jpg')}
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'cover',
        }}
        blurRadius={12}
      />
      <View style={getFormsContainerStyle(null)}>
        <TextInput
          style={{
            color: Common.WHITE,
            backgroundColor: null,
            marginVertical: '4%',
            height: height * 0.07,
            width: width * 0.9,
          }}
          mode="flat"
          activeUnderlineColor={Common.LIGHT_GREY}
          underlineColor={
            fullName === ''
              ? Common.LIGHT_GREY
              : hasFullNameError()
              ? 'red'
              : 'green'
          }
          selectionColor={Primary.PINK}
          label="FullName"
          value={fullName}
          onChangeText={text => setFullName(text)}
        />
        <TextInput
          style={{
            color: Common.WHITE,
            backgroundColor: null,
            height: height * 0.07,
            width: width * 0.9,
          }}
          mode="flat"
          activeUnderlineColor={Common.LIGHT_GREY}
          underlineColor={Common.LIGHT_GREY}
          selectionColor={Primary.PINK}
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextButton
          text="Submit"
          borderColor={hasError() ? Common.WHITE : Primary.PINK}
          textColor={hasError() ? Common.WHITE : Primary.PINK}
          height={height * 0.06}
          width={width * 0.9}
          fontSize={18}
          onPress={() => console.log('ok')}
          style={{position: 'absolute', bottom: height * 0.01}}
          disabled={hasError()}
        />
      </View>
    </View>
  );
}

export default SetDetailsScreen;
