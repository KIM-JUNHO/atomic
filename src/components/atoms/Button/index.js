import React from 'react';

export const Button = ({ type, ...props }) => {
  return <button {...props} type={type} />;
};
