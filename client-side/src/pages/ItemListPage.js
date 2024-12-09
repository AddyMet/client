import React, { useEffect, useState } from 'react';

function ItemListPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from local storage or mock API
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListPage;