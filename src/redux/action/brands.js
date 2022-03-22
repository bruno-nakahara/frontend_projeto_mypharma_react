import {
  DELETE_BRAND,
  DELETE_BRAND_FAIL,
  DELETE_BRAND_SUCCESS,
  EDIT_BRAND,
  EDIT_BRAND_FAIL,
  EDIT_BRAND_SUCCESS,
  GET_BRANDS,
  GET_BRANDS_FAIL,
  GET_BRANDS_SUCCESS,
  POST_BRAND,
  POST_BRAND_FAIL,
  POST_BRAND_SUCCESS,
  SEARCH_BRANDS,
  SEARCH_BRANDS_FAIL,
  SEARCH_BRANDS_SUCCESS,
} from '../constants/brands';

export const getBrands = () => {
  return {
    type: GET_BRANDS,
  };
};

export const setBrands = brands => {
  return {
    type: GET_BRANDS_SUCCESS,
    payload: brands,
  };
};

export const getBrandsFail = err => {
  return {
    type: GET_BRANDS_FAIL,
    payload: err,
  };
};

export const editBrand = updateBrand => {
  return {
    type: EDIT_BRAND,
    payload: updateBrand,
  };
};

export const editBrandSuccess = () => {
  return {
    type: EDIT_BRAND_SUCCESS,
  };
};

export const editBrandFail = err => {
  return {
    type: EDIT_BRAND_FAIL,
    payload: err,
  };
};

export const postBrand = newBrand => {
  return {
    type: POST_BRAND,
    payload: newBrand,
  };
};

export const postBrandSuccess = () => {
  return {
    type: POST_BRAND_SUCCESS,
  };
};

export const postBrandFail = err => {
  return {
    type: POST_BRAND_FAIL,
    payload: err,
  };
};

export const deleteBrand = uuid => {
  return {
    type: DELETE_BRAND,
    payload: uuid,
  };
};

export const deleteBrandSuccess = () => {
  return {
    type: DELETE_BRAND_SUCCESS,
  };
};

export const deleteBrandFail = err => {
  return {
    type: DELETE_BRAND_FAIL,
    payload: err,
  };
};

export const searchBrand = filter => {
  return {
    type: SEARCH_BRANDS,
    payload: filter,
  };
};

export const searchBrandSuccess = () => {
  return {
    type: SEARCH_BRANDS_SUCCESS,
  };
};

export const searchBrandFail = err => {
  return {
    type: SEARCH_BRANDS_FAIL,
    payload: err,
  };
};
