import React from 'react'
import {useState, useRef, useEffect} from 'react'
import Carousel from '../components/carousel'
import ReactPlayer from 'react-player'
import "../styles/project_window.css"
const ProjectWindow = ({images, content, onChange, setOnChange, video, widthRatio, autoPlay, link}) =>{
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
        <div ref = {node} className = "project_detail_window" style = {{display: onChange ? "block": "none"}} >
            {images.length == 0 ?  
                <ReactPlayer width= "100%" height="75%" style = {{margin: "auto"}}controls url = {video} >
                </ReactPlayer>
                : 
                <Carousel widthRatio = {widthRatio} imagesArr = {images} autoPlay = {autoPlay}></Carousel>}
                <div className = "project_description" >
                <p>{content}</p>
                    <div>
                        <a onClick={()=> window.open(link, "_blank")}><i class="fab fa-github-alt"></i> GitHub Repo</a>
                    </div>
                </div>     
        </div>
    )
}
export default ProjectWindow