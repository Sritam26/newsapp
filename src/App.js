
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
     <Router>
      <div>
     <Navbar/>
     <Routes>
     <Route  path="/" element={<News key="science" country="in" catagory="science" />} />
     <Route  path="/science" element={<News key="science" country="in" catagory="science" />} />
     <Route  path="/sports" element={<News key="sports" country="in" catagory="sports" />} />
     <Route path="/technology" element={<News key="technology" country="in" catagory="technology" />} />
     <Route path="/general" element={<News key="general" country="in" catagory="general" />} />
     <Route path="/business" element={<News key="business" country="in" catagory="business" />} />
     <Route path="/entertainment" element={<News key="entertainment" country="in" catagory="entertainment" />} />
     <Route path="/health" element={<News key="health " country="in" catagory="health" />} />
    
     </Routes>
      </div>
      </Router>
    )
  }
}


