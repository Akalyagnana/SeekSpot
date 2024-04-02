import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const Footer = () => {
  return (
   <div>
      <Grid item xs={12}>
          <footer className="footer" style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '20px', backgroundColor: 'black', color: "white" }}>

            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={10} sm={2}>
                <Typography variant="h6">
                  <h3>SeekSpot</h3>
                  <p className="footer-text">SeekSpot is revolutionizing how teens discover entertainments</p>
                </Typography>

              </Grid>
              <Grid item xs={10} sm={2}>
                <Typography variant="h6">Section 1</Typography>
                <ul className="footer-list">
                  <li>Help</li>
                  <li>Contact</li>
                  <li>Support</li>
                </ul>
              </Grid>
              <Grid item xs={10} sm={2}>
                <Typography variant="h6">Section 2</Typography>
                <ul className="footer-list">
                  <li>Explore</li>
                  <li>Shows</li>
                  <li>Apps</li>
                </ul>
              </Grid>
              <Grid item xs={10} sm={2}>
                <Typography variant="h6">Section 3</Typography>
                <ul className="footer-list">
                  <li>Legal</li>
                  <li>Terms</li>
                  <li>Condition</li>
                </ul>
              </Grid>
              <Grid item xs={10} sm={2}>
                <Typography variant="h6">Section 4</Typography>
                <ul className="footer-list">
                  <li>Company</li>
                  <li>Careers</li>
                  <li>Security</li>
                </ul>
              </Grid>
            </Grid>
            <div className="footer-line" style={{ borderTop: '1px solid white' }}></div>

          <div className="copyright">
            <Typography variant="body2" align="center">© 2022 My App. All rights reserved.</Typography>
          </div>
          </footer>
        </Grid>
     
     </div>
    
  );
}

export default Footer;
