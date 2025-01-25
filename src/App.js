import React from 'react';
import './App.css';
import "./styles/main.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './images/logo.svg';
import Home from './Pages/Home';

function App() {
  return (
      <BrowserRouter>
        <div className="text-[#111827]">
          <nav className="container relative py-3">
            <div className="flex items-center justify-between">
              <a href="./index.html">
                <img src={logo} />
              </a>
              <div className="flex-1 max-w-xs search-field group">
                <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                <input type="text" placeholder="Search Task" className="search-input" id="lws-searchTask" />
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;