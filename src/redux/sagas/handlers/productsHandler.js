import { toast } from 'react-toastify';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import {
  deleteProductFail,
  deleteProductSuccess,
  editProductFail,
  editProductSuccess,
  getProductsFail,
  postProductFail,
  postProductSuccess,
  searchProductFail,
  setProducts,
} from '../../action/products';
import {
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
  POST_PRODUCT,
  SEARCH_PRODUCTS,
} from '../../constants/products';
import {
  deleteProductsService,
  editProductsService,
  getProductsService,
  postProductsService,
  searchProductsService,
} from '../requests/ProductsServices';

function* handleGetProducts() {
  try {
    const products = yield call(getProductsService);
    yield put(setProducts(products));
  } catch (err) {
    yield put(getProductsFail(err.toString()));
  }
}

function* getProducts() {
  yield takeEvery(GET_PRODUCTS, handleGetProducts);
}

function* handleSearchProducts() {
  try {
    const products = yield call(searchProductsService);
    yield put(searchProductsService(products));
  } catch (err) {
    yield put(searchProductFail(err.toString()));
  }
}

function* searchProducts() {
  yield takeEvery(SEARCH_PRODUCTS, handleSearchProducts);
}

function* handleCreateProduct({ payload }) {
  try {
    const response = yield call(postProductsService, payload);

    if (response.status === 201) {
      toast('Criado com sucesso!');
      yield put(postProductSuccess());
    }
  } catch (err) {
    toast('Erro, não foi possível criar!');
    yield put(postProductFail(err.toString()));
  }
}

function* createProduct() {
  yield takeEvery(POST_PRODUCT, handleCreateProduct);
}

function* handleEditProduct({ payload }) {
  try {
    const response = yield call(editProductsService, payload);

    if (response.status === 200) {
      toast('Atualizado com sucesso!');
      yield put(editProductSuccess());
    }
  } catch (err) {
    toast('Erro, não foi possível atualizar!');
    yield put(editProductFail(err.toString()));
  }
}

function* editProduct() {
  yield takeEvery(EDIT_PRODUCT, handleEditProduct);
}

function* handleDeleteProduct({ payload }) {
  try {
    const response = yield call(deleteProductsService, payload);

    if (response.status === 200) {
      toast('Deletado com sucesso!');
      yield put(deleteProductSuccess());
    }
  } catch (err) {
    toast('Erro, não foi possível deletar!');
    yield put(deleteProductFail(err.toString()));
  }
}

function* deleteProduct() {
  yield takeEvery(DELETE_PRODUCT, handleDeleteProduct);
}

const ProductsSaga = [
  fork(getProducts),
  fork(searchProducts),
  fork(createProduct),
  fork(editProduct),
  fork(deleteProduct),
];

export default ProductsSaga;
