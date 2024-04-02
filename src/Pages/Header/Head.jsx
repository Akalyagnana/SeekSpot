import React from 'react'
import seek from "../Images/Seek.png";
import './Header.css';
import {Link} from "react-router-dom";
const Head = () => {
  return (
    <>
    <section className='head'>
        <div className='container flexSB paddingTB'>
            <div className='logo'>
               <img src={seek} alt='' width="200px" height="100" />
            </div>
            <div className='ad'>

            <a href="/login" class="button">Login</a>


            </div>
            
        </div>
    </section>
    </>
    
  )
}

export default Head