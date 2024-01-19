// src/App.js
import React from 'react';
import AudioPlayer from './globle/AudioPlayer';
import AudioPlayerSecond from './globle/AudioPlayerSecond';
import audioSrc from "../audio/tune.mp3"

function AudioPage() {
  // const audioSrc = '../audio/tune.mp3';

  return (
    <div className="container vh-100">
      <div className='row h-100 align-items-center'>
        <div className='col-lg-6 px-5'>
          <h3>Audio Player1</h3>
          <AudioPlayer src={audioSrc} />
        </div>
        <div className='col-lg-6 text-center'>
          <h3>Audio Player2</h3>
          <AudioPlayerSecond src={audioSrc} />
        </div>
      </div>
    </div>
  );
}

export default AudioPage;
