import React from "react";
import { Link ,useNavigate} from "react-router-dom";

const ProductList = ({ product }) => {
  // console.log("this is productlist.js", product);
  // axios by id react-router-dom 
  //state id,title,product, 
//   const handleClick=(e)=>{
// console.log(product._id)
//   }
const navigate=useNavigate();
const handleRouter=()=>{
  const id =product._id;
  // navigate(`/project/${slug.slug}/upload`, { state: { product, slug } });
  navigate(`detail/${id}`, { state: { product } });
 


}
  return <div className="product_card">
    <img src={product.images.url} alt=" "/>
    <div className="product_box">
      <h2 title={product.title}>{product.title}</h2>
      <span>${product.price}</span>
      <p>${product.description}</p>
    </div>

    <div className="row_btn">
      <Link id="btn_buy" to={`#!`}>BUY</Link>
      {/* <Link id="btn_view" to={`detail/${product._id}`} onClick={handleRouter}>View</Link>  */}
<div className="" onClick={handleRouter}> 
view
</div>
      {/* product.id ko hta denge , onclick banayebge */}
    </div>
  </div>;
};

export default ProductList;
