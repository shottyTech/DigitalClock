import React from 'react'
import { useState, useEffect } from 'react'

export const Resixe = () => {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerHeight);
    useEffect(()=>{
        window.addEventListener('resize', Resize)
        return ()=>{
            window.removeEventListener('resize', Resize)
        } 
    },[])
 

    function Resize(){
       setHeight(window.innerHeight)
       setWidth(window.innerWidth)
    }

    return( <h1> {height} : {width} </h1>
       
    )
}    