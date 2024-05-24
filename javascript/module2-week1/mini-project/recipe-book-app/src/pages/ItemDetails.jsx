import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = ({ recipes }) => {
  const { id } = useParams();
  const item = recipes.find(recipe => recipe.id === id);
  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className='detailsCard'>
    {item.image && <img src={item.image} alt={item.name} />}
      <h1>{item.name}</h1>
      <p>Calories: {item.calories}</p>
      <p>servings: {item.servings}</p>
     
    </div>
  );
}

export default ItemDetails;
