import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Song from './components/Song';
import PlayList from './components/PlayList';


const Main = () => {
 const devToken =
   'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJGNzZUOE1RVjcifQ.eyJpYXQiOjE2Mzc1MzUxNjMsImV4cCI6MTY1MzA4NzE2MywiaXNzIjoiNFhRQlJaNVg2ViJ9.KBytG611Bd8ZMHlCXemL2omNWrzK2FnaWmlqHFyb_dTQV45sRH8qTY_3pJ6Dn0OV99yMLXiTywsOwLomS6tEIw';
    
     const [recentMusic, setRecentMusic] = useState([]);
    useEffect(()=>{

     const fetchMusic = async () => {
       const result = await axios.get(
         'https://api.music.apple.com/v1/me/recent/played/tracks',
         {
           headers: {
             Authorization: 'Bearer ' + devToken,
             'Content-Type': 'application/json',
             'Music-User-Token': localStorage.musicUserToken,
           },
         }
       );
       if(result){
setRecentMusic(result.data.data);

       }
       
     };

     fetchMusic();
    }, [])
    return (
        <div className="App-header">
            <h2>Recently Played Tracks</h2>
            <PlayList songs={recentMusic} />
        </div>
    )
}

export default Main
