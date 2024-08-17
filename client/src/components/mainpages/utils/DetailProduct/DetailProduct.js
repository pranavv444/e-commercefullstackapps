import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState';

const DetailProduct = () => {
    const params=useParams();
    const state=useContext(GlobalState);
    const [products]=state.productsApi.products;
    const [detailPProduct,setDetailProduct]=useState([]);

    useEffect(()=>{
        if(params){
            products.forEach(product=>{
                if(product._id===params.id)setDetailProduct(product)
            })
        }
    },[params,products])

    console.log(detailPProduct);
  return (
    <div>DetailProduct</div>
  )
}

export default DetailProduct