import React, { useContext, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { MdLogout, MdLogin } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalCartContext } from '../context/CartContext';
import { GlobalUserContext } from '../context/UserContext';

const Menu = () => {

    const { cart } = useContext(GlobalCartContext);
    const { user, logout, login } = useContext(GlobalUserContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.isAuth) {
            navigate('/login');
        }
    }, [])

    useEffect(() => {
        if (!user?.isAuth) {
            navigate('/login');
        }
    }, [user])

    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/cart"><FaShoppingCart />({cart.length})</Link>
            </li>
            {
                user.isAuth ?
                    (
                        <>
                            <li className="nav-item">
                                <button className="btn btn-primary btn-sm my-1" onClick={logout}>
                                    <MdLogout /> Salir
                                </button>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link disabled">{user?.name || user?.email}</span>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <button className="btn btn-primary btn-sm my-1" onClick={login}>
                                <MdLogin /> Entrar
                            </button>
                        </li>
                    )
            }

        </ul>
    )
}

export default Menu