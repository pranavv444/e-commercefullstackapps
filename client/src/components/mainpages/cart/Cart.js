import React, { useContext, useEffect } from "react";
import { GlobalState } from "../../../GlobalState";
import { Link } from "react-router-dom";
import "./cart.css"; // Import the CSS file

const Cart = () => {
  const state = useContext(GlobalState);
  const { cart, setCart } = state.userAPI;
  useEffect(() => {
    // console.log("cart ka type:",typeof(cart))
    // console.log("Cart in cart.js", cart);
  }, [cart]);

  const increment = (id) => {
    const newCart = cart.map((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
      return item;
    });
    setCart([...newCart]);
  };

  const decrement = (id) => {
    const newCart = cart.map((item) => {
      if (item._id === id && item.quantity > 1) {
        item.quantity -= 1;
      }
      return item;
    });
    setCart([...newCart]);
  };

  const removeItem = (id) => {
    if (window.confirm("Do you want to remove this product?")) {
      const newCart = cart.filter((item) => item._id !== id);
      setCart([...newCart]);
    }
  };

  if (cart === undefined || cart.length === 0) {
    //cart.length tha
    return (
      <div
        style={{
          textAlign: "center",
          fontSize: "5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <img
          src="/empty-cart.png"
          alt="Empty Cart"
          style={{ width: "400px", height: "400px" }}
        />
      </div>
    );
  }

  return (
    <div className="cart-page">
      {cart.map((product) => (
        <div className="detail cart" key={product._id}>
          <img src={product.images.url} alt="" />
          <div className="box-detail">
            <div className="row">
              {product && <h2>{product.title}</h2>}
              {product && <span>${product.price}</span>}
            </div>
            <p>{product.description}</p>
            <p>{product.content}</p>
            <p>Sold: {product.sold}</p>
            <div className="quantity">
              <button onClick={() => decrement(product._id)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => increment(product._id)}>+</button>
            </div>
            <div className="subtotal">
              Subtotal: ${product ? (product.price * product.quantity).toFixed(2) : 0}
            </div>
            <button onClick={() => removeItem(product._id)} className="remove">
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <h3>
          Total: $
          {cart
            .reduce((prev, item) => prev + (item ? item.price * item.quantity : 0), 0)
            .toFixed(2)}
        </h3>
        <Link to="/checkout" className="checkout">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;