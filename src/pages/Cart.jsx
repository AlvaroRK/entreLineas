import React from "react";
import { useCart } from "../context/CartContext";
import "./cart.css";

const Cart = () => {
  const { cart, getTotal, updateQuantity, removeFromCart, checkout } = useCart();
  return (
    <div className="cartContainer">
      <h1 className="cartTitle">Carrito de compras</h1>

      {cart.length === 0 ? (
        <p className="cartEmpty">El carrito esta vacio</p>
      ) : (
        <div className="cartContent">
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cartItem">
                <div>
                  <img className="cartItemImage" src={item.image} alt="" />
                  <h2 className="cartItemTitle">{item.title}</h2>
                  <p className="cartItemAuthor">{item.author}</p>
                  <p className="cartItemPrice">{item.prince}</p>
                </div>
                <div className="cartActions">
                  <button className="cartBtnQuantity"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="cartQuantity">{item.quantity}</span>
                  <button className="cartBtnQuantity"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
				  
                  <button className="cartRemove" onClick={() => removeFromCart(item.id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="cartTotal">Total: ${getTotal()}</p>
		  <button className="cartCheckout" onClick={checkout}>Finalizar compra</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
