import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
// ,
//   "proxy": "https://e-commercefullstackapps.onrender.com/"
const base='https://e-commercefullstackapps.onrender.com'
const url='/api/products';
export const useGetProducts = () => {
    const getAllProducts=async()=>{
        try {
            const res=await axios.get(base+url)//chalra hai  
              console.log("product api calls:", res.data.result)
              console.log("base+url",base+url)

        return res.data.result;
        } catch (error) {
            throw error;
        }
    
    
    
    }
    return useQuery({
        queryKey: ['getProduct','getAllProduct'],
        queryFn: () => getAllProducts(),
        
    })
}