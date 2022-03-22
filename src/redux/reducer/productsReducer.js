import {
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  POST_PRODUCT,
  POST_PRODUCT_FAIL,
  POST_PRODUCT_SUCCESS,
  SEARCH_PRODUCTS,
  SEARCH_PRODUCTS_SUCCESS,
} from '../constants/products';

const initialState = {
  products: [],
  loading: false,
  error: null,
  product: {},
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
    case POST_PRODUCT:
    case DELETE_PRODUCT:
    case EDIT_PRODUCT:
    case SEARCH_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PRODUCT_SUCCESS:
    case EDIT_PRODUCT_SUCCESS:
    case POST_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_PRODUCT_FAIL:
    case EDIT_PRODUCT_FAIL:
    case POST_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PRODUCTS_SUCCESS:
    case SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default ProductsReducer;
