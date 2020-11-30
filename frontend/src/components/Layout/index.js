import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const Layout = (props) => {
  return (
    <>
      <Header />
      <main role="main" style={{ marginTop: '70px' }}>
        <div className="container">{props.children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
