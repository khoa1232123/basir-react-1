import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './components';
import {
  Cart,
  Home,
  PaymentMethod,
  PlaceOrder,
  ProductDetails,
  Products,
  ShippingAddress,
  Signin,
} from './containers';
import Register from './containers/Register';

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
          <Route path="/register" exact component={Register} />
          <Route path="/shipping" exact component={ShippingAddress} />
          <Route path="/payment" exact component={PaymentMethod} />
          <Route path="/placeorder" exact component={PlaceOrder} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
