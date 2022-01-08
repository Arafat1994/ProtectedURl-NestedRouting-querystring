
import React from "react";
import { Route, useRoutes } from "react-router-dom";
import AboutPage from "./About";
import Aboutarafatpage from "./Arafat";
import ContactPage from "./Contact";
import HomePage from "./Home";
import AboutnadaPage from "./nada";

export default function Routesmade(){

    const Routesmadeele = useRoutes([
        { path:'/Home' , element:<HomePage/>} ,
        { path:'/' , element:<HomePage/>} ,  
        { path:'/About' , element:<AboutPage/> , children:[
            {path:'Arafat' , element:<Aboutarafatpage/>}, 
            {path:'Nada' , element:<AboutnadaPage/>}
        ]} , 
        { path:'/Contact' , element:<ContactPage/>}
    ])

    return Routesmadeele ;

}