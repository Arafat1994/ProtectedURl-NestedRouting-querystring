
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation  , Navigate} from "react-router-dom";
import queryString  from 'query-string'

export default function AboutQuerystring( props){
 const {pathname}=useLocation();//window.location.pathname

 //using query string 
 const{Name , age } = queryString.parse(pathname) ;

 
 /*
 const serchvalues  = new URLSearchParams(pathname) ; 
 const name = serchvalues.get('name') ;
 const age = serchvalues.get('age');
 */
/*
 console.log(props.authorization)
 console.log(useLocation())
 console.log(window.location.search)
console.log(Name) ;
console.log(age)
*/

if(!props.authorization){
    return <Navigate to='/Home' />
}



return (
    <div>
        <h1> you are loggged in  </h1>
        <h1> 
            {Name}
        </h1>
        <h1> 
            {age}
        </h1>
    </div> 
)

    

}