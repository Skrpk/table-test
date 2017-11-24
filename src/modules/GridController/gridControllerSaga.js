import { takeEvery, put } from 'redux-saga/effects';

import parseData from '../../shared/services/inputDataParser';
import constants from './gridControllerConstants';

function* generateTable({ inputData }) {
  const parsedData = parseData(inputData);
  yield put({
    type: constants.GENERATE_TABLE,
    parsedData,
  });
}

export function* generateTableSaga() {
  yield takeEvery(constants.SHOW_TABLE, generateTable);
}

