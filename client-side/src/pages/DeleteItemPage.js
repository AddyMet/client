import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.splice(id, 1);
    localStorage.setItem('items', JSON.stringify(items));
    alert('Item deleted');
    navigate('/items');
  };

  return (
    <div>
      <h2>Delete Item</h2>
      <p>Are you sure you want to delete this item?</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => navigate('/items')}>Cancel</button>
    </div>
  );
}

export default DeleteItemPage;