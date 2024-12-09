import React from 'react';

const ItemPreview = ({ item, onClick }) => {
  return (
    <div className="item-preview" onClick={onClick}>
      <h3>{item.name}</h3>
      <p>{item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
};

export default ItemPreview;