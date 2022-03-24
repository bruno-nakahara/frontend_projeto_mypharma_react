import { toast } from 'react-toastify';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import {
  deleteCategoryFail,
  deleteCategorySuccess,
  editCategoryFail,
  editCategorySuccess,
  getCategoriesFail,
  postCategoryFail,
  postCategorySuccess,
  searchCategoryFail,
  setCategories,
} from '../../action/categories';
import {
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  GET_CATEGORIES,
  POST_CATEGORY,
  SEARCH_CATEGORIES,
} from '../../constants/categories';
import {
  deleteCategoriesService,
  editCategoriesService,
  getCategoriesService,
  postCategoriesService,
  searchCategoriesService,
} from '../requests/CategoriesServices';

function* handleGetCategories() {
  try {
    const categories = yield call(getCategoriesService);
    yield put(setCategories(categories));
  } catch (err) {
    yield put(getCategoriesFail(err.toString()));
  }
}

function* getCategories() {
  yield takeEvery(GET_CATEGORIES, handleGetCategories);
}

function* handleSearchCategories() {
  try {
    const categories = yield call(searchCategoriesService);
    yield put(searchCategoriesService(categories));
  } catch (err) {
    yield put(searchCategoryFail(err.toString()));
  }
}

function* searchCategories() {
  yield takeEvery(SEARCH_CATEGORIES, handleSearchCategories);
}

function* handleCreateCategory({ payload }) {
  try {
    const response = yield call(postCategoriesService, payload);

    if (response.status === 201) {
      toast('Criado com sucesso!');
      yield put(postCategorySuccess());
    }
  } catch (err) {
    toast('Erro, não foi possível criar!');
    yield put(postCategoryFail(err.toString()));
  }
}

function* createCategory() {
  yield takeEvery(POST_CATEGORY, handleCreateCategory);
}

function* handleEditCategory({ payload }) {
  try {
    const response = yield call(editCategoriesService, payload);

    if (response.status === 200) {
      toast('Atualizado com sucesso!');
      yield put(editCategorySuccess());
    }
  } catch (err) {
    toast('Erro, não foi possível atualizar!');
    yield put(editCategoryFail(err.toString()));
  }
}

function* editCategory() {
  yield takeEvery(EDIT_CATEGORY, handleEditCategory);
}

function* handleDeleteCategory({ payload }) {
  try {
    const response = yield call(deleteCategoriesService, payload);

    if (response.status === 200) {
      toast('Deletado com sucesso!');
      yield put(deleteCategorySuccess());
    }
  } catch (err) {
    toast('Erro, não foi possível deletar!');
    yield put(deleteCategoryFail(err.toString()));
  }
}

function* deleteCategory() {
  yield takeEvery(DELETE_CATEGORY, handleDeleteCategory);
}

const CategoriesSaga = [
  fork(getCategories),
  fork(searchCategories),
  fork(createCategory),
  fork(editCategory),
  fork(deleteCategory),
];

export default CategoriesSaga;
