import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../NestedRouting/Home";
import AboutQuerystring from "./Abouts";
import HomeQuerystring from "./HOme";
import NAvbar from "./NAvbar";

export default function QueryStringApp() {
    let isAuth=false ; 
    return (
        <div>

            <h1>
                this isquery string working here
            </h1>
            <NAvbar> </NAvbar>
            <Routes > 
                <Route path="/" element={<HomeQuerystring/>} />
                <Route path="/Home" element={<HomeQuerystring/>} />
                <Route path="/About/page&Name=:name&age=:num"  element={<AboutQuerystring  authorization={isAuth} />} />
                

            </Routes>
        </div>
    )
}