import React from 'react'
import {useState, useRef, useEffect} from 'react'
import '../styles/HomePageStyle.css'
import '../styles/InteractiveBG.css'
import fruitGuideBackGround from '../images/project_asset/fruitscrollguide.PNG'
import GameBackGround from '../images/project_asset/2dgame.PNG'
import candyShopBackGround from '../images/project_asset/candyshop.jpg'
import portfolioBackGround from '../images/project_asset/portfolio.PNG'
import {TweenMax, Power3, TimelineLite,TweenLite, gsap} from 'gsap/all'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const HomePage = (props) =>{
    const initialFormContent = {name: "", company : "", email: "", message: ""}
    const [emailContent, setEmailContent] = useState(initialFormContent);

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

        gsap.from('.content img', 
            {scrollTrigger: {
                trigger: '.timeline',
                start: "0px, 50%",
                end: "bottom, 400px",
                toggleActions: 'restart none reverse none',
            },
            duration: 2, 
            opacity: 0,
            y: 40, 
            delay: 0.5,
            stagger:0.2},)

        gsap.from('.progress', 
        {scrollTrigger: {
            trigger: '#experience_start',
            start: "0px, 50%",
            end: "bottom, 40%",
            toggleActions: 'restart none reverse none',
        }, 
        duration: 1, ease: "power", width: 0, stagger: 0.2})

        gsap.from('.project_content', 
        {scrollTrigger: {
            trigger: '#project_start',
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
                    <a href= "#project_start" style = {{color : navBackground ? 'black' : 'white', transition: '1s ease'}}>Projects
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
                <div className = "skills" ref={el=>{skillContainer = el}}>
                    <h1 >SKILL SET
                        <hr></hr>
                    </h1>
                    <div>
                    <div className = "skill_row row_odd" >
                        <img src = {require('../images/java_logo.png')}></img>
                        <img src = {require('../images/javascript_logo.png')}></img>
                        <img src = {require('../images/python_logo.png')}></img>
                        <img src = {require('../images/c++_logo.png')}></img>
                        <img src = {require('../images/jquery_logo.png')}></img>
                    </div>
                    <div className = "skill_row row_even">
                        <img src = {require('../images/aws_logo.png')}></img>
                        <img src = {require('../images/nginx_logo.png')}></img>
                        <img src = {require('../images/socket_logo.png')}></img>
                        <img src = {require('../images/mongodb_logo.png')}></img>
                        <img src = {require('../images/mysql_logo.png')}></img>
                    </div>
                    <div className = "skill_row row_odd">
                        <img src = {require('../images/sqlite_logo.png')}></img>
                        <img src = {require('../images/react_logo.png')}></img>
                        <img src = {require('../images/html_logo.png')}></img>
                        <img src = {require('../images/css_logo.png')}></img>
                        <img src = {require('../images/flask_logo.png')}></img>
                    </div>
                    <div className = "skill_row row_even">
                        <img src = {require('../images/django_logo.png')}></img>
                        <img src = {require('../images/express_logo.png')}></img>
                        <img style = {{opacity: "0"}}></img>
                        <img style = {{opacity: "0"}}></img>
                        <img style = {{opacity: "0"}}></img>
                    </div>
                    </div>
                    <div id="skill_info">
        
                    </div>
                </div>
            </div>
            <svg  id = "project_start"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style = {{ zIndex: "-2",position: "relative",backgroundColor: "rgb(230, 233, 190)"}}><path fill="rgb(63,68,77)" fill-opacity="1" d="M0,128L60,144C120,160,240,192,360,202.7C480,213,600,203,720,186.7C840,171,960,149,1080,138.7C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div  className = "section" id = "project_section">
                <div  className = "project_container">

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
                                        <button className = "project_link">live demo</button> 
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
                                        <button className = "project_link">live demo</button> 
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
                                        <button className = "project_link">live demo</button> 
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
                                        <button className = "project_link">live demo</button> 
                                        <button className = "project_github">learn more</button>
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