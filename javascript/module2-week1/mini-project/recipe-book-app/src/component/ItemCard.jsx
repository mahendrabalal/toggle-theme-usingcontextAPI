import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemCard({ item, onDelete, onAddToCart}) {
  const [Deleted, setDeleted] = useState(false);
  const[isAdded, setAdded] = useState(false)

  const handleDelete = () => {
    setDeleted(true);
    onDelete(item.id);
  };
 

  const handleAdded= () => {
    setAdded(true);
    onAddToCart(item.id);
  }

  
  if (!item || Deleted) {
    return null;
  }

  return (
    <li key={item.id}>
      
        <div>
        <Link to={`/item/${item.id}`}>
          {item.image && <img src={item.image} alt={item.name} />}
          <p>{item.name}</p>
          <p>Calories: {item.calories}</p>
          {item.calories > 300 ? <p>High Calories</p> : <p>Low Calories</p>}
          </Link>
          {!isAdded ? (
            <button onClick={handleAdded}>Add As Favourate</button>
          ) : (
            <button disabled>Already Added</button>
          )}
          <button onClick={handleDelete}>Delete</button>
        </div>
    </li>
  );
}

export default ItemCard;
