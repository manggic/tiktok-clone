import React from "react";
import "./VideoFooter.css";
import Ticker from "react-ticker";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

function VideoFooter({ channel , song , description }) {
  return (
    <div className="footer">
      <div className="footer__text">
        <h3>@{ channel }</h3>
        <p>{ description }</p>
        <div className="footer__ticker">
          <MusicNoteIcon className='footer__icon' />
          <Ticker mode="smooth">
            {({ index }) => <>{ song }</>}
          </Ticker>
        </div>
      </div>
      <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/disk-2203475-1839755.png" />
    </div>
  );
}

export default VideoFooter;
