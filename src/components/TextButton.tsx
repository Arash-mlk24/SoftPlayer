import {ITextButton} from '@utils/interfaces';
import {
  getMainContainerStyle,
  getTextStyle,
} from '@res/styles/TextButtonStyles';
import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

function TextButton(props: ITextButton) {
  return props.indicator ? (
    <View style={[getMainContainerStyle(props), props.style]}>
      <ActivityIndicator
        style={{height: props.height * 0.6, width: props.height * 0.6}}
        color={props.textColor}
      />
    </View>
  ) : props.disabled ? (
    <View style={[getMainContainerStyle(props), props.style]}>
      <Text style={getTextStyle(props)}>{props.text}</Text>
    </View>
  ) : (
    <TouchableOpacity
      onPress={props.onPress}
      style={[getMainContainerStyle(props), props.style]}>
      <Text style={getTextStyle(props)}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default TextButton;
