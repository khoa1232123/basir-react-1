import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCart, userSignout } from '../../../redux/actions';
import './style.css';

const Menu = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  console.log(user);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const handleSignout = () => {
    dispatch(userSignout());
  };

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
        <li className="nav-item">
          {userInfo ? (
            <div className="dropdown">
              <Link to="#" className="nav-link dropdown-toggle">
                {userInfo.name}
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="#" onClick={handleSignout}>
                  Sign out
                </Link>
              </div>
            </div>
          ) : (
            <Link to="/signin" className="nav-link">
              Signin
            </Link>
          )}
        </li>
      </ul>
    </>
  );
};

export default Menu;
