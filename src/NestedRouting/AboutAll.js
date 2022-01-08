
import React from "react";
import { useParams } from "react-router-dom";

export default function Aboutall(){

    const {name} = useParams()
    return(
        <div> 
            hiiiiiiiiiiiiiiii
            {name
            }
        </div>
    )

}