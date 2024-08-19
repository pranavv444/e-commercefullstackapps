import { createContext, useEffect, useState } from "react";
import ProductApi from "./api/ProductApi";
import axios from "axios";
import useUserAPI from "./api/useUserAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  // const { isLogged, setLogged, isAdmin, setAdmin } = useUserAPI(token);

  const [token, setToken] = useState(false);
  const state = {
    token: [token, setToken],
    ProductApi: ProductApi(), //use pehle ho jata hai
    userAPI: useUserAPI(token),
  };
  const refreshToken = async () => {
    try {
      const res = await axios.post("/user/refresh_token"); //cookie chaiye backend mai
      //   console.log("refresh token in global state", res);
      setToken(res.data.accesstoken);
    } catch (error) {
      //   console.log(
      //     "some error occurred in refresh token in global state",
      //     error
      //   );
    }
  };

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstlogin");
    // console.log("fisrtlogin in gstate", firstLogin);
    if (firstLogin) refreshToken();
  }, []);

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
