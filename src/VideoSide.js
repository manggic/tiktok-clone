import React, { useState } from "react";
import "./VideoSide.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from '@material-ui/icons/Favorite'


const VideoSide = ({ like, comment }) => {
  const [ liked , setLiked] = useState(false)


  return (
    <div className="side">
      <div className="heart" >
       {(liked)?<FavoriteIcon onClick= { () => setLiked(false ) } />:<FavoriteBorderIcon onClick= { () => setLiked(true) }/>  }
          
        {like}
      </div>
      <div className="chat">
        <ChatIcon />
        {comment}
      </div>
      <div className="share">
        <ShareIcon />
        { comment }
      </div>
    </div>
  );
};

export default VideoSide;
