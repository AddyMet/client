import React from 'react';
import ItemPreview from './ItemPreview';

const ItemList = ({ items, onItemClick }) => {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <ItemPreview key={index} item={item} onClick={() => onItemClick(item)} />
      ))}
    </div>
  );
};

export default ItemList;