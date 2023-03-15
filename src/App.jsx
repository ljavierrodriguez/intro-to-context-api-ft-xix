import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import CartContext from './context/CartContext'
import UserContext from './context/UserContext'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Products from './pages/Products'

const App = () => {
    return (
        <UserContext>
            <CartContext>
                <BrowserRouter>
                    <Menu />
                    <Routes>
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </CartContext>
        </UserContext>
    )
}

export default App