
// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { GlobalState } from "../../../../GlobalState";
// import BtnRender from "./BtnRender";
// // import { useGetProducts } from "../../../../api/helpers/useGetProducts"; // Updated path

// const ProductList = ({ product,isAdmin }) => {
  
//   const navigate = useNavigate();
//   const handleRouter = () => {
//     const id = product._id;
//     navigate(`detail/${id}`, { state: { product } });
//   };

//   return (
//     <div className="product_card">
//       <div>
//         {isAdmin && (
//           <form action="">
//             <input type="checkbox" checked={product.checked} readOnly />
//           </form>
//         )}
//       </div>
//       <img src={product.images.url} alt=" " />
//       <div className="product_box">
//         <h2 title={product.title}>{product.title}</h2>
//         <span>${product.price}</span>
//         <p>${product.description}</p>
//       </div>
//       <BtnRender product={product}/>
//     </div>
//   );
// };

// export default ProductList;
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalState } from "../../../../GlobalState";
import BtnRender from "./BtnRender";

const ProductList = ({ product, isAdmin }) => {
  const navigate = useNavigate();

  const handleRouter = () => {
    const id = product._id;
    navigate(`detail/${id}`, { state: { product } });
  };

  return (
    <div className="product_card">
      <div>
        {isAdmin && (
          <form>
            <input type="checkbox" checked={product.checked} readOnly />
          </form>
        )}
      </div>
      <img src={product.images.url} alt={product.title} onClick={handleRouter} />
      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>
      <BtnRender product={product} />
    </div>
  );
};

export default ProductList;