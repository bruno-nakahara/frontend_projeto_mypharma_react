import { toast } from 'react-toastify';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import {
  deleteBrandFail,
  deleteBrandSuccess,
  editBrandFail,
  editBrandSuccess,
  getBrandsFail,
  postBrandFail,
  postBrandSuccess,
  searchBrandFail,
  setBrands,
} from '../../action/brands';
import {
  DELETE_BRAND,
  EDIT_BRAND,
  GET_BRANDS,
  POST_BRAND,
  SEARCH_BRANDS,
} from '../../constants/brands';
import {
  deleteBrandsService,
  editBrandsService,
  getBrandsService,
  postBrandsService,
  searchBrandsService,
} from '../requests/BrandsServices';

function* handleGetBrands() {
  try {
    const brands = yield call(getBrandsService);
    yield put(setBrands(brands));
  } catch (err) {
    yield put(getBrandsFail(err.toString()));
  }
}

function* getBrands() {
  yield takeEvery(GET_BRANDS, handleGetBrands);
}

function* handleSearchBrands() {
  try {
    const brands = yield call(searchBrandsService);
    yield put(searchBrandsService(brands));
  } catch (err) {
    yield put(searchBrandFail(err.toString()));
  }
}

function* searchBrands() {
  yield takeEvery(SEARCH_BRANDS, handleSearchBrands);
}

function* handleCreateBrand({ payload }) {
  try {
    const response = yield call(postBrandsService, payload);

    if (response.status === 201) {
      toast('Criado com sucesso!');
      yield put(postBrandSuccess());
    }
  } catch (err) {
    toast('Erro, não foi possível criar!');
    yield put(postBrandFail(err.toString()));
  }
}

function* createBrand() {
  yield takeEvery(POST_BRAND, handleCreateBrand);
}

function* handleEditBrand({ payload }) {
  try {
    const response = yield call(editBrandsService, payload);

    if (response.status === 200) {
      toast('Atualizado com sucesso!');
      yield put(editBrandSuccess());
    }
  } catch (err) {
    toast('Erro, não foi possível atualizar!');
    yield put(editBrandFail(err.toString()));
  }
}

function* editBrand() {
  yield takeEvery(EDIT_BRAND, handleEditBrand);
}

function* handleDeleteBrand({ payload }) {
  try {
    const response = yield call(deleteBrandsService, payload);

    if (response.status === 200) {
      toast('Deletado com sucesso!');
      yield put(deleteBrandSuccess());
    }
  } catch (err) {
    toast('Erro, não foi possível deletar!');
    yield put(deleteBrandFail(err.toString()));
  }
}

function* deleteBrand() {
  yield takeEvery(DELETE_BRAND, handleDeleteBrand);
}

const BrandsSaga = [
  fork(getBrands),
  fork(searchBrands),
  fork(createBrand),
  fork(editBrand),
  fork(deleteBrand),
];

export default BrandsSaga;
