import React from 'react';
import List from './List';

const Home = ({ recipes, onDelete, onAddToCart }) => {
  return (
    <div>
      <List data={recipes} onDelete={onDelete} onAddToCart={onAddToCart} />
    </div>
  )
}


export default Home;
