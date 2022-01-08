import React, { useEffect, useState } from "react";
import { Navigate, Outlet} from "react-router-dom";
import { useLayoutEffect } from "react/cjs/react.development";
import AboutQuerystring from "./Abouts";
/*
export default function  ProtectedRoute({ isAuth, element:Element, ...rest }) {
    return (
        <Route  {...rest}
            render={(props) => {
                if (isAuth) { return <Element {...props} /> }
                if (!isAuth) {
                    return <Navigate to={{ path: '/Home', state: { from: props.location } }} />
                }
            }}
        />


    )

}*/


export default function  ProtectedRoute(props) {
    //console.log(props.isauth)
    const [ showelemet , setShowElemet ] =useState()

    useLayoutEffect(()=>{
        if(props.isauth){
            setShowElemet(<Outlet/>)
        }
        else{
            setShowElemet(<Navigate to={{ pathname: '/Home'}} state={ {from: props.location } } />) 
        }
    },[props.isauth])

    return(
         <>
         {showelemet}
         </>
        )
    
}
    
        /*
        <Route  {...rest}
            render={(props) => {
                if (isAuth) { return <Element {...props} /> }
                if (!isAuth) {
                    return <Navigate to={{ path: '/Home', state: { from: props.location } }} />
                }
            }}
        />
        


    

}*/