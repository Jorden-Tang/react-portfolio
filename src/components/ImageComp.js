import React from 'react'
import '../styles/carousel.css'

const ImageComp = ({src, width}) =>{

    let imgStyle = {
        width: width == undefined ? '100%' : `${width}%`,
        height: "auto"
    };


    return <img className ="fade-in" src={src} alt = "slide_img" style = {imgStyle}></img>
}

export default ImageComp;