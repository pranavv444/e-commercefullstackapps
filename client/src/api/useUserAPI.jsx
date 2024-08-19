import axios from "axios";
import React, { useEffect, useState } from "react";

const useUserAPI = (token) => {
  const [isLogged, setLogged] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("/user/infor", {
            headers: { Authorization: token },
          });
        //   console.log("res in useuserapi:", res);
          setLogged(true);
          res.data.role === 1 ? setAdmin(true) : setAdmin(false);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };
      getUser();
    }
  }, [token]);

  return {
    isLogged,
    setLogged,
    isAdmin,
    setAdmin,
  };
};

export default useUserAPI;
