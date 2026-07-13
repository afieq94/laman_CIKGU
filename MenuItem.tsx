import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <li>
      <span>{item.name}</span>
      <span>{item.price}</span>
    </li>
  );
};

export default MenuItem;
