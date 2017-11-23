import { generateTableSaga } from './modules/GridController/gridControllerSaga';

export default function* rootSaga() {
  yield generateTableSaga();
}
