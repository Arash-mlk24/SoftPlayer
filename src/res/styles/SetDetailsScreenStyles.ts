import {height} from '@utils/scaling';
import {ViewStyleFunction} from '@utils/StyleTypes';

export const getMainContainerStyle: ViewStyleFunction = (props: any) => {
  return {
    flex: 1,
    alignItems: 'center',
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
