const INIT_STATE = [];

import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';
// the above helps maintain unison and prevent any mistakes that can occur with string typing

export default (state = INIT_STATE, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return [ ...state, action.payload ]
      // destructuring of array (state) and adding to the end of the array the action.payload
    case REMOVE_FROM_CART:
      const keepItem = (item) => { return item.id !== action.payload };
      return state.filter(keepItem)
      // keepItem is a subfunction that filter invokes in every single element in our initial state
      // every single time, it checks for our item id and matches with our payload item.id and checks to see if they're the same. if not the same, the filter function goes ahead and adds that item from redux store to temp array and returns at end of array
    default:
      return state
  }
}