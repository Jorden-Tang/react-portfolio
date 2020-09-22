import React from 'react'
import {useState, useRef, useEffect} from 'react'
import Carousel from '../components/carousel'
import ReactPlayer from 'react-player'
import "../styles/project_window.css"
import {gsap}  from 'gsap/all'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectWindow = ({prop, onChange, setOnChange}) =>{
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
            {prop.images.length == 0 ?  
                <ReactPlayer width= "100%" height="600px" controls url = {prop.video} >
                </ReactPlayer>
                : 
                <Carousel widthRatio = {prop.widthRatio} imagesArr = {prop.images} autoPlay = {prop.autoPlay}></Carousel>}
                <h2>{prop.title}</h2>
                <hr style = {{height: "1px", backgroundColor: "gray", width: "90%", margin: "auto"}}></hr>
                <div id = "skill_tag_section">
                    {
                        prop.skills.map((e, i) =>{
                            return(
                            <div className = "skill_tag">{e}</div>
                            )
                        })
                    }
                </div>
                <div className = "project_description" >
                <p>{prop.content}</p>
                    <div>
                        <a onClick={()=> window.open(prop['link']['github'], "_blank")}><i class="fab fa-github-alt"></i> GitHub Repo</a>
                        {prop.images.length === 0 ? 
                            <></> :
                            <a onClick={()=> window.open(prop['link']['website'], "_blank")}><i class="fab fa-github-alt"></i> WebSite</a>
                        }
                    </div>
                </div>     
        </div>
    )
}
export default ProjectWindow