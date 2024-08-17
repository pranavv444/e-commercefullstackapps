import React, { useContext, useEffect, useState } from 'react'
import { useParams,useLocation } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState';

const DetailProduct = () => {
  const location =useLocation();
const {title,_id,images}=location.state.product;


  // console.log("loc",location)
  // console.log("title",title)
  return (
    <div>DetailProduct</div>
  )
}

export default DetailProduct

// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { GlobalState } from '../../../../GlobalState';

// const DetailProduct = () => {
//     const params=useParams();
//     const state=useContext(GlobalState);
//     const [products]=state.productsApi.products;
//     const [detailProduct,setDetailProduct]=useState([]);

//     useEffect(()=>{
//         if(params){
//             products.forEach(product=>{
//                 if(product._id===params.id)setDetailProduct(product)
//             })
//         }
//     },[params,products])

//     console.log(detailProduct);
//   return (
//     <div>DetailProduct</div>
//   )
// }

// export default DetailProduct