import React from 'react';
import './App.css';
import {Router} from '@reach/router'
import HomePage from './views/HomePage'

// import BlogPage from './views/BlogPage'

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path = "/"></HomePage>
      </Router>
    </div>
  );
}

export default App;
