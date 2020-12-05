import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'nothingsecret',
    {
      expiresIn: '1d',
    }
  );
};
export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log(authorization);
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    console.log(token);
    jwt.verify(
      token,
      process.env.JWT_SECRET || 'nothingsecret',
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};
