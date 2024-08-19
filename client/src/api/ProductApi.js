import React, { useEffect, useState } from 'react'
import axios from 'axios'
const  ProductApi = () => {

    const [products,setProducts]=useState([])
    const getproducts=async()=>{
        const res=await axios.get('/api/products')//chalra hai
        setProducts(res.data.result)//intially set karra hu
        // console.log("product api calls:", res.data.result)
    }
    useEffect(()=>{
        getproducts()
    },[])
  return (
   { product:  [products,setProducts]}
  )
}
export default ProductApi
