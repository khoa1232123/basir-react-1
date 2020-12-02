import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MessageBox } from '../../components';
import { addToCart, removeToCart } from '../../redux/actions';

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  const handleRemoveCartItem = (productId) => {
    dispatch(removeToCart(productId));
  };
  const handleCheckout = () => {
    props.history.push('/signin?redirect=shipping');
  };

  return (
    <div className="row top">
      <div className="col-8">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <div>
            {
              // eslint-disable-next-line array-callback-return
              cartItems.map((item, index) => (
                <div className="row" key={index}>
                  <div className="col-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small w-100"
                    />
                  </div>
                  <div className="col-4">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div className="col-2">
                    <p>${item.price}</p>
                  </div>
                  <div className="col-2">
                    <select
                      className="form-control"
                      value={item.qty}
                      onChange={(e) => {
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        );
                      }}
                    >
                      {[...Array(item.countInStock).keys()].map((x, index) => (
                        <option key={index} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveCartItem(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        )}
      </div>
      <div className="col-4">
        <div className="card card-body">
          <div className="row">
            <div className="col-12">
              <h4>
                Subtotal {cartItems.reduce((a, b) => a + Number(b.qty), 0)}{' '}
                items:{' '}
                {cartItems.reduce(
                  (a, b) => a + Number(b.qty) * Number(b.price),
                  0
                )}{' '}
                $
              </h4>
            </div>
            <div className="col-12">
              <button
                className="btn btn-primary"
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
