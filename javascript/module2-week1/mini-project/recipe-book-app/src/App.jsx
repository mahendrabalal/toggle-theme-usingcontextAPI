import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './component/Navbar';
import './App.css';
import Sidebar from './component/Sidebar';
import Home from "./component/Home";
import Footer from './component/Footer';
import List from './component/List';
import recipeData from "./assets/recipes.json";
import AboutPage from './pages/AboutPage';
import ItemDetails from './pages/ItemDetails';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from "./pages/NotFoundPage";
import UpdateItemForm from './component/UpdateItemForm';
import AddItemForm from './component/AddItemForm';

function App() {
  const [recipes, setRecipes] = useState(recipeData);
  const [Items, setItems] = useState([]);
  const[cartItems, setCartItems]=useState([])

  const handleDelete = (itemId) => {
    setRecipes(recipes.filter(item => item.id !== itemId));
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  const handleAddNewItem = (newItem) => {
  setItems([...Items, newItem])
  }

  return (
   <Router>
   <div className='app-container'>
      <Navbar className="navbar"/>
      <Sidebar className="sidebar" />
      <div className="main-content">
      <Routes>
      <Route path="home/" element={<Home recipes={recipes} onDelete={handleDelete} onAddToCart={handleAddToCart} />} />
      <Route path="/" element={<DashboardPage recipes={recipes} onDelete={handleDelete} onAddToCart={handleAddToCart} />} />
        <Route path ="/about" element={<AboutPage />} />
        <Route path ="/addItems" element={<AddItemForm />} />
        <Route path="/item/:id" element={<ItemDetails recipes={recipes} />} />
        <Route path="/list" element={<List data={recipes} onDelete={handleDelete} onAddToCart={handleAddToCart} />} />
        <Route path="*" element={ <NotFoundPage/> } />
      </Routes>
      
      </div>
      <Footer className="footer" />
    </div>
   </Router>
  );
}

export default App;
