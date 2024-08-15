import React, { useContext,useEffect,useState } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductList from "../utils/ProductLists/ProductList";
import { useGetProducts } from "../../../api/helpers/useGetProducts";
import axios from "axios";
const Product = () => {

const  {data:pro,isError,isLoading:isProductLoading} =useGetProducts();
console.log("pro in products.js",pro)
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
