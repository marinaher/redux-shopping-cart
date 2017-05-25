export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
})

// addToCart is taking in an item and returning an object that has a type and payload