import { all } from 'redux-saga/effects';
import BrandsSaga from './handlers/brandsHandler';
import CategoriesSaga from './handlers/categoriesHandler';
import ProductsSaga from './handlers/productsHandler';

function* rootSaga() {
  yield all([...BrandsSaga, ...CategoriesSaga, ...ProductsSaga]);
}

export default rootSaga;
