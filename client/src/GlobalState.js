import { createContext, useEffect, useState } from "react";
import ProductApi from "./api/ProductApi";
import axios from "axios";
export const GlobalState=createContext()
export const DataProvider=({children})=>{

    const [token,setToken]=useState(false)
    const state={
        token:[token,setToken],
        ProductApi:ProductApi() //use pehle ho jata hai
        
    }
    const refreshToken=async ()=>{
        const res=await axios.get('/user/refresh_token')
        setToken(res.data.accesstoken)
    }

    useEffect(()=>{
        const firstLogin=localStorage.getItem('firstlogin')
        if(firstLogin) refreshToken()
    },[])


  
    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}