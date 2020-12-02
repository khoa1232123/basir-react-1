import React, { useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, getProductDetails } from '../../redux/actions';
import { LoadingBox, MessageBox } from '../../components';
import { useState } from 'react';

const ProductDetails = (props) => {
  const productId = props.match.params.id;
  const product = useSelector((state) => state.product);
  const { productDetails, loading, error } = product;
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(productId, qty));
    props.history.push('/cart');
  };

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Row>
          <Col xs={5}>
            <img
              className="w-100"
              src={productDetails.image}
              alt={productDetails.name}
            />
          </Col>
          <Col xs={4}>
            <h1 className="h5">{productDetails.name}</h1>
            <p>{productDetails.rating} stars</p>
            <h3 className="h6">{productDetails.price}$</h3>
            <p>
              Description: <br />
              {productDetails.description}
            </p>
          </Col>
          <Col xs={3}>
            <Card className="p-2">
              <p>Seller</p>
              <b>Puma</b>

              <p>{productDetails.rating} stars</p>

              <h3 className="h6">{productDetails.price}$</h3>
              <p>Qty: {productDetails.countInStock}</p>
              {productDetails.countInStock > 0 && (
                <>
                  <div className="d-flex justify-content-between mb-2">
                    <div>Select</div>
                    <div>
                      <select
                        className="form-control"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(productDetails.countInStock).keys()].map(
                          (x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                  <Button onClick={handleAddToCart}>Add to Card</Button>
                </>
              )}
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductDetails;
