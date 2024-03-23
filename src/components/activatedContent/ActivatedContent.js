import React, { useState } from 'react'
import './ActivatedContent.css'

// importing media

// consultation assets
import cons1 from '../../assets/services/cons1.jpeg'
import cons2 from '../../assets/services/cons2.jpeg'
import cons3 from '../../assets/services/cons3.jpeg'
import cons4 from '../../assets/services/cons4.jpeg'
import cons5 from '../../assets/services/cons5.jpeg'
import cons6 from '../../assets/services/cons6.jpeg'
import cons7 from '../../assets/services/cons7.jpeg'

// creative direction assets
import cd1 from '../../assets/services/cd1.jpeg'
import cd2 from '../../assets/services/cd2.jpeg'
import cdvid from '../../assets/services/cdvideo.mp4'

// brand strategy assets
import bs1 from '../../assets/services/bs1.jpeg'
import bs2 from '../../assets/services/bs2.jpeg'
import bs4 from '../../assets/services/bs4.jpeg'
import bs5 from '../../assets/services/bs5.jpeg'
import bsvid from '../../assets/services/bsvideo.mp4'

export default function ActivatedContent({
  showCreativeDirection,
  showPlaylistHoverBox,
  setShowPlaylistHoverBox,
  showBrandStrategy,
  showCons,
  cdVideoRef,
  bsVideoRef,
}) {
  const [showPlaylist, setShowPlaylist] = useState(false)
  return (
    <>
      {/* creative direction activated content */}
      <img
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
      {/* brand strategy activated content */}
      <img
        src={bs1}
        className={`hoverimg ${showBrandStrategy ? 'show' : ''}`}
        alt="example of brand strategy"
        id="bs1"
      />
      <img
        src={bs2}
        className={`hoverimg ${showBrandStrategy ? 'show' : ''}`}
        alt="example of brand strategy"
        id="bs2"
      />
      <img
        src={bs4}
        className={`hoverimg ${showBrandStrategy ? 'show' : ''}`}
        alt="example of brand strategy"
        id="bs4"
      />
      <img
        src={bs5}
        className={`hoverimg ${showBrandStrategy ? 'show' : ''}`}
        alt="example of brand strategy"
        id="bs3"
      />
      <video
        src={bsvid}
        ref={bsVideoRef}
        className={`hoverimg ${showBrandStrategy ? 'show' : ''}`}
        muted
        playsInline
        loop
        alt="example of brand strategy"
        id="bsvid"
      />
      <div
        className={`playlistContainer ${
          showCreativeDirection
            ? 'show'
            : showPlaylistHoverBox
            ? 'show'
            : showPlaylist
            ? 'show'
            : ''
        }`}
        onMouseEnter={() => {
          setShowPlaylistHoverBox(false)
          setShowPlaylist(true)
        }}
      >
        <div className="aspectRatioKeeper">
          {showPlaylistHoverBox ? (
            <div className="playlistHoverMessage">
              <p>(hover mouse here to re-reveal playlist)</p>
            </div>
          ) : (
            <iframe
              src="https://open.spotify.com/embed/playlist/1Dcocg0Sgrrkqdv1P6RSwW?utm_source=generator"
              title="ms playlist"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="playlist"
              onMouseLeave={() => setShowPlaylist(false)}
            />
          )}
        </div>
      </div>
      {/* consultation activated content */}
      <img
        src={cons1}
        className={`hoverimg ${showCons ? 'show' : ''}`}
        alt="example of consultation"
        id="cons1"
      />
      <img
        src={cons2}
        className={`hoverimg ${showCons ? 'show' : ''}`}
        alt="example of consultation"
        id="cons2"
      />
      <img
        src={cons3}
        className={`hoverimg ${showCons ? 'show' : ''}`}
        alt="example of consultation"
        id="cons3"
      />
      <img
        src={cons4}
        className={`hoverimg ${showCons ? 'show' : ''}`}
        alt="example of consultation"
        id="cons4"
      />
      <img
        src={cons5}
        className={`hoverimg ${showCons ? 'show' : ''}`}
        alt="example of consultation"
        id="cons5"
      />
      <img
        src={cons6}
        className={`hoverimg ${showCons ? 'show' : ''}`}
        alt="example of consultation"
        id="cons6"
      />
      <img
        src={cons7}
        className={`hoverimg ${showCons ? 'show' : ''}`}
        alt="example of consultation"
        id="cons7"
      />
    </>
  )
}
