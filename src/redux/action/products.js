import {
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  POST_PRODUCT,
  POST_PRODUCT_FAIL,
  POST_PRODUCT_SUCCESS,
  SEARCH_PRODUCTS,
  SEARCH_PRODUCTS_FAIL,
  SEARCH_PRODUCTS_SUCCESS,
} from '../constants/brands';

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const setProducts = brands => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: brands,
  };
};

export const getProductsFail = err => {
  return {
    type: GET_PRODUCTS_FAIL,
    payload: err,
  };
};

export const editProduct = updateProduct => {
  return {
    type: EDIT_PRODUCT,
    payload: updateProduct,
  };
};

export const editProductSuccess = () => {
  return {
    type: EDIT_PRODUCT_SUCCESS,
  };
};

export const editProductFail = err => {
  return {
    type: EDIT_PRODUCT_FAIL,
    payload: err,
  };
};

export const postProduct = newProduct => {
  return {
    type: POST_PRODUCT,
    payload: newProduct,
  };
};

export const postProductSuccess = () => {
  return {
    type: POST_PRODUCT_SUCCESS,
  };
};

export const postProductFail = err => {
  return {
    type: POST_PRODUCT_FAIL,
    payload: err,
  };
};

export const deleteProduct = uuid => {
  return {
    type: DELETE_PRODUCT,
    payload: uuid,
  };
};

export const deleteProductSuccess = () => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
  };
};

export const deleteProductFail = err => {
  return {
    type: DELETE_PRODUCT_FAIL,
    payload: err,
  };
};

export const searchProduct = filter => {
  return {
    type: SEARCH_PRODUCTS,
    payload: filter,
  };
};

export const searchProductSuccess = () => {
  return {
    type: SEARCH_PRODUCTS_SUCCESS,
  };
};

export const searchProductFail = err => {
  return {
    type: SEARCH_PRODUCTS_FAIL,
    payload: err,
  };
};
