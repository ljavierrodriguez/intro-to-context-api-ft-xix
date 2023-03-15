import React, { createContext, useState } from 'react'

export const GlobalCartContext = createContext(null);

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([
        { id: 1, name: 'Product 1', price: 100, quantity: 1 },
        { id: 2, name: 'Product 2', price: 200, quantity: 3 }
    ]);

    const addToCart = prod => {
        let found = cart.find((item) => item.id === prod.id);
        if(found){
            found.quantity++;
            setCart((prevProds) => [...prevProds]);
        }else{
            setCart((prevProds) => [...prevProds, {...prod, quantity: 1 }])
        }
    }

    return (
        <GlobalCartContext.Provider value={{ cart, addToCart }}>
            {children}
        </GlobalCartContext.Provider>
    )
}

export default CartContext