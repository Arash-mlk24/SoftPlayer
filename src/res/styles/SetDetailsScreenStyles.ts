import Common from '@res/colors/Common';
import {height} from '@utils/scaling';
import {TextStyleFunction, ViewStyleFunction} from '@utils/StyleTypes';

export const getMainContainerStyle: ViewStyleFunction = (props: any) => {
  return {
    flex: 1,
    alignItems: 'center',
  };
};

export const getLaterTextContainerStyle: ViewStyleFunction = (props: any) => {
  return {
    width: '12%',
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '4%',
    top: '2%',
  };
};

export const getLaterTextStyle: TextStyleFunction = (props: any) => {
  return {
    textDecorationLine: 'underline',
    color: Common.WHITE,
    fontSize: 16,
  };
};

export const getFormsContainerStyle: ViewStyleFunction = (props: any) => {
  return {
    height: height * 0.4,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    position: 'absolute',
    bottom: height * 0.01,
  };
};
