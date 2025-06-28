import { useEffect, useState } from "react"
import axios from "axios"


function useFetch(url){

    const [data,setData] = useState("")
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const response = await axios.get(url,{
                        limit: 20,})
                    /*console.log(response)*/
                    setData(response.data)
                }catch(err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return { data, error, loading }
}

export default useFetch;