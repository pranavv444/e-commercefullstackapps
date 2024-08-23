// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const useUserAPI = (token) => {
//   const [isLogged, setLogged] = useState(false);
//   const [isAdmin, setAdmin] = useState(false);
//   const [cart,setCart]=useState([])
//   useEffect(() => {
//     if (token) {
//       const getUser = async () => {
//         try {
//           const res = await axios.get("/user/infor", {
//             headers: { Authorization: token },
//           });
//         //   console.log("res in useuserapi:", res);
//           setLogged(true);
//           res.data.role === 1 ? setAdmin(true) : setAdmin(false);
//           console.log(res)
//         } catch (err) {
//           alert(err.response.data.msg);
//         }
//       };
//       getUser();
//     }
//   }, [token]);

//   const addCart=async(product)=>{
//     if(!isLogged){
//       return alert("Please Log In")
//     }
//   }
//   const check=cart.every(item=>{
//     return item.id!==product._id
//   })

//   if(check){
//     setCart([...cart,{...product,quantity:1}])
//   }
//   else{
//     alert("This product has already been added")
//   }

//   return {
//     isLogged,
//     setLogged,
//     isAdmin,
//     setAdmin,
//     addCart
//   };
// };

// export default useUserAPI;
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
          console.log(res);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };
      getUser();
    }
  }, [token]);

  const addCart = async (product) => {
    if (!isLogged) {
      return alert("Please Log In");
    }

    const check = cart.every((item) => {
      // console.log("inside check function");
      // console.log("item.id,product._id,",item._id,product._id);
      // console.log("item.id !== product._id",item.id !== product._id);
      return item._id !== product._id;
    });

    if (check) {
      setCart([...cart, { ...product, quantity: 1 }]);
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