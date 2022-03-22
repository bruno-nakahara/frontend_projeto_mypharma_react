import {
  DELETE_CATEGORY,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_SUCCESS,
  EDIT_CATEGORY,
  EDIT_CATEGORY_FAIL,
  EDIT_CATEGORY_SUCCESS,
  GET_CATEGORIES,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_SUCCESS,
  POST_CATEGORY,
  POST_CATEGORY_FAIL,
  POST_CATEGORY_SUCCESS,
  SEARCH_CATEGORIES,
  SEARCH_CATEGORIES_FAIL,
  SEARCH_CATEGORIES_SUCCESS,
} from '../constants/categories';

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
  };
};

export const setCategories = categories => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: categories,
  };
};

export const getCategoriesFail = err => {
  return {
    type: GET_CATEGORIES_FAIL,
    payload: err,
  };
};

export const editCategory = updateCategory => {
  return {
    type: EDIT_CATEGORY,
    payload: updateCategory,
  };
};

export const editCategorySuccess = () => {
  return {
    type: EDIT_CATEGORY_SUCCESS,
  };
};

export const editCategoryFail = err => {
  return {
    type: EDIT_CATEGORY_FAIL,
    payload: err,
  };
};

export const postCategory = newCategory => {
  return {
    type: POST_CATEGORY,
    payload: newCategory,
  };
};

export const postCategorySuccess = () => {
  return {
    type: POST_CATEGORY_SUCCESS,
  };
};

export const postCategoryFail = err => {
  return {
    type: POST_CATEGORY_FAIL,
    payload: err,
  };
};

export const deleteCategory = uuid => {
  return {
    type: DELETE_CATEGORY,
    payload: uuid,
  };
};

export const deleteCategorySuccess = () => {
  return {
    type: DELETE_CATEGORY_SUCCESS,
  };
};

export const deleteCategoryFail = err => {
  return {
    type: DELETE_CATEGORY_FAIL,
    payload: err,
  };
};

export const searchCategory = filter => {
  return {
    type: SEARCH_CATEGORIES,
    payload: filter,
  };
};

export const searchCategorySuccess = () => {
  return {
    type: SEARCH_CATEGORIES_SUCCESS,
  };
};

export const searchCategoryFail = err => {
  return {
    type: SEARCH_CATEGORIES_FAIL,
    payload: err,
  };
};
