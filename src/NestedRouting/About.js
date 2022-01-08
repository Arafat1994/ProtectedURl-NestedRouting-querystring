
import React from "react";
import { Link, Route, Routes} from "react-router-dom";
//import {Outlet} from 'react-router-dom'
import Aboutall from "./AboutAll";

export default function AboutPage(){
   // let {url , pathna , params:{name} } = useMatch('About/:name') ; 
    
    return(
        <div> 
            <h1> About page </h1>
            <ul>
                
                <li> <Link  to='Arafat' > Arafat </Link> </li>
                <li> <Link  to='Nada' > Nada </Link> </li>

                <Routes> 
                    
                        
                    <Route path='/:name' element={<Aboutall/>}/>
                </Routes>
                {
                    //outlet here will come the children routed of Aboute route from route file 
                    //<Outlet/>
                }
                
            </ul>
            
        </div>
    )

}