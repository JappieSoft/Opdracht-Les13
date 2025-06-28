import { useEffect, useState } from "react"
import axios from "axios"

function useFetch(url){
    const [data,setData] = useState("")
    const [error,setError] = useState("")
    const [loading,toggleLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        (
            async function(){
                toggleLoading(true);
                try{
                    const response = await axios.get(url,{
                        signal: controller.signal,})
                    /*console.log(response)*/
                    setData(response.data)
                }catch(err){
                    setError(err)
                }finally{
                    toggleLoading(false)
                }
            }
        )()
        return function cleanup() {
            controller.abort();
        }
    }, [url])

    return { data, error, loading }
}

export default useFetch;