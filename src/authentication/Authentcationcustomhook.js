

import React, { useState } from "react";
import { Navigate } from "react-router-dom";
export default  function UseAuthenticationHook (intialvalue)  {
    const [isAuth, setIsAuth] = useState(intialvalue);

    function login (){
       setIsAuth(true) ; 
        //Navigate('./About/page&Name=:name&age=:num')
    }

    function logout (){
         setIsAuth(false) ; // Navigate('/Home'); 
        
    }

return [isAuth , login , logout] ;
}
