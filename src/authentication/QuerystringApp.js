import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../NestedRouting/Home";
import AboutQuerystring from "./Abouts";
import HomeQuerystring from "./HOme";
import NAvbar from "./NAvbar";
import ProtectedRoute from "./ProtectedRoute.js";
import UseAuthenticationHook from './Authentcationcustomhook.js';

export default function Authentication() {

    const [isAuth, login, logout] = UseAuthenticationHook(false);

    return (
        <div>
            <h1>this isquery string working here</h1>
            <NAvbar> </NAvbar>
            <p> login or logout to change the isAuth  </p>
            {
                
            isAuth ? <><button onClick={logout} > logout  </button>  <div> logout means isAuth is <strong> True </strong> no access to About  </div> </>:
                <><button onClick={login}> Login  </button> <div> login means isAuth is <strong> False </strong> have Access to About    </div>  </>
            }
            <Routes >
                <Route path="/" element={<HomeQuerystring />} />
                <Route path="/Home" element={<HomeQuerystring />} />
                <Route path="/About/page&Name=:name&age=:num" element={<ProtectedRoute isauth={isAuth} />}  >
                    <Route path="/About/page&Name=:name&age=:num" element={<AboutQuerystring />} />
            </Route>



                {
                    /*<Route path="/About" element={<ProtectedRoute isauth={isAuth} />} >
                    <Route path="/About/page&Name=:name&age=:num" element={<AboutQuerystring/> } />
                </Route>*/
                    //<React.Fragment> <ProtectedRoute path="/About/page&Name=:name&age=:num" element={<AboutQuerystring />} isAuth={isAuth} /></React.Fragment>

                    //<Route path="/About/page&Name=:name&age=:num" element={<ProtectedRoute  isAuth={isAuth}/> } />

                    //related to usual autentication with (Redirect and isAuth)
                    //</Routes></div><Route path="/About/page&Name=:name&age=:num"  element={<AboutQuerystring  authorization={isAuth} />} /> 
                }
            </Routes>
        </div>
    )
}