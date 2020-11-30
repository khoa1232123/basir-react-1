import React from 'react';

const Cart = (props) => {
  const productId = props.match.params.id;
  console.log(props);
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  return (
    <div>
      <h1>Cart</h1>
      <h2>
        id: {productId} qty: {qty}
      </h2>
    </div>
  );
};

export default Cart;
