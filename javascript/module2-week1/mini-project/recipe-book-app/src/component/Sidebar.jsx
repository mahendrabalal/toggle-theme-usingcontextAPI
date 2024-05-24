import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/addItems">Add Your Favourate Recipe</Link></li>
            
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
