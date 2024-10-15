import React from "react";
import Elem from "./Elem.js";

export default function Jatekter(props){
    function katt2(data){
        console.log("jatekter: ", data);
        props.katt(data);
    }

    return(
        <div className="JatekTer">
            {
                props.LISTA.map(((elem, index)=> {
                    return <Elem elem = {elem} key = {index} fv={katt2} />
                }))
            }
        </div>
    );
}