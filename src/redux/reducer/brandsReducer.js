import {
  DELETE_BRAND,
  DELETE_BRAND_FAIL,
  DELETE_BRAND_SUCCESS,
  EDIT_BRAND,
  EDIT_BRAND_FAIL,
  EDIT_BRAND_SUCCESS,
  GET_BRANDS,
  GET_BRANDS_SUCCESS,
  POST_BRAND,
  POST_BRAND_FAIL,
  POST_BRAND_SUCCESS,
  SEARCH_BRANDS,
  SEARCH_BRANDS_SUCCESS,
} from '../constants/brands';

const initialState = {
  brands: [],
  loading: false,
  error: null,
};

const BrandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BRANDS:
    case POST_BRAND:
    case DELETE_BRAND:
    case EDIT_BRAND:
    case SEARCH_BRANDS:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BRAND_SUCCESS:
    case EDIT_BRAND_SUCCESS:
    case POST_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_BRAND_FAIL:
    case EDIT_BRAND_FAIL:
    case POST_BRAND_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_BRANDS_SUCCESS:
    case SEARCH_BRANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: action.payload,
      };
    default:
      return state;
  }
};

export default BrandsReducer;
