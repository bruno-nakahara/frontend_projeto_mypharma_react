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

const initialState = {
  categories: [],
  loading: false,
  error: null,
  category: {},
};

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
    case POST_CATEGORY:
    case DELETE_CATEGORY:
    case EDIT_CATEGORY:
    case SEARCH_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CATEGORY_SUCCESS:
    case EDIT_CATEGORY_SUCCESS:
    case POST_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_CATEGORY_FAIL:
    case EDIT_CATEGORY_FAIL:
    case POST_CATEGORY_FAIL:
    case GET_CATEGORIES_FAIL:
    case SEARCH_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_CATEGORIES_SUCCESS:
    case SEARCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default CategoriesReducer;
