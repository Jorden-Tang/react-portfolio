import React from 'react'
import {useState, useRef, useEffect} from 'react'
import '../styles/HomePageStyle.css'
import '../styles/InteractiveBG.css'
import HoverVideoPlayer from 'react-hover-video-player';


const HomePage = (props) =>{
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 120
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return(
        <div className = "body">
            <div className = "menu_bar"     
                style={{ transition: '1s ease' , backgroundColor: navBackground ? 'white' : 'transparent', color: navBackground ? 'black': 'white', boxShadow:  navBackground ? '0px 10px 30px 1px rgba(0,0,0,0.3)': ''}}>
                <div id = "logo">
                    Jorden Tang
                </div>
                <div id = "nav_link">
                    <a className = "nav_tab" href= "#about_me_section" style = {{color : navBackground ? 'black' : 'white', transition: '1s ease'}}>
                        About Me
                        <img src={require('../images/down_arrow.svg')} />
                    </a>
                    <a href= "#experience_section" style = {{color : navBackground ? 'black' : 'white', transition: '1s ease'}}>Experience 
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

            <div className = "section" id = "about_me_section">
                <div id = "parallax">
                    <h1 >Hello I'm Jorden Tang</h1> 
                    <h2 >passionate web developer, software engineer residing in LA.</h2>
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
                                <p>2013-2016</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className = "skills">
                    <ul>
                        <li>
                            <img src = {require('../images/java_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_90" ></div>
                            </div>
                        </li>
                        <li>
                            <img src = {require('../images/javascript_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_90" ></div>
                            </div>
                        </li>
                        <li>
                            <img src = {require('../images/python_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_70"></div>
                            </div>
                        </li>

                        <li>
                            <img src = {require('../images/c++_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_70"></div>
                            </div>
                        </li>
                        <li>
                            <img src = {require('../images/jquery_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_70"></div>
                            </div>
                        </li>
                        <li>
                            <img src = {require('../images/aws_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_50"></div>
                            </div>
                        </li>
                        <li>
                            <img src = {require('../images/nginx_logo.png')}></img>
                            <div className = "skill_bar">
                                <div className = "progress w_50"></div>
                            </div>
                        </li>
                        <li>
                            <img src = {require('../images/socket_logo.png')}></img>
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
                <div className = "project_container">
                    <ul>
                        <li>
                            <div className = "project_content">
                                <div className = "demo_video_container">
                                <HoverVideoPlayer style = {{borderRadius: "5px"}}
                                    videoSrc= {require('../videos/video1.mp4')}
                                    pausedOverlay={
                                        <img src="thumbnail-image.jpg" alt="" />
                                    }
                                    loadingOverlay={
                                        <div className="loading-spinner-overlay" />
                                    }
                                    />
                                </div>
                                <h3>Fruit Scroll Guide</h3>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc. Dignissim suspendisse in est ante in nibh mauris cursus.</span>
                            </div>
                        </li>
                        <li>
                            <div className = "project_content">
                                <div className = "demo_video_container">
                                <HoverVideoPlayer 
                                    videoSrc= {require('../videos/video1.mp4')}
                                    pausedOverlay={
                                        <img src="thumbnail-image.jpg" alt="" />
                                    }
                                    loadingOverlay={
                                        <div className="loading-spinner-overlay" />
                                    }
                                    />
                                </div>
                            
                                <h3>Fruit Scroll Guide</h3>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc. Dignissim suspendisse in est ante in nibh mauris cursus.</span>
                             
                            </div>
                        </li>
                        <li>
                            <div className = "project_content">
                            <div className = "demo_video_container">
                                <HoverVideoPlayer
                                    videoSrc= {require('../videos/video1.mp4')}
                                    pausedOverlay={
                                        <img src="thumbnail-image.jpg" alt="" />
                                    }
                                    loadingOverlay={
                                        <div className="loading-spinner-overlay" />
                                    }
                                    />
                                </div>
                                <h3>Fruit Scroll Guide</h3>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc. Dignissim suspendisse in est ante in nibh mauris cursus.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className = "section" id = "contact_section"> 
                <h1>contact</h1>
            </div>
            <script>
                
            </script>
        </div>
    )
}

export default HomePage;