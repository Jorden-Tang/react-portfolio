import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Router} from '@reach/router'
import HomePage from './views/HomePage'
import BlogPage from './views/BlogPage'
import ContactPage from './views/ContactPage'
import ResumePage from './views/ResumePage'
import ProjectPage from './views/ProjectPage'
import AppStyle from './styles/app.module.css'

function App() {
  return (
    <div className="App">
      <div className = {AppStyle.nav_bar}>
        <div className = {AppStyle.logo}>
          <p>JT</p> 
        </div>
        <div className = {AppStyle.nav_list}>
          <Link className = {AppStyle.Link} to = "/">Home</Link>
          <Link className = {AppStyle.Link} to = "/project">Project</Link>
          <Link className = {AppStyle.Link} to = "/blog">Blog</Link>
          <Link className = {AppStyle.Link} to = "/resume">Resume</Link>
          <Link className = {AppStyle.Link} to = "/contact">Contact</Link>
        </div>
      </div>

      <Router>
        <HomePage path = "/"></HomePage>
        <BlogPage path = "/blog"></BlogPage>
        <ContactPage path = "/contact"></ContactPage>
        <ResumePage path = "/resume"></ResumePage>
        <ProjectPage path = "/project"></ProjectPage>
        
      </Router>
    </div>
  );
}

export default App;
