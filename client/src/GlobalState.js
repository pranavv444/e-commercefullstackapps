import { createContext, useState } from "react";
import ProductApi from "./api/ProductApi";
export const GlobalState=createContext()
export const DataProvider=({children})=>{

    const [token,setToken]=useState(false)
    const state={
        token:[token,setToken],
        ProductApi:ProductApi() //use pehle ho jata hai
        
    }


  
    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}