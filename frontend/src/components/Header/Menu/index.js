import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
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
          <a
            className="nav-link disabled"
            href="/"
            tabIndex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul>
    </>
  );
};

export default Menu;
