import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutSteps } from '../../components';
import { savePaymentMethod } from '../../redux/actions';

const PaymentMethod = (props) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  useEffect(() => {
    if (!shippingAddress.address) {
      props.history.push('/shipping');
    }
  }, [props.history, shippingAddress.address]);

  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const dispatch = useDispatch();
  console.log(paymentMethod);
  const handleSubmit = () => {
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/placeorder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <div className="row justify-content-center">
        <form className="form col-8" onSubmit={handleSubmit}>
          <h3>Payment</h3>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="paypal"
              value="paypal"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="paypal">
              Paypal
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="stripe"
              value="stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="stripe">
              Stripe
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="paylater"
              value="paylater"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="paylater">
              Cash on delivery
            </label>
          </div>
          <button className="btn btn-primary mb-3 w-100" type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentMethod;
