import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './components';
import { Cart, Home, ProductDetails, Products } from './containers';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart/:id?" exact component={Cart} />
          <Route path="/product/:id" exact component={ProductDetails} />
          <Route path="/products" exact component={Products} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
