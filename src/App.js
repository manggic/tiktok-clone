


import logo from './logo.svg';
import './App.css';
import Video from './Video';
import './App.css'
import  React, { useState, useEffect }  from 'react'
import db from './firebase';


function App() {

    const [videos, setVideos ] = useState([])


   useEffect( () =>{
           db.collection('tiktok').onSnapshot( snapshot =>{
                setVideos(snapshot.docs.map(doc => doc.data())) 
           } )
   } , [])

  console.log(videos)    

  return (
    <div className="app">
      <div className='app__videos'>

      { videos.map( ( {url, channel, description, song, likes, share, comments  } ) =>(
        <Video
           key ={song} 
           url={url} 
           song ={song}
           description ={description}
           channel = {channel}
           like={ likes} 
           comment = { comments}
           share ={share}
              />
      )  )  }

       
      </div>
    </div>
  );
}

export default App;
