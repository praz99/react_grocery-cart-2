/* eslint-disable prefer-const */

import {
  REMOVE, CLEAR_CART, GET_TOTALS, TOGGLE_AMOUNT,
} from './actions';

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  // if(action.type === DECREASE) {
  //   let tempCart = state.cart.map((cartItem) => {
  //     if(cartItem.id === action.payload.id) {
  //       cartItem = {...cartItem, amount: cartItem.amount - 1 };
  //     }
  //     return cartItem;
  //   });

  //   return { ...state, cart: tempCart };
  // }

  // if(action.type === INCREASE) {
  //   let tempCart = state.cart.map((cartItem) => {
  //     if(cartItem.id === action.payload.id) {
  //       cartItem = {...cartItem, amount: cartItem.amount + 1 };
  //     }
  //     return cartItem;
  //   });
  //   return {...state, cart: tempCart};
  // }

  if (action.type === REMOVE) {
    return { ...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id) };
  }

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
      const { price, amount } = cartItem;
      const itemTotal = price * amount;
      const cartTotalTemp = cartTotal;

      cartTotalTemp.total += itemTotal;
      cartTotalTemp.amount += amount;
      return cartTotalTemp;
    },
    {
      total: 0,
      amount: 0,
    });
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          let cartItemTemp = cartItem;
          if (action.payload.toggle === 'inc') {
            cartItemTemp = { ...cartItem, amount: cartItem.amount + 1 };
            return cartItemTemp;
          }
          if (action.payload.toggle === 'dec') {
            cartItemTemp = { ...cartItem, amount: cartItem.amount - 1 };
            return cartItemTemp;
          }
        }
        return cartItem;
      }),
    };
  }
  return state;
}

export default reducer;
