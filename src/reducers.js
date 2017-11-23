import { combineReducers } from 'redux';

import main from './modules/Main/mainReducer';
import gridController from './modules/GridController/gridControllerReducer';

export default combineReducers({
  main,
  gridController,
});
