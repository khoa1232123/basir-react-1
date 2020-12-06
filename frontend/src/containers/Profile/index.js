import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingBox, MessageBox } from '../../components';
import { getDetailsUser, updateUserProfile } from '../../redux/actions';

const Profile = () => {
  const dispatch = useDispatch();
  const { userDetails, loading, error, success } = useSelector(
    (state) => state.user
  );
  console.log(userDetails);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  useEffect(() => {
    dispatch(getDetailsUser());
  }, [dispatch]);

  useEffect(() => {
    if (userDetails) {
      setEmail(userDetails.email);
      setName(userDetails.name);
    }
  }, [userDetails]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match!');
    } else {
      dispatch(updateUserProfile({ name, email, password }));
    }
  };
  return (
    <div>
      <h1>Profile</h1>
      {loading && <LoadingBox />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      {success && (
        <MessageBox variant="success">Update profile success</MessageBox>
      )}
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
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;
