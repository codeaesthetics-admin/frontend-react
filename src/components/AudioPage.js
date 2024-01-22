import React from 'react';
import AudioPlayer from './globle/AudioPlayer';
import AudioPlayerSecond from './globle/AudioPlayerSecond';
import audioSrc from "../audio/tune.mp3"
import { Link } from "react-router-dom";
function AudioPage({ handleLogout }) {

  return (
    <div className="container vh-100">
      <Link to='/urdutext' className="btn btn-primary mt-4 me-3">Urdu Text</Link>
      <button className='btn btn-primary mt-4' onClick={handleLogout}>Logout</button>
      <div className='row h-100 align-items-center'>
        <div className='col-lg-6 px-5'>
          <h3 className='urduFont'>Audio Player 1</h3>
          <AudioPlayer src={audioSrc} />
        </div>
        <div className='col-lg-6 px-5'>
          <h3>Audio Player 2</h3>
          <AudioPlayerSecond src={audioSrc} />
        </div>
      </div>
    </div>
  );
}

export default AudioPage;
