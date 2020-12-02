import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { LoadingBox, MessageBox, ProductItem } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions';

const Products = () => {
  const product = useSelector((state) => state.product);
  const { products, loading, error } = product;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const handleAddToCart = (productId) => {
    console.log(productId);
  };
  return (
    <>
      <Row>
        <Col>
          <h3>Products</h3>
        </Col>
      </Row>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Row>
          {products.map((product, index) => (
            <Col lg="3" key={index} className="mb-4">
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Products;
