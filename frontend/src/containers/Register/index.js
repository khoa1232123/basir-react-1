import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../redux/actions';
import { LoadingBox, MessageBox } from '../../components';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  console.log(props);
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
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match!');
    } else {
      dispatch(userRegister(name, email, password));
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <h3 className="text-center">Register</h3>
        {loading && <LoadingBox />}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name address</label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="form-control"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Enter confirm password"
              className="form-control"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mb-3 w-100" type="submit">
            Register
          </button>
          <br />
          <div>
            Already have an account?{' '}
            <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
