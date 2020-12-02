import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, onClick }) => {
  return (
    <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </Card.Title>
        <Card.Text>{product.price}$</Card.Text>
        <Button variant="primary">Add to Card</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
