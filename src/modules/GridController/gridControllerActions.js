import constants from './gridControllerConstants';

export const generateTable = inputData => ({
  type: constants.SHOW_TABLE,
  inputData,
});

export const hideTable = () => ({
  type: constants.HIDE_TABLE,
});
