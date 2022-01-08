
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeQuerystring(){
    const navigate = useNavigate();
    //console.log(useNavigate())
    const navigatehandler=()=>{
        navigate('/About/page&Name=Arafat&age=30')
    }
    return(
        <div> 
            <h1> 
                that is HOme PAge
            </h1>


            <button onClick={navigatehandler}>  navigate  </button> 
            </div>
    )

}