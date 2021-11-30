import {TextStyleFunction, ViewStyleFunction} from '@utils/StyleTypes';
import {ITextButton} from '@utils/interfaces';

export const getMainContainerStyle: ViewStyleFunction = (
  props: ITextButton,
) => {
  return {
    height: props.height,
    width: props.width,
    backgroundColor: props.buttonColor ? props.buttonColor : null,
    borderRadius: props.height / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.2,
    borderColor: props.borderColor ? props.borderColor : props.buttonColor,
  };
};

export const getTextStyle: TextStyleFunction = (props: ITextButton) => {
  return {
    color: props.textColor,
    fontFamily: 'IRANYekanFaNum',
    fontSize: props.fontSize ? props.fontSize : 14,
  };
};
