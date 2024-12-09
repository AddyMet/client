import React, { useState, useEffect } from 'react';

const ItemForm = ({ initialItem, onSave, onCancel }) => {
  const [item, setItem] = useState({
    name: initialItem?.name || '',
    description: initialItem?.description || '',
    quantity: initialItem?.quantity || 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  return (
    <div className="item-form">
      <h2>{initialItem ? 'Edit Item' : 'Add New Item'}</h2>
      <form onSubmit={(e) => { e.preventDefault(); onSave(item); }}>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={item.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={item.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default ItemForm;