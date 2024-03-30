import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Homeeeee</h1>
        <nav>
            <Link to="/login">Login</Link>
        </nav>
    </div>
  )
}

export default Home