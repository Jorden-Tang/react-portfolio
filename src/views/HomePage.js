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
                                <h2>2020-Present</h2>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                            </div>
                        </li>
                        <li>
                            <div className = "content">
                                <h2>2019-2020</h2>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                            </div>
                        </li>
                        <li>
                            <div className = "content">
                                <h2>2016-2019</h2>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
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