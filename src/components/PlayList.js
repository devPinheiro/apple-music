import React from 'react'
import Song from './Song';

const PlayList = ({songs}) => {

    return (
      <div className="playlist">
        {songs.length
          ? songs.map((item, key) => {
              return (
                <Song
                  title={item.attributes.name}
                  image={item.attributes.artwork.url}
                  artist={item.attributes.artistName}
                  duration={item.attributes.durationInMillis}
                  key={item.id}
                />
              );
            })
          : null}
      </div>
    );
}

export default PlayList
