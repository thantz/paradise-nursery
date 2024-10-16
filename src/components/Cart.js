import React, { useState } from 'react';
import './Cart.css'; // Optional: For custom styles

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Spider Plant',
            price: 12,
            quantity: 1,
            image: 'https://example.com/spider-plant.jpg', // Replace with your image link
        },
        {
            id: 2,
            name: 'Peace Lily',
            price: 18,
            quantity: 1,
            image: 'https://example.com/peace-lily.jpg', // Replace with your image link
        },
        {
            id: 3,
            name: 'Snake Plant',
            price: 15,
            quantity: 1,
            image: 'https://example.com/snake-plant.jpg', // Replace with your image link
        },
    ]);

    // Update Quantity Handler
    const updateQuantity = (id, amount) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
        ));
    };

    // Remove Item Handler
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Calculate Total Amount
    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="container">
            <h2>Total Cart Amount: ${totalAmount}</h2>
            {cartItems.map(item => (
                <div className="row mb-4" key={item.id} style={{borderBottom: '1px solid #ddd'}}>
                    <div className="col-md-3">
                        <img src={item.image} alt={item.name} className="img-fluid"/>
                    </div>
                    <div className="col-md-9">
                        <h4>{item.name}</h4>
                        <p>${item.price}</p>
                        <div className="quantity-control">
                            <button className="btn btn-outline-secondary" onClick={() => updateQuantity(item.id, -1)}>-</button>
                            <span className="mx-2">{item.quantity}</span>
                            <button className="btn btn-outline-secondary" onClick={() => updateQuantity(item.id, 1)}>+</button>
                        </div>
                        <p>Total: ${item.price * item.quantity}</p>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
