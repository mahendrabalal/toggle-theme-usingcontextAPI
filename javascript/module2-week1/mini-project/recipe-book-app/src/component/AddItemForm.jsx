import React, { useState } from 'react';

function AddItemForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    calories: '',
  });
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      ...formData,
      id: Date.now().toString(),
    };
    onAddItem(newItem);
    setFormData({
      name: '',
      description: '',
      image: '',
      calories: '',
    });
    setShowForm(false);
  };

  return (
    <div>
      {showForm && (
        <form onSubmit={handleSubmit} style={formStyle}>
          <label style={labelStyle}>Image: </label>
          <input
            style={inputStyle}
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <label style={labelStyle}>Name of Dish: </label>
          <input
            style={inputStyle}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name of food"
          />
          <label style={labelStyle}>Calories: </label>
          <input
            style={inputStyle}
            type="text"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            placeholder="calories count"
          />
          <label style={labelStyle}>Description: </label>
          <input
            style={inputStyle}
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <button style={buttonStyle} type="submit">Add Your Favourite Recipe</button>
        </form>
      )}
    </div>
  );
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '700px',
  margin: '0 auto',
  padding: '5px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  background: '#f9f9f9',
};

const labelStyle = {
  margin: '10px 0 5px',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '10px',
  margin: '5px 0 15px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  margin: '10px 0',
  fontSize: '16px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: 'gray',
  color: 'white',
  cursor: 'pointer',
};

export default AddItemForm;
