import React, { useContext,useEffect,useState } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductList from "../utils/ProductLists/ProductList";
import { useGetProducts } from "../../../api/helpers/useGetProducts";
import axios from "axios";
const Product = () => {
console.log("call start karre hai")
const  {data:pro,isError,isLoading:isProductLoading} =useGetProducts();
console.log("pro in prodcut js:",pro);
console.log("isProductLoading in product js",isProductLoading)
  return (
    <div className="products">
    {isProductLoading?(<> Loading....</>):(
      pro.map(product=>{
        return<ProductList key={product._id} product={product}/>
      })
    )} 
     
    </div>
  );
};

export default Product;
