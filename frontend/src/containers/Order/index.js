import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsOrder } from '../../redux/actions';
import { LoadingBox, MessageBox } from '../../components';
import { Link } from 'react-router-dom';

const Order = (props) => {
  const orderId = props.match.params.id;
  const { orderDetails, loading, error } = useSelector((state) => state.order);
  console.log(orderDetails);
  const {
    shippingAddress,
    paymentMethod,
    orderItems,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = orderDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <h3>Order {orderId}</h3>
      <div className="row justify-content-center">
        <div className="col-8">
          {shippingAddress && (
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
          )}
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
              orderItems &&
                orderItems.length > 0 &&
                orderItems.map((item, index) => (
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
                <div>${itemsPrice}</div>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <div>Shipping: </div>
                <div>${shippingPrice}</div>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <div>Tax (10%): </div>
                <div>${taxPrice}</div>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <div>
                  <b>Total: </b>
                </div>
                <div>${totalPrice}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
