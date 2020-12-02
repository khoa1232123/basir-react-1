import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './components';
import { Cart, Home, ProductDetails, Products, Signin } from './containers';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/product/:id" exact component={ProductDetails} />
          <Route path="/products" exact component={Products} />
          <Route path="/signin" exact component={Signin} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
