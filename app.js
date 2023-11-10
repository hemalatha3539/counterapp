import React from "react";
import Reactdom from "react-dom/client";
import { useState } from "react";

 const Conter=()=>{
    const [value,setvalue]=useState(0)
     return <div className="container">
        <h1>Counter App</h1>
        <h1>{value}</h1>
        <div className="flex">
            <button  onClick={
                ()=>{
                   const high=value+1
                   setvalue(high)
                }
            } className="btn" 
            >Increment</button>
            <button onClick={
                ()=>{
                    const low=value-1
                    setvalue(low)
                }
            } className="btn">Decrement</button>

        </div>

     </div>

 }
 const root=Reactdom.createRoot(document.getElementById("box"))
 root.render(<Conter/>)