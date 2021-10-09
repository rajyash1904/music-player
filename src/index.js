import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AudioPlayer from './AudioPlayer';
import tracks from "./tracks";

ReactDOM.render(
  <React.StrictMode>
    <AudioPlayer tracks={tracks} />
  </React.StrictMode>,
  document.getElementById('root')
);
