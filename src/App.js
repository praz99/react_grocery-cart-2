import React from 'react';

// redux stuff
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

// items
import cartItems from './cart-items';

// reducer
import reducer from './reducer';

// initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
