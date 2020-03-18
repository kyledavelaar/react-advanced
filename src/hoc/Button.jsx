import React from 'react';

export const Button = ({ type = 'primary', children }) => (
  <button style={{ background: type === 'primary' ? 'green' : 'red' }}>
    { children }
  </button>
)


export default Button;