export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

// addToCart is taking in an item and returning an object that has a type and payload

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id
});

// removeFromCart is taking in the id of an item and then filters the existing shopping cart and removes the item