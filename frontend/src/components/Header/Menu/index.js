import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCart } from '../../../redux/actions';

const Menu = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <>
      <ul className="navbar-nav ml-auto mr-0">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            Cart
            <span className="totalCart">
              {cartItems.reduce((a, b) => a + Number(b.qty), 0)}
            </span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
