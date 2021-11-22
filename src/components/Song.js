import React from 'react'
import msToMS from '../util'
const Song = ({image, title, artist, duration}) => {
    return (
      <div className='song'>
        {/* <img className='song_image' src={image} alt='cover' /> */}
        <div className="song--track">
          <p>{title}</p>
          <small>{artist}</small>
        </div>
        <div>
      <small className="song--duration">{msToMS(duration)}</small>
        </div>
      </div>
    );
}

export default Song
