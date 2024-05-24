import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './styles.css';

const MainLayout = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const addItem = (itemName) => {
    const newItem = {
      id: Math.random().toString(36).substring(7),
      name: itemName,
    };
    setItems([...items, newItem]);
  };

  const updateItem = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
    setSelectedItem(null);
  };

  return (
    <div className="main-layout">
      <Sidebar
        items={items}
        addItem={addItem}
        updateItem={updateItem}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <div className="main-content">
        <h1>Dashboard</h1>
        {/* Other Dashboard content can go here */}
      </div>
    </div>
  );
};

export default MainLayout;
