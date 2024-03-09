import React, { useState } from 'react'
import './App.css'
import fklogo from './assets/FULLKITLOGO.png'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import Services from './components/services/Services'

export default function App() {
  const [invertLogo, setInvertLogo] = useState(null)

  return (
    <div className="app">
      <div className="landingPage">
        <div className="logoContainer">
          <img src={fklogo} className={`logo ${invertLogo ? 'show' : ''}`} alt="full kit logo" />
        </div>
        <Services setInvertLogo={setInvertLogo} />
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
            <div className="socialLogo">
              <InstagramIcon />
            </div>
            {/* INSTAGRAM */}
          </a>
        </div>
      </div>
    </div>
  )
}
