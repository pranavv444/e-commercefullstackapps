import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductList from "../utils/ProductLists/ProductList";

const Product = () => {
  const state = useContext(GlobalState);

  // console.log("|state", state);
  const pro = state.ProductApi.product ? state.ProductApi.product : [];
  console.log("pro",pro)
  return (
    <div className="products">
      {
      pro.map(product=>{
        return<ProductList key={product.id} product={product}/>
      })
    }
    
    </div>
  );
};

export default Product;
