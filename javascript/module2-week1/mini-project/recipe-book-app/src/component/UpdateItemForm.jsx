import React from "react";
import ItemCard from "./ItemCard";
import AddItemForm from "./AddItemForm";
import List from "./List";
import { useState } from 'react'; // Import useState hook

function UpdateItemForm() {
  // Example data
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", description: "Description 1" },
    { id: 2, name: "Item 2", description: "Description 2" },
    // Add more items as needed
  ]);

  return (
    <>
      <List data={items} /> {/* Pass the items data to the List component */}
    </>
  );
}

export default UpdateItemForm;
