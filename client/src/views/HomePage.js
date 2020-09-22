import React from 'react'
import {useState, useRef, useEffect} from 'react'
import Tilt from 'react-parallax-tilt'
import  ProjectWindow from '../components/project_window'
import '../styles/HomePageStyle.css'
import '../styles/InteractiveBG.css'

import axios from 'axios'
import fruitGuideBackGround from '../images/project_asset/fruitscrollguide.PNG'
import GameBackGround from '../images/project_asset/2dgame.PNG'
import candyShopBackGround from '../images/project_asset/candyshop.jpg'
import blogBackGround from '../images/project_asset/blog.jpg'
import portfolioBackGround from '../images/project_asset/portfolio.PNG'
import treeBackGround from '../images/tree_background.png'
import {TweenMax, Power3, TimelineLite,TweenLite, gsap} from 'gsap/all'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fruit1 from '../images/fruitscrollguide/fruit_1.PNG'
import fruit2 from '../images/fruitscrollguide/fruit_2.PNG'
import fruit3 from '../images/fruitscrollguide/fruit_3.PNG'
import fruit4 from '../images/fruitscrollguide/fruit_4.PNG'
import fruit5 from '../images/fruitscrollguide/fruit_5.PNG'

import porf1 from '../images/portfolio/por_1.png'
import porf2 from '../images/portfolio/por_2.png'
import porf3 from '../images/portfolio/por_3.png'
import porf4 from '../images/portfolio/por_4.png'


import gameVideo from '../images/2d_game/2dgame.mp4'



const HomePage = (props) =>{
    const initialFormContent = {name: "", company : "", email: "", message: ""}
    const fruitProps = {
        skills: ["React.js", "JavaScript", "Express.js", "Node.js", "MongoDB", "VSCode", "NGINX", "AWS"],
        link: {website: "http://www.fruitscrollguide.ml", github: "https://github.com/Jorden-Tang/React-Scroll-Price"},
        title: "Fruit Scroll Guide",
        content : "with 126 active users, Scroll Guide project provides search & analysis functionality for in-game items. User can search items with multiple parameters in real time. Users can gain access to game party appointment system by register an account. \n Test Email: test@test.com  Test Password: password ",
        images: [fruit1, fruit2, fruit3,fruit4,fruit5],
        autoPlay: true,
    }

    const gameProps = {
        skills: ["Java", "JVM", "JRE", "JDK", "Eclipse"],
        link: {website: "", github: "https://github.com/Jorden-Tang/2d_platform_rpg"},
        title: "Java Adventure Game",
        content : "This 2d platform game is developed using Eclipse and Java platform. Main Concepts such as Interface, Abstract Class, Dependency Injections are being practiced.",
        images: [],
        video : gameVideo,
        
    }

    const porfProps = {
        skills: ["React.js", "GreenSock", "Node.js"],
        link: {website: "", github: "https://github.com/Jorden-Tang/react-portfolio"},
        title: "Porfolio",
        content : "My portfolio site is developed using React.js.  Every component is coded from sratch. Animations and Effects are being achieved by GreenSock. Cracted with reponsive design in mind",
        images : [porf1, porf2, porf3, porf4],
        autoPlay: false,
        widthRatio :40,
    }


    const [emailContent, setEmailContent] = useState(initialFormContent);
    const [navBackground, setNavBackground] = useState(false)
    const [sideNavDisplay, setSideNavDisplay] = useState(true);
    const [projectModalOpen1, setProjectModalOpen1] = useState(false);
    const [projectModalOpen2, setProjectModalOpen2] = useState(false);
    const [projectModalOpen3, setProjectModalOpen3] = useState(false);


    const [menuMode, setMenuMode] = useState(false);

    let tl = gsap.timeline();
    let intro = useRef(null)


    gsap.registerPlugin(ScrollTrigger);

  
    useEffect(()=>{
        gsap.from(intro, {duration: 1.5, ease: "bounce", y : -300, scale: 0.9, opacity: 0});
        gsap.from('#parallax h2',{duration: 2, ease: "bounce", x: 100, opacity: 0});
        gsap.from('.content', 
            {scrollTrigger: {
                trigger: '.timeline',
                start: "0px, 50%",
                end: "bottom, 40%",
                toggleActions: 'restart none reverse none',
            },
            duration: 2, 
            opacity: 0,
            y: 40, 
            delay: 0.5,
            stagger:0.2},)

        gsap.from('.skill_row', 
        {scrollTrigger: {
            trigger: '.skills',
            start: "0px, 60%",
            end: "bottom, 40%",
            toggleActions: 'restart none reverse none',
        }, 
        duration: 1, ease: "power",  y: 40, opacity: 0, stagger: 0.2})

        gsap.from('.project_content', 
        {scrollTrigger: {
            trigger: '#project_section',
            start: "0px, 60%",
            end: "bottom, 40%",
            toggleActions: 'restart none reverse none',
        }, 
        duration: 1, ease: "power", y: 50, opacity: 0, stagger: 0.2})
        
    }, [])

    const onHomeClick = () =>{
        window.scrollTo(0,0);
    }


    const onFormChange = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        setEmailContent({...emailContent, [name]: value});
        console.log(emailContent);
    }

    const onFormSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/email", emailContent, {withCredentials: true})
            .then((result)=>{
                console.log(result)
            })
        setEmailContent(initialFormContent);
    }

    const onScrollYCheck = () =>{
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

    const onWindowResize = () =>{
        if(window.innerWidth <= 1150){
            setMenuMode(true);
        }
        else{
            setMenuMode(false);
        }
    }

    window.addEventListener('scroll', onScrollYCheck);
    window.addEventListener('resize', onWindowResize);

    return(
        <>
        <div id = "overlay" className = "fade-in"  style = {{display : projectModalOpen1 || projectModalOpen2 || projectModalOpen3 ? "block" : "none"}}></div>      
        <div id = "social_media"  style = {{opacity : sideNavDisplay ? '0' : '0.8'}}>
            <a style = {{bottom: "200px", backgroundColor: "#006cbf"}}>
                <button onClick = {()=>{window.open("https://www.linkedin.com/in/jorden-tang-6b329a196/", "_blank")}}>Connect</button>
                <i class="fab fa-linkedin-in" style = {{width: "60px"}}></i>
            </a>                
            <a style = {{bottom: "260px", backgroundColor: "#3b5998"}}>
            <button onClick = {()=>{window.open("https://www.facebook.com/martin.s.tang.58/", "_blank")}}>Connect</button>
            <i class="fab fa-facebook-f" style = {{width: "60px"}}></i>
            </a>
            
            <a style = {{bottom: "320px", backgroundColor: "black"}}>
            <button onClick = {()=>{window.open("https://github.com/Jorden-Tang", "_blank")}}>Connect</button>
            <i class="fab fa-github" style = {{width: "60px"}}></i>


            </a> 
        </div>
        <div className = "body" style = {{overflow: "hidden"}}>
            <ProjectWindow className = "project_window"   setOnChange = {setProjectModalOpen1} onChange = {projectModalOpen1} prop = {fruitProps}>
            </ProjectWindow>
            <ProjectWindow className = "project_window" setOnChange = {setProjectModalOpen2} onChange = {projectModalOpen2} prop = {gameProps}>

            </ProjectWindow>
            <ProjectWindow className = "project_window" setOnChange = {setProjectModalOpen3} onChange = {projectModalOpen3}  prop = {porfProps}>
            </ProjectWindow>

            
                <div className = { navBackground ? 'menu_bar menu_bar_scrolled_style' : 'menu_bar menu_bar_static_style'}>
                    <div id = "logo" onClick= {onHomeClick}>
                        Tang
                    </div>
                    <button className = {navBackground ?  " menu_button_scrolled" : "menu_button_scrolled"} onClick = {() =>{setMenuMode(!menuMode)}}> { menuMode ? <i class="fas fa-bars"></i> : <i class="fas fa-times"></i> }</button>
                    <div  className = {menuMode ?  "nav_link nav_link_disable" : "nav_link nav_link_button_clicked"}>
                        <a   href= "#experience_section" >TimeLine
                        {/* <img src={require('../images/down_arrow.svg')} /> */}
                        </a>
                        <a  onClick =  {() => {setMenuMode(false)}} href= "#project_section" >Projects
                        {/* <img src={require('../images/down_arrow.svg')} /> */}
                        </a>
                        <a onClick =  {() => {setMenuMode(false)}} href= "#contact_start_point" >Contact
                        {/* <img src={require('../images/down_arrow.svg')} /> */}
                        </a>
                    </div>
                    <div id = "blog">
                        Blog
                    </div>
                </div>
            

            <div className = "section" >
                
                <div id = "parallax">
                        <div id = "background_tree"></div>
                        <h1 ref={el =>{intro = el}}>Hello I'm <span style = {{color: "pink"}}>Jorden Tang</span></h1> 
                        <h2><span style = {{color: "#dc143c"}}>PASSIONATE</span> web developer, software engineer residing in LA <i class="fas fa-city"></i></h2>
                </div>
            </div>

   
            <div className = "section" id = "experience_section">
                <div className = "experience_background" ></div>
                <div className = "timeline" >
                    <ul>
                        <li>
                            <div className = "content">
                                <img  src = {require('../images/leetcode_logo.png')}></img>
                                <div>
                                <h2 className = "content_header">Seeking Position</h2>
                                <span>Working on personal projects on Github, doing LeetCode questions</span>
                                </div>
                                <p>2020-Now</p>
                            </div>
                        </li>
                        <li>
                            <div className = "content">
                                <img src = {require('../images/dojo_logo.png')}></img>
                                <div>
                                <h2 className = "content_header">Coding Dojo</h2>
                                <span>Full-Stack Web Development BootCamp. 1000 hands-on hours on Django, SpringBoot, React.js Stacks</span>
                                </div>
                                <p>2019-2020</p>
                            </div>
                        </li>
                        <li>
                            <div className = "content">
                                <img  src = {require('../images/ucsd_logo.png')}></img>
                                <div>
                                <h2 className = "content_header"> UCSD Under Grad</h2>
                                <span> Bachelor Degree Of Science in Mathmatics-Computer Science, Focus on Software Engineering And Programming</span>
                                </div>
                                <p>2016-2019</p>
                            </div>
                        </li>
                        <li>
                            <div className = "content">
                                <img  src = {require('../images/citrus_college_logo.png')} ></img>
                                <div>
                                <h2 className = "content_header"> College Student</h2>
                                <span> Associate Degree Of  Mathmatics, Calculus, Linear Algebra, Introduction To Programming</span>
                                </div>
                                <p>2013-2015</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className = "skills" >
                    <div className = "skill_tags_section">
                    <div className = "skill_row row_odd" >
                        <img className = "skill_img si_java" src = {require('../images/java_logo.png')}></img>
                        <div className ="java_detail skill_details row_1" >
                            <div>
                                <img src = {require('../images/java_logo.png')} ></img>
                                <p>Java</p>
                            </div>
                            <span>Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. 
                                  It is a general-purpose programming language intended to let application developers write once, run anywhere ,meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.
                            </span>
                        </div>
                        <img className ="skill_img" src = {require('../images/javascript_logo.png')}></img>
                        <div className ="skill_details row_1" >
                            <div>
                                <img src = {require('../images/javascript_logo.png')} ></img>
                                <p>Javascript</p>
                            </div>
                            <span>JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.</span>
                            
                        </div>
                        <img className ="skill_img" src = {require('../images/python_logo.png')}></img>
                        <div className ="skill_details row_1" >
                            <div>
                                <img src = {require('../images/python_logo.png')} ></img>
                                <p>Python</p>
                            </div>
                            <span>Python is an interpreted, high-level and general-purpose programming language.  Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented, and functional programming. </span>
                        </div>


                        <img className ="skill_img" src = {require('../images/c++_logo.png')}></img>
                        <div className ="skill_details row_1" >
                        <div>
                                <img src = {require('../images/c++_logo.png')} ></img>
                                <p>c++</p>
                            </div>
                            <span>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms.</span>
                        </div>


                        <img className ="skill_img" src = {require('../images/jquery_logo.png')}></img>
                        <div className =" skill_details row_1" >
                            <div>
                                <img src = {require('../images/jquery_logo.png')} ></img>
                                <p>jquery</p>
                            </div>
                            <span>jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. jQuery's syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications. jQuery also provides capabilities for developers to create plug-ins on top of the JavaScript library. This enables developers to create abstractions for low-level interaction and animation, advanced effects and high-level, themeable widgets. The modular approach to the jQuery library allows the creation of powerful dynamic web pages and Web applications.</span>
                        </div>

                    </div>
                    <div className = "skill_row row_even">
                        <img className ="skill_img" src = {require('../images/aws_logo.png')}></img>
                        <div className ="javascript_detail skill_details row_2" >
                            <div>
                                <img src = {require('../images/aws_logo.png')} ></img>
                                <p>Amazon Web Service</p>
                            </div>
                            <span>Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. These cloud computing web services provide a variety of basic abstract technical infrastructure and distributed computing building blocks and tools. One of these services is Amazon Elastic Compute Cloud (EC2), which allows users to have at their disposal a virtual cluster of computers, available all the time, through the Internet.</span>
                        </div>

                        <img className ="skill_img" src = {require('../images/nginx_logo.png')}></img>
                        <div className ="javascript_detail skill_details row_2" >
                            <div>
                                <img src = {require('../images/nginx_logo.png')} ></img>
                                <p>NGINX</p>
                            </div>
                            <span>Nginx, stylized as NGINX or nginx or NginX, is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache. The software was created by Igor Sysoev and publicly released in 2004. Nginx is free and open-source software, released under the terms of the 2-clause BSD license.</span>
                        </div>


                        <img className ="skill_img" src = {require('../images/socket_logo.png')}></img>
                        <div className ="javascript_detail skill_details row_2" >
                            <div>
                                <img src = {require('../images/socket_logo.png')} ></img>
                                <p>Socket.io</p>
                            </div>
                            <span>Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API. Like Node.js, it is event-driven.</span>
                        </div>
                        <img className ="skill_img" src = {require('../images/mongodb_logo.png')}></img>
                        <div className ="javascript_detail skill_details row_2" >
                            <div>
                                <img src = {require('../images/mongodb_logo.png')} ></img>
                                <p>MongoDB</p>
                            </div>
                            <span>MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.</span>
                        </div>
                        <img className ="skill_img" src = {require('../images/mysql_logo.png')}></img>
                        <div className ="javascript_detail skill_details row_2" >
                            <div>
                                <img src = {require('../images/mysql_logo.png')} ></img>
                                <p>Mysql Database</p>
                            </div>
                            <span>MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for Structured Query Language.</span>
                        </div>
                    </div>
                    
                    <div className = "skill_row row_odd">
                        <img className ="skill_img " src = {require('../images/sqlite_logo.png')}></img>
                        <div className ="javascript_detail skill_details row_3" >
                            <div>
                                <img src = {require('../images/sqlite_logo.png')} ></img>
                                <p>sqlite Database</p>
                            </div>
                            <span>SQLite is a relational database management system contained in a C library. In contrast to many other database management systems, SQLite is not a client–server database engine. Rather, it is embedded into the end program.</span>
                        </div>


                        <img className ="skill_img" src = {require('../images/react_logo.png')}></img>
                        <div className ="javascript_detail skill_details row_3" >
                            <div>
                                <img src = {require('../images/react_logo.png')} ></img>
                                <p>React.js</p>
                            </div>
                            <span>React is an open-source JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</span>
                        </div>


                        <img className ="skill_img" src = {require('../images/html_logo.png')}></img>
                        <div className ="javascript_detail skill_details row_3" >
                            <div>
                                <img src = {require('../images/html_logo.png')} ></img>
                                <p>HTML 5</p>
                            </div>
                            <span>HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and latest major version of HTML that is a World Wide Web Consortium recommendation.</span>
                        </div>


                        <img className ="skill_img" src = {require('../images/css_logo.png')}></img>
                        <div className ="javascript_detail skill_details row_3" >
                            <div>
                                <img src = {require('../images/css_logo.png')} ></img>
                                <p>CSS 3</p>
                            </div>
                            <span>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</span>
                        </div>


                        <img className ="skill_img" src = {require('../images/flask_logo.png')}></img>
                        <div className ="javascript_detail skill_details row_3" >
                            <div>
                                <img src = {require('../images/flask_logo.png')} ></img>
                                <p>FLASK</p>
                            </div>
                            <span>Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions.</span>
                        </div>
                    </div>
                    <div className = "skill_row row_even">
                        <img className ="skill_img" src = {require('../images/django_logo.png')}></img>
                        <div className ="javascript_detail skill_details row_4" >
                            <div>
                                <img src = {require('../images/django_logo.png')} ></img>
                                <p>Django</p>
                            </div>
                            <span>Django is a Python-based free and open-source web framework that follows the model-view-controller architectural pattern. It is maintained by the Django Software Foundation, an American independent organization established as a 501 non-profit.</span>
                        </div>
                        <img className ="skill_img" src = {require('../images/express_logo.png')}></img>
                        <div className ="javascript_detail skill_details row_4" >
                            <div>
                                <img src = {require('../images/express_logo.png')} ></img>
                                <p>Express.js</p>
                            </div>
                            <span>Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</span>
                        </div>
                        <img className ="skill_img" style = {{opacity: "0"}}></img>
                        <img className ="skill_img" style = {{opacity: "0"}}></img>
                        <img className ="skill_img" style = {{opacity: "0"}}></img>
                    </div>
                    
                    </div>
                    <div id="skill_info">
                    </div>
                </div>
            </div>
            <  div  className = "section" id = "project_section">
                <div  className = "project_container"  style = {{pointerEvents : projectModalOpen1 || projectModalOpen2 || projectModalOpen3 ? "none" : "all" , 
                                                                 filter: projectModalOpen1 || projectModalOpen2 || projectModalOpen3 ? "blur(30px)" : "blur(0px)", 
                                                               }}>
                            <div id = "project_background">
                            
                            </div>
                            <Tilt style = {{ display: "inline-block"}}>
                            <div className = "project_content" style = {{backgroundImage: `url(${fruitGuideBackGround})`}}>
                                <div id = "fruitScrollGuide" className = "project_inner"  >
                                    <h2>Game Price Guide</h2>
                                    <div className = "project_tools">
                                        <img src={require('../images/react_logo.png')}></img>
                                        <img src={require('../images/javascript_logo.png')}></img>
                                        <img src={require('../images/aws_logo.png')}></img>
                                        <img src={require('../images/express_logo.png')}></img>
                                        <img src={require('../images/mongodb_logo.png')}></img>
                                        <img src={require('../images/nodejs_logo.png')}></img>
                                    </div>
                                    <div className = "project_info">
                                        <button className = "project_link" onClick = {()=>{
                                                    setProjectModalOpen1(true);
                                                    gsap.from('.project_window', {duration: 1.5, scale: 0.1, opacity: 0});

                                        }}> <i class="fas fa-book-open"></i> Learn More</button>
                                    </div>
                                </div>
                            </div>
                           </Tilt>

                            <Tilt style = {{width: "500px", display: "inline-block" }}>
                            <div className = "project_content" style = {{backgroundImage: `url(${GameBackGround})`}}>
                                <div id = "plat" className = "project_inner">
                                    <h2>Simple Platform Game</h2>                   
                                    <div className = "project_tools">
                                        <img src={require('../images/java_logo.png')}></img>
                                        <img src={require('../images/eclipse_logo.png')}></img>   
                                    </div>
                                    <div className = "project_info">
                                        <button className = "project_link" onClick = {()=>{setProjectModalOpen2(true)}}> <i class="fas fa-book-open"></i> Learn More</button> 
                                    </div>
                                </div>
                            </div>
                            </Tilt>
                            
                            <Tilt style = {{width: "500px", display: "inline-block" }}>
                            <div className = "project_content" style = {{backgroundImage : `url(${portfolioBackGround})`}}>
                                <div id = "2dplatform" className = "project_inner">
                                    <h2>Portfolio</h2>                                
                                    <div className = "project_tools">
                                        <img src={require('../images/react_logo.png')}></img>
                                        <img src={require('../images/javascript_logo.png')}></img>

                                    </div>
                                    <div className = "project_info">
                                        <button className = "project_link" onClick = {()=>{setProjectModalOpen3(true)}}> <i class="fas fa-book-open"></i> Learn More</button> 
                                    </div>
                                </div>

                            </div>
                            </Tilt>
                            <Tilt style = {{width: "500px", display: "inline-block" }}> 
                            <div className = "project_content" style = {{backgroundImage : `url(${candyShopBackGround})`}}>
                                <div id = "candyshop" className = "project_inner">
                                    <h2>Candy Shop</h2>   
                                    <div className = "project_tools">
                                        <img src={require('../images/django_logo.png')}></img>
                                        <img src={require('../images/python_logo.png')}></img>
                                        <img src={require('../images/css_logo.png')}></img>
                                        <img src={require('../images/nginx_logo.png')}></img>
                                    </div>
                                    <div className = "project_info">
                                        {/* <button className = "project_link">live demo</button> 
                                        <button className = "project_github">learn more</button> */}
                                        <button className = "project_link" style = {{backgroundColor:"black", pointerEvents: "none"}}><i class="far fa-keyboard"></i> Under Development</button>
                                    </div>
                                </div>
                            </div>
                            </Tilt>
                            <Tilt style = {{width: "500px", display: "inline-block" }}> 
                            <div className = "project_content" style = {{backgroundImage : `url(${blogBackGround})`}}>
                                <div id = "candyshop" className = "project_inner">
                                    <h2>Personal Blog</h2>   
                                    <div className = "project_tools">
                                        <img src={require('../images/django_logo.png')}></img>
                                        <img src={require('../images/python_logo.png')}></img>
                                        <img src={require('../images/nginx_logo.png')}></img> 
                                        <img src={require('../images/css_logo.png')}></img>
                                    </div>
                                    <div className = "project_info">
                                        {/* <button className = "project_link">live demo</button> 
                                        <button className = "project_github">learn more</button> */}
                                        <button className = "project_link" style = {{backgroundColor:"black", pointerEvents: "none"}}><i class="far fa-keyboard"></i> Under Development</button>
                                    </div>
                                </div>
                            </div>
                            </Tilt>
                </div>
            </div>

            <svg  id = "contact_start_point" style = {{backgroundColor: "white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgb(231, 229, 229)" fill-opacity="1" d="M0,64L720,160L1440,64L1440,0L720,0L0,0Z"></path>
            </svg>
            <div className = "section" id = "contact_section">
                <div id = "contact_start">
                    <div id="contact_info">
                        <div className = "contact_info_row">
                              <div>
                               <i class="fas fa-phone-volume"></i>    Lets Talk
                              </div>
                              <p>+1 626-354-4112</p>  
                        </div>
                        <div className = "contact_info_row">
                              <div>
                                <i class="fas fa-envelope"></i>    Send Email
                              </div>
                              <p>JordenTangWork@gmail.com</p>  
                        </div>
                        <div className = "contact_info_row">
                              <div>
                                <i class="fab fa-linkedin"></i>    Linkedin Message
                              </div>
                              <p>linkedin.com/in/jorden-tang-6b329a196</p>  
                        </div>
                    </div>
                    <form id = "contact_form">
                        <h1>Let's Connect!</h1>
                        <div>
                            <label>TELL ME YOUR NAME *</label>
                            <input placeholder = "(First Name, Last Name)"type="text" name = "name" value = {emailContent.name} onChange = {onFormChange}></input>
                        </div>
                        <div >
                            <label>COMPANY *</label>
                            <input placeholder = "Ex: Microsoft"type="text" name = "company" value = {emailContent.company} onChange = {onFormChange}></input>
                        </div>
                        <div >
                            <label>ENTER YOUR EMAIL *</label>
                            <input placeholder = "Ex: JordenTang@123.com"type="text" name = "email"  value = {emailContent.email} onChange = {onFormChange}></input>
                        </div>
                        <div >
                            <label>MESSAGE *</label>
                            <textarea placeholder = "Write A Message" name = "message" value = {emailContent.message} onChange = {onFormChange}></textarea>
                        </div>
                        <button id = "submit_button" onClick={onFormSubmit}>Submit</button>
                    </form>  
                </div>
            </div>
            <div id = "footer">
                <div id = "up_arrow" onClick = {() => {window.scrollTo(0,0)}}>
                    <i class="far fa-arrow-alt-circle-up"></i>
                </div>
                <div id = "footer_social">
                    <div className = "logo" onClick = {()=>{window.open("https://github.com/Jorden-Tang", "_blank")}}>
                        <i class="fab fa-github"></i>
                    </div>
                    <div className = "logo" onClick = {()=>{window.open("https://www.linkedin.com/in/jorden-tang-6b329a196/", "_blank")}}>
                        <i class="fab fa-linkedin"></i>
                    </div>
                    <div className = "logo" onClick = {()=>{window.open("https://www.facebook.com/martin.s.tang.58/", "_blank")}}>
                        <i class="fab fa-facebook"></i>
                    </div>
                </div>
                <p>Copyright © 2020 JordenTang</p>
            </div>
        </div>
        </>
    )
}

export default HomePage;