import React, { useState, useRef } from 'react'
import './Services.css'

// importing media for hover on desktop
import merch1 from '../../assets/services/merch1.jpeg'
import merch2 from '../../assets/services/merch2.jpeg'
import merchflipbook from '../../assets/services/flipbook_slower.gif'
import cd1 from '../../assets/services/cd1.jpeg'
import cd2 from '../../assets/services/cd2.jpeg'
import cd3 from '../../assets/services/cd3.png'
import cd4 from '../../assets/services/cd4.png'
import cd5 from '../../assets/services/cd5.jpeg'
import ms1 from '../../assets/services/ms1.jpeg'
import ms2 from '../../assets/services/ms2.jpeg'
import ms3 from '../../assets/services/ms3.jpeg'
import more1 from '../../assets/services/more1.jpeg'
import more2 from '../../assets/services/more2.jpeg'
import more3 from '../../assets/services/more3.jpeg'
import more4 from '../../assets/services/more4.jpeg'
import more5 from '../../assets/services/more5.jpeg'
import more6 from '../../assets/services/more6.jpeg'
import more7 from '../../assets/services/more7.jpeg'
import morevid from '../../assets/services/morevid.mp4'
import cdvid from '../../assets/services/cdvideo.mp4'
import msvid from '../../assets/services/msvideo.mp4'

export default function Services({ setInvertLogo }) {
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
    <div className="servicesContainer">
      {/* ITEMS */}
      {/* <img
        src={merch1}
        className={`hoverimg ${showMerch ? 'show' : ''}`}
        alt="example of merch"
        id="merch1"
      /> */}
      {/* <img
        src={merch2}
        className={`hoverimg ${showMerch ? 'show' : ''}`}
        alt="example of merch"
        id="merch2"
      /> */}
      <img
        src={merchflipbook}
        className={`hoverimg ${showMerch ? 'show' : ''}`}
        alt="example of merch"
        id="merchflipbook"
      />
      {/* <img
        src={cd1}
        className={`hoverimg ${showCreativeDirection ? 'show' : ''}`}
        alt="example of creative direction"
        id="cd1"
      />
      <img
        src={cd2}
        className={`hoverimg ${showCreativeDirection ? 'show' : ''}`}
        alt="example of creative direction"
        id="cd2"
      />
      <img
        src={cd3}
        className={`hoverimg ${showCreativeDirection ? 'show' : ''}`}
        alt="example of creative direction"
        id="cd3"
      />
      <img
        src={cd4}
        className={`hoverimg ${showCreativeDirection ? 'show' : ''}`}
        alt="example of creative direction"
        id="cd4"
      />
      <img
        src={cd5}
        className={`hoverimg ${showCreativeDirection ? 'show' : ''}`}
        alt="example of creative direction"
        id="cd5"
      /> */}
      <div className="cdvidContainer">
        <video
          ref={cdVideoRef}
          src={cdvid}
          muted
          playsInline
          loop
          className={`hoverimg ${showCreativeDirection ? 'show' : ''}`}
          alt="example of creative direction"
          id="cdvid"
        />
      </div>
      {/* <img
        src={ms1}
        className={`hoverimg ${showMusicSupervision ? 'show' : ''}`}
        alt="example of music supervision"
        id="ms1"
      />
      <img
        src={ms2}
        className={`hoverimg ${showMusicSupervision ? 'show' : ''}`}
        alt="example of music supervision"
        id="ms2"
      />
      <img
        src={ms3}
        className={`hoverimg ${showMusicSupervision ? 'show' : ''}`}
        alt="example of music supervision"
        id="ms3"
      /> */}
      <video
        ref={msVideoRef}
        src={msvid}
        muted
        playsInline
        loop
        className={`hoverimg ${showMusicSupervision ? 'show' : ''}`}
        alt="example of music supervision"
        id="msvid"
      />
      {/* <div
        className={`playlistContainer ${showMusicSupervision ? 'show' : ''}`}
      >
        <div className="aspectRatioKeeper">
          <iframe
            src="https://open.spotify.com/embed/playlist/1Dcocg0Sgrrkqdv1P6RSwW?utm_source=generator"
            title="ms playlist"
            frameborder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="playlist"
          />
        </div>
      </div> */}
      {/* <img
        src={more1}
        className={`hoverimg ${showMore ? 'show' : ''}`}
        alt="example of more"
        id="more1"
      />
      <img
        src={more2}
        className={`hoverimg ${showMore ? 'show' : ''}`}
        alt="example of more"
        id="more2"
      />
      <img
        src={more3}
        className={`hoverimg ${showMore ? 'show' : ''}`}
        alt="example of more"
        id="more3"
      />
      <img
        src={more4}
        className={`hoverimg ${showMore ? 'show' : ''}`}
        alt="example of more"
        id="more4"
      />
      <img
        src={more5}
        className={`hoverimg ${showMore ? 'show' : ''}`}
        alt="example of more"
        id="more5"
      />
      <img
        src={more6}
        className={`hoverimg ${showMore ? 'show' : ''}`}
        alt="example of more"
        id="more6"
      />
      <img
        src={more7}
        className={`hoverimg ${showMore ? 'show' : ''}`}
        alt="example of more"
        id="more7"
      /> */}
      <video
        ref={moreVideoRef}
        src={morevid}
        muted
        playsInline
        loop
        className={`hoverimg ${showMore ? 'show' : ''}`}
        alt="example of more"
        id="morevid"
      />
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
  )
}
