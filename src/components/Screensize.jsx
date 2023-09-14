import React,{useState,useEffect} from "react";

function Screensize(){
    const [windowDimension,detectChange] = useState({
        width :window.innerWidth,
        height : window.innerHeight
    })
    const detectSize = () =>{
        detectChange({
            width :window.innerWidth,
            height : window.innerHeight,
        })
    }
    useEffect(()=>{
        window.addEventListener('resize',detectSize)
        return () =>{
            window.removeEventListener('resize',detectSize)
        }
    },[windowDimension])
    const Screensizeobj={
        width : windowDimension.width,
        height : windowDimension.height,
    }
    return Screensizeobj;
}

export default Screensize;