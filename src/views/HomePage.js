import React from 'react'
import HomeStyle from '../styles/home.module.css'
import '../styles/InteractiveBG.css'


const HomePage = (props) =>{
    return(
        <>
  
        <div className = {HomeStyle.container}>
            <div className="container demo">
                <div className="content">
                    <div id="large-header" className="large-header">
                        <canvas id="demo-canvas"></canvas>
                        <h1 className="main-title"><span className="thin">Explore</span> Space</h1>
                    </div>
                </div>
            </div>
            {/* <script>
                window.console = window.console || function(t) {};
            </script> */}
            {/* <script crossOrigin src ="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js"></script>
            <script crossOrigin src ="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js"></script>
            <script crossOrigin src ="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js"></script> */}
        </div>
       
        </>
    )
}

export default HomePage;