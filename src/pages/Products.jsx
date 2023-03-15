import React, { useContext, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { GlobalCartContext } from '../context/CartContext';

const Products = () => {

  const { addToCart } = useContext(GlobalCartContext);

  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 },
  ]);

  return (
    <div className="container">
      <div className="row">
        {
          products.map((prod) => {
            return (
              <div className="col-md-4" key={prod.id}>
                <div className="card my-3">
                  <div className="card-body">
                    <h4 className="card-title">{prod.name}</h4>
                    <p className="card-text">${prod.price}</p>
                  </div>
                  <div className="card-footer text-end">
                    <button className="btn btn-primary btn-sm" onClick={() => addToCart(prod)}>
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Products