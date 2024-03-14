import React, { useState, useRef } from 'react'
import './App.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

// importing logo
import fklogo from './assets/FULLKITLOGO.png'

// importing media for hover on desktop
import merchflipbook from './assets/services/flipbook_slower.gif'
import morevid from './assets/services/morevid.mp4'
import cdvid from './assets/services/cdvideo.mp4'
import msvid from './assets/services/msvideo.mp4'

export default function App() {
  const [invertLogo, setInvertLogo] = useState(null)
  const [showMerch, setShowMerch] = useState(false)
  const [showCreativeDirection, setShowCreativeDirection] = useState(false)
  const [showMusicSupervision, setShowMusicSupervision] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const moreVideoRef = useRef(null)
  const cdVideoRef = useRef(null)
  const msVideoRef = useRef(null)

  function handleHover(eventType) {
    if (eventType === 'merch') {
      setShowMerch(true)
      setInvertLogo(true)
    } else {
      setShowMerch(false)
    }
    if (eventType === 'creativeDirection') {
      setShowCreativeDirection(true)
      cdVideoRef.current?.play()
      setInvertLogo(true)
    } else {
      setShowCreativeDirection(false)
      cdVideoRef.current?.pause()
    }
    if (eventType === 'musicSupervision') {
      setShowMusicSupervision(true)
      msVideoRef.current?.play()
      setInvertLogo(true)
    } else {
      setShowMusicSupervision(false)
      msVideoRef.current?.pause()
    }
    if (eventType === 'more') {
      setShowMore(true)
      moreVideoRef.current?.play()
      setInvertLogo(true)
    } else {
      setShowMore(false)
      moreVideoRef.current?.pause()
    }
  }

  return (
    <div className="app">
      <div className="landingPage">
        <div className="servicesContainer">
          <div className="logoContainer">
            <img
              src={fklogo}
              className={`logo ${invertLogo ? 'show' : ''}`}
              alt="full kit logo"
            />
          </div>
          <div className="servicesMedia">
            {/* Conditionally render these based on state */}
            <img
              src={merchflipbook}
              className={`hoverimg ${showMerch ? 'show' : ''}`}
              alt="example of merch"
            />
            <video
              src={cdvid}
              ref={cdVideoRef}
              className={`hoverimg ${showCreativeDirection ? 'show' : ''}`}
              muted
              playsInline
              loop
              alt="example of creative direction"
            />
            <video
              src={msvid}
              ref={msVideoRef}
              className={`hoverimg ${showMusicSupervision ? 'show' : ''}`}
              muted
              playsInline
              loop
              alt="example of music supervision"
            />
            <video
              src={morevid}
              ref={moreVideoRef}
              className={`hoverimg ${showMore ? 'show' : ''}`}
              muted
              playsInline
              loop
              alt="example of more"
            />
          </div>
        </div>
        <div className="missionContainer">
          <p>
            Creative collective based in NYC/LA/TX. We offer{' '}
            <span
              className="clickable"
              id="services"
              onMouseEnter={() => handleHover('merch')}
              onMouseLeave={() => {
                setShowMerch(false)
                setInvertLogo(false)
              }}
            >
              <i>CUSTOM MERCHANDISE</i>
            </span>
            ,{' '}
            <span
              className="clickable"
              id="services"
              onMouseEnter={() => handleHover('creativeDirection')}
              onMouseLeave={() => {
                setShowCreativeDirection(false)
                setInvertLogo(false)
              }}
            >
              <i>CREATIVE DIRECTION</i>
            </span>
            ,{' '}
            <span
              className="clickable"
              id="services"
              onMouseEnter={() => handleHover('musicSupervision')}
              onMouseLeave={() => {
                setShowMusicSupervision(false)
                setInvertLogo(false)
              }}
            >
              <i>BRAND STRATEGY AND CONSULTATION</i>
            </span>
            , and{' '}
            <span
              className="clickable"
              id="services"
              onMouseEnter={() => handleHover('more')}
              onMouseLeave={() => {
                setShowMore(false)
                setInvertLogo(false)
              }}
            >
              <i>BEYOND THE PITCH</i>
            </span>
            .
          </p>
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
