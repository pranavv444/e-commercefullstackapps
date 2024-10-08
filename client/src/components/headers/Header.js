import React, { useContext } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import axios from "axios";

const Header = () => {
  const state = useContext(GlobalState);
  const isLogged = state.userAPI.isLogged;
  const isAdmin = state.userAPI.isAdmin;
  const { setAdmin, setLogged } = state.userAPI;
  const cart=state.userAPI.cart;

  const logoutUser = async () => {
    await axios.get("/user/logout");
    // console.log("user logged out");
    localStorage.clear();
    setAdmin(false);
    setLogged(false);
  };

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Create Product</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/" onClick={logoutUser}>
            Logout
          </Link>
        </li>
      </>
    );
  };

  // console.log("state in header.js", state);
  return (
    <header>
      <div className="menu">
        <CiMenuBurger size={30} />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">{isAdmin ? "Admin" : "30 Shop"}</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">{isAdmin ? "Products" : "Shop"}</Link>
        </li>
        {isAdmin && adminRouter()}
        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            <Link to="/login">Login or Register</Link>
          </li>
        )}
        <li>
          <IoMdClose size={30} className="menu" />
        </li>
      </ul>
      {!isAdmin && (
        <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart">
            <FaCartPlus size={25} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
