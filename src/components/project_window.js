import React from 'react'
import {useState, useRef, useEffect} from 'react'
import "../styles/project_window.css"
const ProjectWindow = ({images, content, onChange, setOnChange}) =>{
    const node = useRef();

    const handleClick = e =>{
        if(node.current.contains(e.target)){
            return;
        }
        setOnChange(false);
    }
    useEffect(()=>{
        document.addEventListener('mousedown', handleClick);
        
    },[])

    return(
        <div ref = {node} className = "project_detail_window" style = {{display: onChange ? "inline": "none"}} >
            <img className = "window_background"></img>      
        </div>
    )
}
export default ProjectWindow