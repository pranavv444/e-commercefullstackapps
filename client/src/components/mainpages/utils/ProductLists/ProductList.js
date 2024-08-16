import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ product }) => {
  // console.log("this is productlist.js", product);
  // axios by id react-router-dom 
  //state id,title,product, 
//   const handleClick=(e)=>{
// console.log(product._id)
//   }
  return <div className="product_card">
    <img src={product.images.ul} alt=" "/>
    <div className="product_box">
      <h2 title={product.title}>{product.title}</h2>
      <span>${product.price}</span>
      <p>${product.description}</p>
    </div>

    <div className="row_btn">
      <Link id="btn_buy" to={`#!`}>BUY</Link>
      <Link id="btn_view" to={`detail/${product._id}`}>View</Link>
    </div>
  </div>;
};

export default ProductList;
