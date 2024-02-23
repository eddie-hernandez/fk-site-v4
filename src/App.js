import React from 'react'
import './App.css'
import fklogo from './assets/FULLKITLOGO.png'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

export default function App() {
  return (
    <div className="app">
      <div className="landingPage">
        <div className="missionContainer">
          <p>
            U.S.-based collective based in NYC/LA/TX. We offer{' '}
            <span>CUSTOM MERCHANDISE</span>, <span>CREATIVE DIRECTION</span>,
            and <span>MUSIC SUPERVISION</span>.
          </p>
        </div>
        <div className="logoContainer">
          <img src={fklogo} className="logo" alt="full kit logo" />
        </div>
        <div className="linksContainer">
          <a
            className="socialLink"
            href="mailto:thelads@fullkitwnkrs.com"
            rel="noreferrer"
            target="_blank"
          >
            <div className="socialLogo">
              <MailOutlineIcon />
            </div>
            {/* EMAIL */}
          </a>
          <a
            className="socialLink"
            href="https://www.instagram.com/fullkitwnkrs"
            rel="noreferrer"
            target="_blank"
          >
            <div className='socialLogo'>
              <InstagramIcon />
            </div>
            {/* INSTAGRAM */}
          </a>
        </div>
      </div>
    </div>
  )
}
