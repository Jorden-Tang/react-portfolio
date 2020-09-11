import React from 'react'
import {useState, useEffect, useRef} from 'react'
import "../styles/carousel.css"
import ImageComp from '../components/ImageComp'

const Carousel = ({imagesArr, widthRatio}) =>{
    const sliderArray = [];
    const [x, setX] = useState(0);

    for(let i = 0; i < imagesArr.length; i++){
        sliderArray.push(<ImageComp width = {widthRatio} src = {imagesArr[i]}></ImageComp>)
    };

    const goLeft = () =>{
        if(x == 0){
            setX(-(sliderArray.length * 100 - 100));
        }
        else{
            setX(x+100);
        }   
    }

    const goRight = () =>{
        if(x == -(sliderArray.length * 100 - 100)){
            setX(0);
        }
        else{
            setX(x-100);
        }
    }

    return(
        <div className = "slider">
            { sliderArray.map((item,index)=>{
                return(
                    <>
                    <div className = "slide" key={index} style = {{transform: `translateX(${x}%)`}}>
                        {item} 
                    </div>
                    </>
                )
            })}
            <button id = "left" onClick = {goLeft}><i class="fas fa-chevron-left" ></i></button>
            <button id = "right" onClick = {goRight}><i class="fas fa-chevron-right"></i></button>
        </div>   
    )
}

export default Carousel