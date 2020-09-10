import React from 'react'
import {useState, useRef, useEffect} from 'react'
import  ProjectWindow from '../components/project_window'
import '../styles/HomePageStyle.css'
import '../styles/InteractiveBG.css'

import fruitGuideBackGround from '../images/project_asset/fruitscrollguide.PNG'
import GameBackGround from '../images/project_asset/2dgame.PNG'
import candyShopBackGround from '../images/project_asset/candyshop.jpg'
import portfolioBackGround from '../images/project_asset/portfolio.PNG'
import treeBackGround from '../images/tree_background.png'
import {TweenMax, Power3, TimelineLite,TweenLite, gsap} from 'gsap/all'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const HomePage = (props) =>{
    const initialFormContent = {name: "", company : "", email: "", message: ""}
    const [emailContent, setEmailContent] = useState(initialFormContent);

    const [navBackground, setNavBackground] = useState(false)
    const [sideNavDisplay, setSideNavDisplay] = useState(true);
    const [projectModalOpen1, setProjectModalOpen1] = useState(false);
    const [projectModalOpen2, setProjectModalOpen2] = useState(false);
    const [projectModalOpen3, setProjectModalOpen3] = useState(false);

    let tl = gsap.timeline();
    let intro = useRef(null)
    let projectSection = useRef(false);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        gsap.from(intro, {duration: 1.5, ease: "bounce", y : -300, scale: 0.9, opacity: 0});
        gsap.from('#parallax h2',{duration: 2, ease: "bounce", x: 100, opacity: 0});

        gsap.from('.content img', 
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
            trigger: '#experience_start',
            start: "0px, 50%",
            end: "bottom, 40%",
            toggleActions: 'restart none reverse none',
        }, 
        duration: 1, ease: "power", y: 50, opacity: 0, stagger: 0.2})

        gsap.from('.project_content', 
        {scrollTrigger: {
            trigger: '#project_section',
            start: "0px, 40%",
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
    window.addEventListener('scroll', onScrollYCheck);

    return(
        <>             
        <div id = "social_media"  style = {{opacity : sideNavDisplay ? '0' : '0.8'}}>
            <a style = {{bottom: "200px", backgroundColor: "#006cbf"}}>
                <button onClick = {()=>{window.open("https://www.linkedin.com/in/jorden-tang-6b329a196/", "_blank")}}>Connect</button>
                <i class="fab fa-linkedin-in" style = {{width: "60px"}}></i>
            </a>                
            <a style = {{bottom: "260px", backgroundColor: "#3b5998"}}>
            <button>Connect</button>
            <i class="fab fa-facebook-f" style = {{width: "60px"}}></i>
            </a>
            <a style = {{bottom: "320px", backgroundColor: "#00c80f"}}>
            <button>Connect</button>
            <i class="fab fa-weixin" style = {{width: "60px"}}></i>
            </a> 
        </div>
        <div className = "body" style = {{overflow: "hidden"}}>
            <div className = "menu_bar"     
                style={{ transition: '1s ease' , backgroundColor: navBackground ? 'white' : 'transparent', color: navBackground ? 'black': 'white', boxShadow:  navBackground ? '0px 10px 30px 1px rgba(0,0,0,0.3)': ''}}>
                <div id = "logo" onClick= {onHomeClick}>
                    Tang
                </div>
                <div id = "nav_link" >
                    <a href= "#experience_start" style = {{color : navBackground ? 'black' : 'white', transition: '1s ease'}}>TimeLine
                    <img src={require('../images/down_arrow.svg')} />
                    </a>
                    <a href= "#project_section" style = {{color : navBackground ? 'black' : 'white', transition: '1s ease'}}>Projects
                    <img src={require('../images/down_arrow.svg')} />
                    </a>
                    <a href= "#contact_start" style = {{color : navBackground ? 'black' : 'white', transition: '1s ease'}}>Contact
                    <img src={require('../images/down_arrow.svg')} />
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
            <svg  style = {{backgroundColor: "#345e6c"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="rgb(230 233 190)" fill-opacity="1" d="M0,192L60,192C120,192,240,192,360,197.3C480,203,600,213,720,234.7C840,256,960,288,1080,293.3C1200,299,1320,277,1380,266.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div className = "section" id = "experience_section">
                <div className = "timeline" id = "experience_start ">
                    <h1 id = "experience_start"></h1>
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
                <div className = "skills" >
                    <div>
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
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style = {{ zIndex: "-2",position: "relative",backgroundColor: "rgb(230, 233, 190)"}}><path fill="rgb(63,68,77)" fill-opacity="1" d="M0,128L60,144C120,160,240,192,360,202.7C480,213,600,203,720,186.7C840,171,960,149,1080,138.7C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div  className = "section" id = "project_section">
                <ProjectWindow setOnChange = {setProjectModalOpen1} onChange = {projectModalOpen1}>
                    
               </ProjectWindow>
               <ProjectWindow setOnChange = {setProjectModalOpen2} onChange = {projectModalOpen2}>
               
               </ProjectWindow>

                <ProjectWindow setOnChange = {setProjectModalOpen3} onChange = {projectModalOpen3}>
               
                </ProjectWindow>
                <div  className = "project_container"  style = {{pointerEvents : projectModalOpen1 || projectModalOpen2 || projectModalOpen3 ? "none" : "all" , filter: projectModalOpen1 || projectModalOpen2 || projectModalOpen3 ? "blur(8px)" : "blur(0px)", transiton: "0.6s"}}>
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
                                        <button className = "project_link" onClick = {()=>{setProjectModalOpen1(true)}}>live demo</button> 
                                        <button className = "project_github">Github</button>
                                    </div>
                                </div>
                            </div>
                            <div className = "project_content" style = {{backgroundImage: `url(${GameBackGround})`}}>
                                <div id = "plat" className = "project_inner">
                                    <h2>Simple Platform Game</h2>                   
                                    <div className = "project_tools">
                                        <img src={require('../images/java_logo.png')}></img>
                                        <img src={require('../images/eclipse_logo.png')}></img>   
                                    </div>
                                    <div className = "project_info">
                                        <button className = "project_link" onClick = {()=>{setProjectModalOpen2(true)}}>live demo</button> 
                                        <button className = "project_github">Github</button>
                                    </div>
                                </div>
                            </div>
                             
                            <div className = "project_content" style = {{backgroundImage : `url(${portfolioBackGround})`}}>
                                <div id = "2dplatform" className = "project_inner">
                                    <h2>Portfolio</h2>                                
                                    <div className = "project_tools">
                                        <img src={require('../images/react_logo.png')}></img>
                                        <img src={require('../images/javascript_logo.png')}></img>

                                    </div>
                                    <div className = "project_info">
                                        <button className = "project_link" onClick = {()=>{setProjectModalOpen3(true)}}>live demo</button> 
                                        <button className = "project_github">Github</button>
                                    </div>
                                </div>

                            </div> 
                            <div className = "project_content" style = {{backgroundImage : `url(${candyShopBackGround})`}}>
                                <div id = "candyshop" className = "project_inner">
                                    <h2>Candy Shop</h2>   
                                    <div className = "project_tools">
                                        <img src={require('../images/django_logo.png')}></img>
                                        <img src={require('../images/python_logo.png')}></img>
                                    </div>
                                    <div className = "project_info">
                                        {/* <button className = "project_link">live demo</button> 
                                        <button className = "project_github">learn more</button> */}
                                        <span>Under Development</span>
                                    </div>
                                </div>
                            </div> 
                </div>
            </div>
            <svg  style = {{backgroundColor: "cadetblue"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(63,68,77)" fill-opacity="1" d="M0,96L720,288L1440,128L1440,0L720,0L0,0Z"></path></svg>
            <div className = "section" id = "contact_section"> 
                <h1>Get In Touch</h1>
                <form id = "contact_start">
                    <div id = "name_input">
                        <label>Name :</label>
                        <input type="text" name = "name" value = {emailContent.name} onChange = {onFormChange}></input>
                    </div>
                    <div id = "company_input">
                        <label>Company :</label>
                        <input type="text" name = "company" value = {emailContent.company} onChange = {onFormChange}></input>
                    </div>
                    <div id = "email_input">
                        <label>Email :</label>
                        <input type="text" name = "email"  value = {emailContent.email} onChange = {onFormChange}></input>
                    </div>
                    <div id = "message_input">
                        <label>Message :</label>
                        <textarea name = "message" value = {emailContent.message} onChange = {onFormChange}></textarea>
                    </div>
                    <hr></hr>
                    <button onClick={onFormSubmit}>Submit</button>
                </form>  
            </div>
        </div>
        </>
    )
}

export default HomePage;