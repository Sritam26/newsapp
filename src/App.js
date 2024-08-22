
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
     <Route path="/" element={<News country="in" catagory="science" />} />
     <Route path="/sports" element={<News country="in" catagory="sports" />} />
     <Route path="/technology" element={<News country="in" catagory="technology" />} />
     <Route path="/general" element={<News country="in" catagory="general" />} />
     <Route path="/business" element={<News country="in" catagory="business" />} />
     <Route path="/entertainment" element={<News country="in" catagory="entertainment" />} />
     <Route path="/health" element={<News country="in" catagory="health" />} />
    
     </Routes>
      </div>
      </Router>
    )
  }
}


