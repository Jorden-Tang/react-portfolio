import React from 'react'
import {useState, useEffect, useRef} from 'react'
import "../styles/carousel.css"
import ImageComp from '../components/ImageComp'

const Carousel = ({imagesArr, widthRatio, autoPlay}) =>{
  
    const [x, setX] = useState(-100);
    const [activeIndex, setactiveIndex] = useState(0);

    const autoPlayRef = useRef();
    const transitionRef = useRef();
    const totalLength = imagesArr.length;
    const  [sliderArray, setSliderArray] = useState([<ImageComp width = {widthRatio} src = {imagesArr[imagesArr.length - 1]}></ImageComp>,
        <ImageComp width = {widthRatio} src = {imagesArr[0]}></ImageComp>, 
        <ImageComp width = {widthRatio} src = {imagesArr[1]}></ImageComp>]);

    const _sliderArray = [];
    for(let i = 0; i < imagesArr.length; i++){
        _sliderArray.push(<ImageComp width = {widthRatio} src = {imagesArr[i]}></ImageComp>)
    }

  
    useEffect(() =>{
        autoPlayRef.current = goRight
        // transitionRef.current = modifyArray;
    })
    
    useEffect(()=>{
        const play = ()=>{
            autoPlayRef.current();
        }
        // const smooth = ()=>{
        //     transitionRef.current();
        // }

        // const transitionEnd = window.addEventListener('transitionend', smooth);

        if(autoPlay){
            const interval = setInterval(play, 3000)
            return ()=> clearInterval(interval);
        }
        // return () => { window.removeEventListener(transitionEnd)};
    },[]);

    if(imagesArr == undefined){
        return (
            <div>Oops</div>
        )
    }

    // const modifyArray = () =>{
    //     setSliderArray([<ImageComp width = {widthRatio} src = {imagesArr[(activeIndex - 1 + totalLength) % totalLength]}></ImageComp>,
    //         <ImageComp width = {widthRatio} src = {imagesArr[activeIndex]}></ImageComp>, 
    //         <ImageComp width = {widthRatio} src = {imagesArr[(activeIndex + 1) % totalLength]}></ImageComp>])
    //     console.log(sliderArray);
    // }

    const goLeft = () =>{ 
            setX(-(((activeIndex - 1 + totalLength) % totalLength) * 100));
            setactiveIndex((activeIndex - 1 + totalLength) % totalLength); 
            
            
            
    }

    const goRight = () =>{
            setX(-(((activeIndex + 1) % totalLength) * 100));
            setactiveIndex((activeIndex + 1) % totalLength);   
    
    }

    return(
        <div className = "slider">
            {_sliderArray.map((item,index)=>{
                return(
                    <>
                    <div className = "slide"  key={index} style = {{transform: `translateX(${x}%)`}}>
                        {item} 
                    </div>
                    </>
                )
            })}
            {
             autoPlay ? 
             <></>
             :
             <>
            <button id = "left" onClick = {goLeft}><i class="fas fa-chevron-left" ></i></button>
            <button id = "right" onClick = {goRight}><i class="fas fa-chevron-right"></i></button>
            </>
            }   
        </div>   
    )
}

export default Carousel