import { DECREASE, INCREASE, REMOVE, CLEAR_CART } from './actions';

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if(action.type === DECREASE) {
    console.log("decreased");
  }

  if(action.type === INCREASE) {
    console.log("increased");
  }

  if(action.type === REMOVE) {
    return {...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)}
  }
  return state;
}

export default reducer;