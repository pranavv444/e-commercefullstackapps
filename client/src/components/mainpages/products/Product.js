import React, { useContext } from "react";
import ProductList from "../utils/ProductLists/ProductList";
import { useGetProducts } from "../../../api/helpers/useGetProducts";
import { GlobalState } from '../../../GlobalState';

const Product = () => {
  const state = useContext(GlobalState);
  const { data: pro, isLoading: isProductLoading } = useGetProducts();
  const isAdmin = state.userAPI.isAdmin;

  return (
    <div className="products">
      {isProductLoading ? (
        <> Loading....</>
      ) : (
        pro.map(product => {
          return <ProductList key={product._id} product={product} isAdmin={isAdmin} />;
        })
      )}
    </div>
  );
};

export default Product;
