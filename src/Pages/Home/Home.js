import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div>
        abcde
        <br/><br/>
        <form action="/register" class="inline">
        <button type="button" class="btn btn-secondary">Light</button>
        <a>    Learn More</a>
        </form>
        <br/>
        <img src="https://t4.ftcdn.net/jpg/04/61/47/03/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg"></img>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Home