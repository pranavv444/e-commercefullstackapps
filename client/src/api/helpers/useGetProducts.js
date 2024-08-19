import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const url='/api/products';
export const useGetProducts = () => {
    const getAllProducts=async()=>{
        try {
            const res=await axios.get(url)//chalra hai  
              console.log("product api calls:", res.data.result)
              console.log("base+url",url)

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