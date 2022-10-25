import React from 'react';
import './intro.css';

const Intro = (props) => {
  return (
    <section id="intro">
      <h1 className="section-header">Creative Code: Feeling Sound</h1>
      <p>
        Feeling Sound was created due to my desire to create a device that mixes
        one of our 5 senses together. Like hearing color, smelling texture, or
        in this case, “Feeling Sound”
      </p>
      <YoutubeEmbed />
    </section>
  );
};

const YoutubeEmbed = () => {
  return (
    <div className="video-responsive">
      <iframe
        title="Feeling Sound Video"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2s2a_nhac2E"
      />
    </div>
  );
};

export default Intro;
