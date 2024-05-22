// BackgroundVideo.js

import React from 'react';
import '../app/globals.css'; // Import CSS file for styling

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay muted loop>
        <source src="/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
