import React from 'react'

const Landing = () => (
  <div className="landing">
    <div className="intro">
      <div className="intro-words">
        <div className="intro-1">Spatial development</div>
        <div className="intro-2">for a</div>
        <div className="intro-3">better</div>
        <div className="intro-4">future</div>
        <div className="intro-5">Terra R{'&'}C</div>
      </div>
      <video className="intro-video-1" loop={true} autoPlay="autoPlay" muted>
        <source src="assets/video_1.mp4" type="video/mp4"/>
      </video>
    </div>
  </div>
);

export default Landing;