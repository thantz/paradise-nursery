import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
    const [cartItems, setCartItems] = useState([]);
    
    const products = [
        { id: 1, name: 'Rose Plant', price: 15.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Tulip Plant', price: 12.99, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Cactus Plant', price: 9.99, image: 'https://via.placeholder.com/150' },
    ];

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    return (
        <Router>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
