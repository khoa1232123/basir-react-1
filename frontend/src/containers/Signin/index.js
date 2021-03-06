import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignin } from '../../redux/actions';
import { LoadingBox, MessageBox } from '../../components';

const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const user = useSelector((state) => state.user);
  const { userInfo, loading, error } = user;

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props, redirect, userInfo]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignin(email, password));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <h3 className="text-center">Sign In</h3>
        {loading && <LoadingBox />}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mb-3 w-100" type="submit">
            Submit
          </button>
          <br />
          <div>
            New customer?{' '}
            <Link to={`/register?redirect=${redirect}`}>
              Create your account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
