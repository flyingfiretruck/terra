import React from 'react'

const Landing = () => (
  <div className="landing">
    <div className="intro">
      <div className="intro-words-1">
        <div className="intro-1">Spatial</div>
        <div className="intro-2">development</div>
        <div className="intro-3">for a</div>
        <div className="intro-4">better</div>
        <div className="intro-5">future.</div>
      </div>
      <video className="intro-video-1" loop={true} autoPlay="autoPlay" muted>
        <source src="assets/video_1.mp4" type="video/mp4"/>
      </video>
    </div>
    <span className="intro-words-2">
      Based in Korea, we provide technical consultation globally in areas of
      spatial planning, land development and real estate investment at national,
      regional and local level. We are happy to serve you the best practices
      around the world.
    </span>

  </div>
);

export default Landing;