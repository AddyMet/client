import React from 'react';

const ItemDetail = ({ item, onEdit, onDelete }) => {
  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ItemDetail;