import React from 'react'
import {Link} from "react-router-dom";
import './Header.css';
import Head from './Head';
import { Container, Typography, Button, Grid, Card, CardContent,Box,Paper } from '@mui/material';
import Footer from '../Footer/Footer';

const Header = () => {
  return (
    <>
    <Head/>

    <header>
    <div className="container paddingSmall">
         <nav>
          <ul className='flex'>
            <li><Link to='/h'>Home</Link></li>
            
            <li><Link to='/memes'>memes</Link></li>
            <li><Link to='/Culture'>Culture</Link></li>
            <li><Link to='/profile'>sports</Link></li>
            <li><Link to='/boxed'>Boxed</Link></li>
           
          </ul>
         </nav>
      </div>
      <div>
      {/* DivWNz7 */}
      <div style={{ padding: '50px 0px 50px 0px', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', columnGap: '50px', rowGap: '30px', backgroundColor: '#f7f7f7', boxShadow: '0px 0px 3px 0px #0000003b', borderRadius: '20px' }}>
        {/* DivKA1z */}
        <div style={{ padding: '0px 20px 20px 70px', flexDirection: 'column', columnGap: '0px', rowGap: '30px' }}>
         
          {/* ButtonjUXF */}
          <Button variant="contained" style={{ padding: '20px 16px 12px 16px', backgroundColor: '#000000ff', borderRadius: '50px', borderWidth: '0px 0px 0px 0px', borderStyle: 'groove', borderColor: '#333 #333 #333 #333', fontFamily: 'Kumbh Sans', fontSize: '18px', fontWeight: '600', color: '#ffffffff', lineHeight: '28px' }}>
            Join us now and start your discovery journey today!
          </Button>
        </div>
        {/* DivVTi9 */}
        <div style={{ padding: '0px 50px 0px 85px', flexDirection: 'column', columnGap: '0px', rowGap: '0px', borderRadius: '20px 20px 20px 20pxpx ' }}>
  {/* austin-distel-744oGeqpxPQ-unsplashfxAF */}
  <img src="https://res.cloudinary.com/dbyioi2qq/image/upload/v1712022148/qyxwvfmaqdba5bttfoln.jpg" alt="Highlighted Feature" style={{ width: "100%", height:"500px", borderRadius: '10px 0px 0px 10px ', objectFit: 'cover' }} />
</div>

      </div>
    </div>
   
             <br></br>
    </header>
    <div className="card-container1">
      <div className="card1">
        <h2>Effortless Discovery</h2>
        <p>Find cintent that truly resonates with you</p>
      </div>
      <div className="card1">
        <h2>Personalized Recomendations</h2>
        <p>Discover conntent tailored just for you, thanks to our advanced machine learning algorithms.</p>
      </div>
      <div className="card1">
        <h2>Share&Connect</h2>
        <p>Easily share your discoveries and connect with like-minded individuals on our platform. </p>
      </div>
    </div>
    <Footer/>
    </>
   
  )
}

export default Header