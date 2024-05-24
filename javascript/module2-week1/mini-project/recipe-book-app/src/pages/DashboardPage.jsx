import React from 'react';
import List from '../component/List';


function DashboardPage({recipes, onDelete, onAddToCart}) { 
  return (
    <div>
      <h1>Dashboard</h1>
      <List data={recipes} onDelete={onDelete} onAddToCart={onAddToCart} />
    </div>
  );
}

export default DashboardPage;
