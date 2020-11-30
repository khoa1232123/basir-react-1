import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { LoadingBox, MessageBox, ProductItem } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions';

const Home = () => {
  const product = useSelector((state) => state.product);
  const { products, loading, error } = product;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <Row>
        <Col>
          <h3>Home</h3>
        </Col>
      </Row>
      <Row>
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
      </Row>
    </>
  );
};

export default Home;
