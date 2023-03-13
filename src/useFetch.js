import {useState, useEffect } from "react";

const useFetch =(url)=>{
    const [data,setData] = useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);
useEffect(()=>{
    const abortCount = new AbortController();
fetch(url,{signal:abortCount.signal})
        .then(res=> {
            // if(!res.ok){
            //     throw Error('No fetch found for that');
            // }
            return res.json();
        })
        .then(data=>{
            setData(data);
            setIsPending(false);
            console.log(data);
        })
        .catch(error=>{
            if(error.name ==='AbortError'){
                console.log('fetch aborted');
            }
            else{
            setIsPending(false);
            setError(null);
           console.log(error);
            setError(error.message);
            }
        })
       return () =>abortCount.abort();
    },[]);//dependancies
    
    return{data,isPending,error}
}
export default useFetch;