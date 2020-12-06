import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CheckoutSteps, LoadingBox, MessageBox } from '../../components';
import { createOrder } from '../../redux/actions';

const PlaceOrder = (props) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod, cartItems } = cart;
  const { loading, error, orderD, success } = useSelector(
    (state) => state.order
  );
  console.log(orderD);
  useEffect(() => {
    if (success && orderD) {
      props.history.push(`/order/${orderD._id}`);
    }
  }, [orderD, props.history, success]);
  const dispatch = useDispatch();
  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemsPrice = toPrice(cartItems.reduce((a, b) => a + b.qty * b.price, 0));
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.1 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const handlePlaceOrder = () => {
    dispatch(createOrder({ ...cart, orderItems: cartItems }));
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card mb-2">
            <h3>Shipping</h3>
            <p>
              <b>Name: </b>
              {shippingAddress.fullName}
            </p>
            <p>
              <b>Address: </b>
              {shippingAddress.address}, {shippingAddress.city},{' '}
              {shippingAddress.postalCode}, {shippingAddress.country}
            </p>
          </div>
          <div className="card mb-2">
            <h3>Payment</h3>
            <p>
              <b>Method: </b>
              {paymentMethod}
            </p>
          </div>
          <div className="card mb-2">
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
                  <div className="col-6">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div className="col-4">
                    <p>
                      {item.qty} x ${item.price} = {item.qty * item.price}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="col-4">
          <div className="card p-3">
            <h3>Order</h3>
            <div className="row">
              <div className="col-12 d-flex justify-content-between">
                <div>Items: </div>
                <div>${cart.itemsPrice}</div>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <div>Shipping: </div>
                <div>${cart.shippingPrice}</div>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <div>Tax (10%): </div>
                <div>${cart.taxPrice}</div>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <div>
                  <b>Total: </b>
                </div>
                <div>${cart.totalPrice}</div>
              </div>
              <div className="col-12 mt-3">
                <button className="btn btn-primary" onClick={handlePlaceOrder}>
                  Place Order
                </button>
                {loading && <LoadingBox />}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
