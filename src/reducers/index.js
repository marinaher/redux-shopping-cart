import { combineReducers } from 'redux';
import itemReducer from './item';
import shoppingCartReducer from './shoppingCart';

// Each individual reducer is combined to form one entity that is our redux store

const rootReducer = combineReducers({
  items: itemReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;