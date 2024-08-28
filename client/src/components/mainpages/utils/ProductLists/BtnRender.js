import React from 'react';
import { GlobalState } from "../../../../GlobalState";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const BtnRender = ({ product }) => {
  const state = useContext(GlobalState);
  const isAdmin = state.userAPI.isAdmin;
  const addCart = state.userAPI.addCart;
  const navigate = useNavigate();

  const handleRouter = () => {
    const id = product._id;
    navigate(`/detail/${id}`, { state: { product } });
  };

  return (
    <div className="row_btn">
      {isAdmin ? (
        <>
          <Link id="btn_buy" to={`#!`}>
            Delete
          </Link>
          <button className="btn_view" onClick={handleRouter}>
            Edit
          </button>
        </>
      ) : (
        <>
          <Link id="btn_buy" to={`#!`} onClick={() => addCart(product)}>
            Buy
          </Link>
          <button className="btn_view" onClick={handleRouter}>
            View
          </button>
        </>
      )}
    </div>
  );
};

export default BtnRender;