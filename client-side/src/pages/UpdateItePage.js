import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UpdateItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState({ name: '', quantity: '' });

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    const itemToUpdate = items.find((_, index) => index.toString() === id);
    if (itemToUpdate) {
      setItem(itemToUpdate);
    }
  }, [id]);

  const handleUpdate = () => {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items[parseInt(id)] = item;
    localStorage.setItem('items', JSON.stringify(items));
    alert('Item updated');
  };

  return (
    <div>
      <h2>Update Item</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={item.name}
        onChange={(e) => setItem({ ...item, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={item.quantity}
        onChange={(e) => setItem({ ...item, quantity: e.target.value })}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateItemPage;