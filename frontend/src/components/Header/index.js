import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Logo />
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <Search />
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
