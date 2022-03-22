import { combineReducers } from 'redux';
import BrandsReducer from './brandsReducer';
import CategoriesReducer from './categoriesReducer';
import ProductsReducer from './productsReducer';

const rootReducer = combineReducers({
  brandsReducer: BrandsReducer,
  categoriesReducer: CategoriesReducer,
  productsReducer: ProductsReducer,
});

export default rootReducer;
