import React, { useContext,useEffect,useState } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductList from "../utils/ProductLists/ProductList";
import axios from "axios";
const Product = () => {
  const [pro,setPro]=useState([])
  const getproducts=async()=>{
      const res=await axios.get('/api/products')//chalra hai
      setPro(res.data.result)//intially set karra hu
      console.log("product api calls:", res.data.result)
  }
  useEffect(()=>{
      getproducts()
  },[])
  return (
    <div className="products">
      {
      pro.map(product=>{
        return<ProductList key={product._id} product={product}/>
      })
    }
    
    </div>
  );
};

export default Product;
