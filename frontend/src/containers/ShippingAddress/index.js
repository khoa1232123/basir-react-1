import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutSteps } from '../../components';
import { saveShippingAddress } from '../../redux/actions';

const ShippingAddress = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const { userInfo } = user;
  const { shippingAddress } = cart;
  useEffect(() => {
    if (!userInfo) {
      props.history.push(`/signin?redirect=${props.match.path}`);
    }
  }, [props.history, props.match.path, userInfo]);

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { fullName, address, city, postalCode, country };
    dispatch(saveShippingAddress(data));
    props.history.push('/payment');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 />
      <div className="row  justify-content-center">
        <form className="form col-8" onSubmit={handleSubmit}>
          <h3>Shipping Address</h3>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter full name"
              className="form-control"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter address"
              className="form-control"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter city"
                  className="form-control"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Enter country"
                  className="form-control"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              placeholder="Enter postal code"
              className="form-control"
              required
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mb-3 w-100" type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShippingAddress;
