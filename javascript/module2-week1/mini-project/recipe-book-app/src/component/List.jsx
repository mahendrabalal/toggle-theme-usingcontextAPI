import React, { useState } from 'react';
import ItemCard from './ItemCard';
import AddItemForm from './AddItemForm';

function List({ data, onDelete, onAddToCart }) {
  const [items, setItems] = useState(data);

  const handleDelete = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
    onDelete(itemId);
  };


  const handleAddItem = (newItem) => {
    setItems([newItem, ...items]);
  };

  return (
    <div>
      <AddItemForm onAddItem={handleAddItem} />
      <ul>
        {items && items.length > 0 ? (
          items.map(item => (
            <ItemCard
              key={item.id}
              item={item}
              onDelete={handleDelete}
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          <p>No items to display.</p>
        )}
      </ul>
    </div>
  );
}

export default List;
