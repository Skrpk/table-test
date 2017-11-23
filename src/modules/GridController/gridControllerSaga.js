import { takeEvery, put } from 'redux-saga/effects';

import constants from './gridControllerConstants';

function* generateTable() {
  yield put({
    type: constants.GENERATE_TABLE,
  });
}

export function* generateTableSaga() {
  yield takeEvery(constants.SHOW_TABLE, generateTable);
}

