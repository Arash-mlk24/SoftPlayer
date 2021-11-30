import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type ViewStyleFunction = (props: any) => StyleProp<ViewStyle>;

export type TextStyleFunction = (props: any) => StyleProp<TextStyle>;

export type ImageStyleFunction = (props: any) => StyleProp<ImageStyle>;
