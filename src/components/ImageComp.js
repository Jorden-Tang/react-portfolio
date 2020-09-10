import React from 'react'

const ImageComp = ({src}) =>{
    let imgStyle = {
        width: "100%",
        height: "auto"
    };

    return <img src={src} alt = "slide_img" style = {imgStyle}></img>
}

export default ImageComp;