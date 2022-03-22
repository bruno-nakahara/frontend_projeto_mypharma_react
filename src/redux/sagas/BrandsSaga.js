import { all } from 'redux-saga/effects';
import BrandsSaga from './handlers/brandsHandler';

function* rootSaga() {
  yield all([...BrandsSaga]);
}

export default rootSaga;
