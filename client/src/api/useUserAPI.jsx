import axios from "axios";
import React, { useEffect, useState } from "react";

const useUserAPI = (token) => {
  const [isLogged, setLogged] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("/user/infor", {
            headers: { Authorization: token },
          });
          setLogged(true);
          res.data.role === 1 ? setAdmin(true) : setAdmin(false);
          // console.log(res);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };
      getUser();
    }
  }, [token]);

  useEffect(() => {
    // console.log("cart ka type in useUserAPi.js:",typeof(cart))
    // console.log("Cart in useUserAPi.js:", cart);
  
  }, [cart])
  
  const addCart = async (product) => {
    if (!isLogged) {
      return alert("Please Log In");
    }

    const check = cart.every((item) => {
      // console.log("inside check function");
      // console.log("item.id,product._id,",item._id,product._id);
      // console.log("item.id !== product._id",item.id !== product._id);
      // console.log("item.title that was added:",item.title)
      // console.log("product.title that was added:",product.title)
      return item._id !== product._id;
    });

    
    if (check) {
      const newCart = [...cart, { ...product, quantity: 1 }];
      // console.log("newcart ka type in useUserAPi.js:",typeof(newcart))
      // console.log("newcart",newCart);
      setCart(newCart);
    } else {
      alert("This product has already been added");
    }
  
  };

  return {
    isLogged,
    setLogged,
    isAdmin,
    setAdmin,
    cart,
    setCart,
    addCart,
  };
};

export default useUserAPI;