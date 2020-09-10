import React from 'react'
import {useState, useRef, useEffect} from 'react'
import Carousel from '../components/carousel'
import ReactPlayer from 'react-player'
import "../styles/project_window.css"
const ProjectWindow = ({images, content, onChange, setOnChange, video}) =>{
    const node = useRef();
    const handleClick = e =>{
        if(node.current.contains(e.target)){
            return;
        }
        setOnChange(false);
    }
    useEffect(()=>{
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        }
    },[])

    return(
        <div ref = {node} className = "project_detail_window" style = {{display: onChange ? "inline": "none"}} >
            {images.length == 0 ?  
                <ReactPlayer width= "80%" height="auto" style = {{margin: "auto", marginTop: "40px"}}controls url = {video} >
                </ReactPlayer>
                : 
                <Carousel imagesArr = {images}></Carousel> }     
            <div>{content}</div>
        </div>
    )
}
export default ProjectWindow