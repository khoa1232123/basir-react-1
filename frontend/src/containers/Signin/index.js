import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submited');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 text-center">
        <h3>Sign In</h3>
      </div>
      <div className="col-4">
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
            New customer? <Link to="/register">Create your account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
