import React from 'react';
import { categoryData } from './data/categoryData';
import { MenuItem } from './MenuItem';

const MenuWithCategory = () => {
  return (
    <div>
      <h1>Menu</h1>
      {categoryData.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuWithCategory;
