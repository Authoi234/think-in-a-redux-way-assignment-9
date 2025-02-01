import React from 'react';
import './App.css';
import "./styles/main.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './images/logo.svg';
import Home from './Pages/Home';
import AddNew from './Pages/AddNew';
import { changeSearchText } from './features/fiterSlice/filterSlice';
import { useDispatch } from 'react-redux';
import EditTask from './Pages/EditTask';

function App() {
  const dispatch = useDispatch();

  const callSearch = (value) => {
    dispatch(changeSearchText(value));
  }

  const debounceHandler = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const handleSearch = debounceHandler(callSearch, 500);

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
              <input type="text" placeholder="Search Task" onChange={(e) => handleSearch(e.target.value)} className="search-input" style={{color: "black"}} id="lws-searchTask" />
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/task/add' element={<AddNew></AddNew>} />
        <Route path='/task/edit/:id' element={<EditTask></EditTask>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;