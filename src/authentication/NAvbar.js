 import React from "react";
 import { Link } from "react-router-dom";
 

 export default function NAvbar(){


    return(
        <div> 
            <Link to='/Home'  className="m-5"> Home</Link>  
            <Link to={{pathname:'/About/page&Name=Arafat&age=30' }} state={{from:"home"}} className="m-5"> About (authorized) </Link> 
        </div> 

    )

 }