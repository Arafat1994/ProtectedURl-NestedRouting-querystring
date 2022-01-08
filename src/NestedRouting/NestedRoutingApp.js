
import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./About";
import ContactPage from "./Contact";
import HomePage from "./Home";
import Navbar from "./Navbar";
//import Routesmade from "./Routes"; that is the file of routes 
// we gonna make it here manually  with useroutematch to make dynamic nested routing 

export default function MainNestedRoutingApp() {

    return (
        <div>
            <h1> Nested routing working here </h1>
            <Navbar />
            <Routes> 
                <Route path="/" element={<HomePage/>}/>
                <Route path="/Home" element={<HomePage/>}/>
                <Route path="/About/*" element={<AboutPage/>}/>
                <Route path="/Contact" element={<ContactPage/>}/>
            </Routes>

            {
                //routesmade >> give you all the routes here  instead of writing Routes here 
                //<Routesmade />
            }
            
            

        </div>
    )

}