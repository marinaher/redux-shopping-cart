const INIT_STATE = [];

import { ADD_TO_CART } from '../actions';

export default (state = INIT_STATE, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return [ ...state, action.payload ]
      // destructuring of array (state) and adding to the end of the array the action.payload
    default:
      return state
  }
}