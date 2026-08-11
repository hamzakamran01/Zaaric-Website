import React from 'react';

const initials = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

const Avatar = ({ name, size = 'md' }) => (
  <span className={`co-avatar co-avatar--${size}`}>{initials(name)}</span>
);

export default Avatar;
