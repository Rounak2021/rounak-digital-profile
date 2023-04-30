import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Router, Routes } from 'react-router-dom';
// import './App.css';
import "./index.css"
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import NavBar from './components/NavBar/Navbar';
import About from './components/About/About';
import COntact from './components/Contact/Contact';
import Login from './components/Login/Login';
function App() {


  return (
    <BrowserRouter>
      <div>
        <main class="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
          <div class="flex items-start justify-between">
            <Sidebar />
            <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
              <NavBar />
              <div class="h-screen pt-2 pb-24 pl-2 pr-2  md:pt-0 md:pr-0 md:pl-0">
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<COntact />} />
                </Routes>

              </div>
            </div>
          </div>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;