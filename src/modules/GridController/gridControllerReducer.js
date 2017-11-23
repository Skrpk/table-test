import { Map } from 'immutable';
import constants from './gridControllerConstants';

const initialState = Map({
  showGrid: false,
});

const gridControllerReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GENERATE_TABLE: {
      return state.set('showGrid', true);
    }
    default:
      return state;
  }
};


export default gridControllerReducer;
