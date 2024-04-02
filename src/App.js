import React from 'react';
//import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 
//import Footer from './Pages/Home/Footer/Footer';
//import Header from './Pages/Header';
import Head from './Pages/Header/Head';
import './App.css';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login'
function App() {
  return (
    <>
    <Router>
      <Routes>
        
        <Route path='/' element={<Header />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;