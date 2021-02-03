import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { CLEAR_CART, GET_TOTALS } from '../actions';

const CartContainer = ({ cart = [], total, dispatch }) => {
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          const {
            id, img, title, price, amount,
          } = item;
          return (
            <CartItem key={item.id} id={id} img={img} title={title} price={price} amount={amount} />
          );
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total
            {' '}
            <span>
              $
              {total}
            </span>
          </h4>
        </div>
        <button type="button" className="btn clear-btn" onClick={() => dispatch({ type: CLEAR_CART })}>clear cart</button>
      </footer>
    </section>
  );
};

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  cart: store.cart,
  total: store.total,
});

export default connect(mapStateToProps)(CartContainer);
