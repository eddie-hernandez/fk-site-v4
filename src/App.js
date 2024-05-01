import React, { useState, useRef } from 'react'
import './App.css'
import ActivatedContent from './components/activatedContent/ActivatedContent'

// importing social icons
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

// importing logo
import fklogo from './assets/FULLKITLOGO.png'

// importing media for hover on desktop
import merchflipbook from './assets/services/merchflipbook.gif'
import consvid from './assets/services/consvid.mp4'
import cdIcon1 from './assets/services/cd3.png'
import cdIcon2 from './assets/services/cd4.png'

export default function App() {
  const [invertLogo, setInvertLogo] = useState(false)
  const [invertText, setInvertText] = useState(false)
  const [showMerch, setShowMerch] = useState(false)
  const [showCreativeDirection, setShowCreativeDirection] = useState(false)
  const [showBrandStrategy, setShowBrandStrategy] = useState(false)
  const [showCons, setShowCons] = useState(false)
  const [showPlaylistHoverBox, setShowPlaylistHoverBox] = useState(false)

  const consVideoRef = useRef(null)
  const cdVideoRef = useRef(null)
  const bsVideoRef = useRef(null)

  function handleHover(eventType) {
    if (eventType === 'merch') {
      setShowMerch(true)
      setInvertLogo(true)
      setShowPlaylistHoverBox(false)
    } else {
      setShowMerch(false)
    }
    if (eventType === 'creativeDirection') {
      setShowCreativeDirection(true)
      cdVideoRef.current?.play()
      setShowPlaylistHoverBox(false)
    } else {
      setShowCreativeDirection(false)
      cdVideoRef.current?.pause()
    }
    if (eventType === 'brandStrategy') {
      setShowBrandStrategy(true)
      bsVideoRef.current?.play()
      setShowPlaylistHoverBox(false)
      setInvertText(true)
    } else {
      setShowBrandStrategy(false)
      bsVideoRef.current?.pause()
      setInvertText(false)
    }
    if (eventType === 'cons') {
      setShowCons(true)
      consVideoRef.current?.play()
      setShowPlaylistHoverBox(false)
      setInvertLogo(true)
    } else {
      setShowCons(false)
      consVideoRef.current?.pause()
    }
  }

  return (
    <div className="app">
      <div className="landingPage">
        <ActivatedContent
          showCreativeDirection={showCreativeDirection}
          showPlaylistHoverBox={showPlaylistHoverBox}
          setShowPlaylistHoverBox={setShowPlaylistHoverBox}
          showBrandStrategy={showBrandStrategy}
          showCons={showCons}
          cdVideoRef={cdVideoRef}
          bsVideoRef={bsVideoRef}
          consVideoRef={consVideoRef}
        />
        <div className="servicesContainer">
          <div className="logoContainer">
            <img
              src={fklogo}
              className={`logo ${invertLogo ? 'show' : ''}`}
              id="fklogo"
              alt="full kit logo"
            />
          </div>
          <div className="servicesMedia">
            <img
              src={merchflipbook}
              className={`hoverimg ${showMerch ? 'show' : ''}`}
              id="merchflipbook"
              alt="example of merch"
            />
            <video
              src={consvid}
              ref={consVideoRef}
              className={`hoverimg ${showCons ? 'show' : ''}`}
              muted
              playsInline
              loop
              alt="example of cons"
              id="consvid"
            />
          </div>
        </div>
        <div
          className={`missionContainer ${
            showBrandStrategy ? 'invertText' : ''
          }`}
        >
          <p>
            Creative collective based in NYC/LA/DA.
            <br />
            Services we offer:
          </p>
          <ol className="missionList">
            {/* Custom Merchandise */}
            <li>
              <span
                className="clickable"
                id="services"
                onMouseEnter={() => handleHover('merch')}
                onMouseLeave={() => {
                  setShowMerch(false)
                  setInvertLogo(false)
                }}
              >
                CUSTOM MERCHANDISE
              </span>
            </li>
            {/* Consultation */}
            <li>
              <span
                className="clickable"
                id="services"
                onMouseEnter={() => handleHover('cons')}
                onMouseLeave={() => {
                  setShowCons(false)
                  setInvertLogo(false)
                }}
              >
                CONSULTATION
              </span>
            </li>
            {/* Creative Direction */}
            <li>
              <span
                className="clickable"
                id="services"
                onMouseEnter={() => handleHover('creativeDirection')}
                onMouseLeave={() => {
                  setShowCreativeDirection(false)
                  setInvertLogo(false)
                  setShowPlaylistHoverBox(true)
                }}
              >
                CREATIVE DIRECTION
              </span>
            </li>
            {/* Brand Strategy */}
            <li>
              <span
                className="clickable"
                id="services"
                onMouseEnter={() => handleHover('brandStrategy')}
                onMouseLeave={() => {
                  setShowBrandStrategy(false)
                  setInvertLogo(false)
                }}
              >
                BRAND STRATEGY
              </span>
            </li>
          </ol>
        </div>
        <div className="linksContainer">
          {/* EMAIL ICON */}
          <a
            className="socialLink"
            href="mailto:thelads@fullkitwnkrs.com"
            rel="noreferrer"
            target="_blank"
          >
            <div className="socialLogo" id="cdIcon1">
              {showCreativeDirection ? (
                <img src={cdIcon1} alt="Creative Direction" />
              ) : (
                <MailOutlineIcon />
              )}
            </div>
          </a>
          {/* INSTAGRAM ICON */}
          <a
            className="socialLink"
            href="https://www.instagram.com/fullkitwnkrs"
            rel="noreferrer"
            target="_blank"
          >
            <div className="socialLogo" id="cdIcon2">
              {showCreativeDirection ? (
                <img src={cdIcon2} alt="Creative Direction" />
              ) : (
                <InstagramIcon />
              )}
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
