import React from 'react';
import './App.css'; 
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return(
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>
    
  );
}

export default App;