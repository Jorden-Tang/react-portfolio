import React from 'react'
import {useState, useRef, useEffect} from 'react'
import '../styles/HomePageStyle.css'
import '../styles/InteractiveBG.css'
import fruitGuideBackGround from '../images/project_asset/fruitscrollguide.PNG'
import GameBackGround from '../images/project_asset/2dgame.PNG'
import {TweenMax, Power3, TimelineLite,TweenLite, gsap} from 'gsap/all'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const HomePage = (props) =>{
    const [navBackground, setNavBackground] = useState(false)
    const [sideNavDisplay, setSideNavDisplay] = useState(true);
    let tl = gsap.timeline();
    let skillItem = useRef(null)
    let skillContainer = useRef(null)
    let intro = useRef(null)

    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        gsap.from(intro, {duration: 1.5, ease: "bounce", y : -300, scale: 0.9, opacity: 0});
        gsap.from('#parallax h2',{duration: 2, ease: "bounce", x: 100, opacity: 0});

        tl.from('.content img', {scrollTrigger: '#timeline',duration: 1.5, opacity: 0, y: 30, stagger: 0.1, stagger: 0.3, delay: 1} )
        tl.from('.progress', {duration: 0.5, ease: "power", width: 0, stagger: 0.1})
        
        

    
    }, [])

    const onScrollYCheck = () =>{
        console.log(window.scrollY)
        if(window.scrollY > 120){
            setNavBackground(true);
        }
        else{
            setNavBackground(false);
        }


        if(window.scrollY > 300){
            setSideNavDisplay(false);
        }
        else{
            setSideNavDisplay(true);
        }
    }
    window.addEventListener('scroll', onScrollYCheck);

    return(
        <>             
        <div id = "social_media"  style = {{opacity : sideNavDisplay ? '0' : '0.8'}}>
            <a style = {{bottom: "200px", backgroundColor: "#006cbf"}}>
                <button onClick = {()=>{window.open("https://www.linkedin.com/in/jorden-tang-6b329a196/", "_blank")}}>Connect</button>
                <img src = {require('../images/linkedin.png')}></img>
            </a>                
            <a style = {{bottom: "260px", backgroundColor: "#3b5998"}}>
            <button>Connect</button>
            <img src = {require('../images/facebook.png')}></img>
            </a>
            <a style = {{bottom: "320px", backgroundColor: "#00c80f"}}>
            <button>Connect</button>
            <img src = {require('../images/wechat.png')}></img>
            </a> 
        </div>
        <div className = "body" style = {{overflow: "hidden"}}>
            <div className = "menu_bar"     
                style={{ transition: '1s ease' , backgroundColor: navBackground ? 'white' : 'transparent', color: navBackground ? 'black': 'white', boxShadow:  navBackground ? '0px 10px 30px 1px rgba(0,0,0,0.3)': ''}}>
                <div id = "logo">
                    Tang
                </div>
                <div id = "nav_link" >
                    <a href= "#experience_section" style = {{color : navBackground ? 'black' : 'white', transition: '1s ease'}}>About Me
                    <img src={require('../images/down_arrow.svg')} />
                    </a>
                    <a href= "#project_section" style = {{color : navBackground ? 'black' : 'white', transition: '1s ease'}}>Projects
                    <img src={require('../images/down_arrow.svg')} />
                    </a>
                    <a href= "#contact_section" style = {{color : navBackground ? 'black' : 'white', transition: '1s ease'}}>Contact
                    <img src={require('../images/down_arrow.svg')} />
                    </a>
                </div>

                <div id = "blog">
                    Blog
                </div>
            </div>

            <div className = "section" >
                <div id = "parallax">
                        
                        <h1 ref={el =>{intro = el}}>Hello I'm <span style = {{color: "pink"}}>Jorden Tang</span></h1> 
                        <h2 ><span style = {{color: "#dc143c"}}>PASSIONATE</span> web developer, software engineer residing in LA <i class="fas fa-city"></i></h2>
                    
                </div>
            </div>
            <div className = "section" id = "experience_section">
                <div className = "timeline">
                    <ul>
                        <li>
                            <div className = "content">
                                <img  src = {require('../images/leetcode_logo.png')}></img>
                                <div>
                                <h2> Seeking Opportunity</h2>
                                <span>Working on personal projects on Github, doing LeetCode questions</span>
                                </div>
                                <p>2020-Now</p>
                        
                            </div>
                        </li>
                        <li>
                            <div className = "content">
                                <img src = {require('../images/dojo_logo.png')}></img>
                                <div>
                                <h2>Coding Dojo</h2>
                                <span>Full-Stack Web Development BootCamp. 1000 hands-on hours on Django, SpringBoot, React.js Stacks</span>
                                </div>
                                <p>2019-2020</p>
                            </div>
                        </li>
                        <li>
                            <div className = "content">
                                <img  src = {require('../images/ucsd_logo.png')}></img>
                                <div>
                                <h2> UCSD Under Grad</h2>
                                <span> Bachelor Degree Of Science in Mathmatics-Computer Science, Focus on Software Engineering And Programming</span>
                                </div>
                                <p>2016-2019</p>
                            </div>
                        </li>
                        <li>
                            <div className = "content">
                                <img  src = {require('../images/citrus_college_logo.png')} ></img>
                                <div>
                                <h2> College Student</h2>
                                <span> Associate Degree Of  Mathmatics, Calculus, Linear Algebra, Introduction To Programming</span>
                                </div>
                                <p>2013-2015</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className = "skills" ref={el=>{skillContainer = el}}>
                    <ul>
                        <li>
                            <img 
                                ref={el => {skillItem = el}}
                                src = {require('../images/java_logo.png')}></img>
                                
                            <div  className = "skill_bar">
                                <div className = "progress w_90" ></div>
                            </div>
                        </li>
                        <li>
                            <img ref={el => {skillItem = el}} src = {require('../images/javascript_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_90" ></div>
                            </div>
                        </li>
                        <li>
                            <img ref={el => {skillItem = el}}  src = {require('../images/python_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_70"></div>
                            </div>
                        </li>

                        <li>
                            <img ref={el => {skillItem = el}} src = {require('../images/c++_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_70"></div>
                            </div>
                        </li>
                        <li>
                            <img ref={el => {skillItem = el}} src = {require('../images/jquery_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_70"></div>
                            </div>
                        </li>
                        <li>
                            <img ref={el => {skillItem = el}} src = {require('../images/aws_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_50"></div>
                            </div>
                        </li>
                        <li>
                            <img ref={el => {skillItem = el}}  src = {require('../images/nginx_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_50"></div>
                            </div>
                        </li>
                        <li>
                            <img ref={el => {skillItem = el}}  src = {require('../images/socket_logo.png')}></img>
                            <div className = "skill_bar w_70">
                                <div className = "progress w_50"></div>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src = {require('../images/mongodb_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_90"></div>
                            </div>
                        </li>

                        <li>
                            <img src = {require('../images/mysql_logo.png')}></img>
                            <div className = "skill_bar ">
                                <div className = "progress w_90"></div>
                            </div>
                        </li>

                        <li>
                            <img src = {require('../images/sqlite_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_90"></div>
                            </div>
                        </li>

                        <li>
                            <img src = {require('../images/react_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_90"></div>
                            </div>
                        </li>
                        <li>
                            <img src = {require('../images/html_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_80"></div>
                            </div>
                        </li>
                        <li>
                            <img src = {require('../images/css_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_80"></div>
                            </div>
                        </li>
                        <li>
                            <img src = {require('../images/flask_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_70"></div>
                            </div>
                        </li>
                        <li>
                            <img src = {require('../images/django_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_70"></div>
                            </div>
                        </li>
                        <li>
                            <img src = {require('../images/express_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_90"></div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            
            <div className = "section" id = "project_section">
            <h1 className = "section_header">My Work
                    <div className = "underline"></div>
                </h1>
                <div className = "project_container">

                            <div className = "project_content" style = {{backgroundImage: `url(${fruitGuideBackGround})`}}>
                                <div id = "fruitScrollGuide" className = "project_inner"  >
                                    <button>live Demo</button> 
                                    <button>learn more</button>
                                </div>
                            </div>
 
                            <div className = "project_content" style = {{backgroundImage: `url(${GameBackGround})`}}>

                                <div id = "2dplatform" className = "project_inner">
                                    <button>live demo</button> 
                                    <button>learn more</button>
                                </div>
                            </div>
                             
                            <div className = "project_content">

                                <div id = "candyshop" className = "project_inner">
                                    <button>live demo</button> 
                                    <button>learn more</button>
                                </div>
                            </div>
                            
     

        
                </div>
            </div>
            <div className = "section" id = "contact_section"> 
                <h1>contact</h1>
            </div>
            <script>
                
            </script>
        </div>


        </>
    )
}

export default HomePage;