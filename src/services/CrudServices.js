import axios from "axios";
import { useState } from "react";

function CrudService()
{
    const [result,setResult]=useState();

    const postOpetration=(data,url)=>{
            axios.post(url,data)
    }

    const getOpertaion=(url)=>
    {
        axios.get(url)
        .then((response)=>{setResult(response.data)})
        .catch((error)=>{console.log(error)})
    }
    const deleteOperation=(url)=>
    {
        axios.delete(url);
    }


    return{

        post:(data,url)=>postOpetration(data,url),
        get:(url)=>getOpertaion(url),
        delete:(url)=>deleteOperation(url),
        getResult:()=>result
    }

}

export default CrudService;
