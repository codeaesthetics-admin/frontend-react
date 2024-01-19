// src/components/AudioPlayer.js
import React from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioPlayer = ({ src }) => {
  return (
    <H5AudioPlayer
      autoPlay={false}
      src={src}
      onPlay={(e) => console.log('onPlay')}
      // Add more event listeners or props as needed
    />
  );
};

export default AudioPlayer;
