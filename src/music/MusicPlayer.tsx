import React, { useRef } from 'react';
import './MusicPlayer.css';

const myMusic = require('../assets/bg-music.mp3');

function MusicPlayer() {
  // Reference to the audio element
  const audioRef = useRef<HTMLAudioElement>(null);

  // Play the audio
  const playMusic = () => {
    audioRef.current?.play();
  };

  // Pause the audio
  const pauseMusic = () => {
    audioRef.current?.pause();
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={myMusic} />
      <button onClick={playMusic}>Play</button>
      <button onClick={pauseMusic}>Pause</button>
    </div>
  );
}

export default MusicPlayer;
