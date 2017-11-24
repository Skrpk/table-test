import { Map } from 'immutable';
import constants from './gridControllerConstants';

const initialState = Map({
  showGrid: false,
  parsedData: [],
});

const gridControllerReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GENERATE_TABLE: {
      return state.set('showGrid', true)
                  .set('parsedData', action.parsedData);
    }
    case constants.HIDE_TABLE: {
      return state.set('showGrid', false);
    }
    default:
      return state;
  }
};


export default gridControllerReducer;
