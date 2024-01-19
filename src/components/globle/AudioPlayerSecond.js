// src/components/AudioPlayer.js
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayerSecond = ({ src }) => {
  return (
    <ReactAudioPlayer
      src={src}
      autoPlay={false}
      controls
    />
  );
};

export default AudioPlayerSecond;
