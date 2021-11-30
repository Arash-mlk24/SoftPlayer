import Common from '@res/colors/Common';
import {height} from '@utils/scaling';
import {ViewStyleFunction} from '@utils/StyleTypes';

export const getMainContainerStyle: ViewStyleFunction = (props: any) => {
  return {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
};

export const getIconContainerStyle: ViewStyleFunction = (props: any) => {
  return {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.16,
    width: height * 0.16,
    position: 'absolute',
    top: height * 0.26,
    borderColor: Common.WHITE,
    borderRadius: height,
    borderWidth: 0.8,
    overflow: 'hidden',
  };
};

export const getIndicatorStyle: ViewStyleFunction = (props: any) => {
  return {
    position: 'absolute',
    top: height * 0.8,
  };
};
