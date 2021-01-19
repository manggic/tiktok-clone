
import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoHeader from './VideoHeader'
import VideoSide from './VideoSide'
 

const Video  = ( { url,  song , channel, description, like, share, comment  } )  =>  {
    const videoRef = useRef(null)
    const [ play , setPlay] = useState(false) 
  

    const onVideoPress = () =>{
        if(play){
            videoRef.current.pause();
            setPlay(false)
        }else{
            videoRef.current.play();
            setPlay(true)
        }
    }

    return (
        <div className='video'>
          {/* Video */}
          <VideoHeader />
          <video
           key={ song }
           loop
           ref = { videoRef }
           onClick={ onVideoPress } 
            className='video__player' 
          src={url}></video>
          
          <VideoFooter  song={song}
              channel = { channel  } description= {description}   />
            <VideoSide like={ like } comment= {comment} share={share} />
        </div>
    )
}

export default Video


