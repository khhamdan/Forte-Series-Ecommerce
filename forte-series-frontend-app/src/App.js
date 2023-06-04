import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import AllForteProducts from './pages/ProductPages/AllForteProducts';
import BestSellerProductDetail from './pages/ProductDetailPages/BestSellerProductDetail';
import Register from './pages/account/Register';
import Login from './pages/account/Login';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProducts" element={<AllForteProducts />} />
        <Route
          path="/bestSellersProductDetail/:id"
          element={<BestSellerProductDetail />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
