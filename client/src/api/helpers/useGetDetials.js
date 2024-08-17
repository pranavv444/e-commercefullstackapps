import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const url='/api/products/';
export const useGetDetails = (id) => {
    const getProductById=async(id)=>{
        try {
            const res=await axios.get(url+id)//chalra hai  
              console.log("product api calls:", res)
              

        return res.data.result;
        } catch (error) {
            throw error;
        }
    
    
    
    }
    return useQuery({
        queryKey: ['getProduct','getAllProduct'],
        queryFn: () => getProductById(id),
        
    })
}