import React, { useEffect, useState } from 'react'
import axios from 'axios'
const  ProductApi = () => {

    const [products,setProducts]=useState([])
    const getproducts=async()=>{
        const res=await axios.get('/api/products')
        console.log(res.data.products)
    }
    useEffect(()=>{
        getproducts()
    },[])
  return (
   { product:  [products,setProducts]}
  )
}
export default ProductApi
