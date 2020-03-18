import React from 'react';

export const Link = ({ children, type='primary' }) => (
  <a href="" style={{ color: type === 'primary' ? 'magenta' : 'orange' }}>
    { children }
  </a>
)
export default Link;