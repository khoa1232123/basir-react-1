import React from 'react';

const MessageBox = ({ variant, children, ...props }) => {
  return <div className={`alert alert-${variant}`}>{children}</div>;
};

export default MessageBox;
