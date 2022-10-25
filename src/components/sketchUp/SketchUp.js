import React from 'react';
import './sketchUp.css';

const SketchUp = (props) => {
  return (
    <section id="sketches">
      <h2 className="section-header">Sketches</h2>
      <div className="pictures">
        <div className="examples">
          <img src="/images/inprogressMachine.jpg" alt="blah" />
          <p>
            Beginning image showing the basic Idea. Microphone input being
            transferred from the computer to the Arduino. From there, transfer
            into the servos to finally convert sound into input.
          </p>
        </div>
        <div className="examples">
          <img src="/images/finishedMachine1.jpg" alt="finished machine 1" />
          <p>
            Finished product. A cotton cover resides on top while the sides are
            a foamboard all painted up
          </p>
        </div>
        <div className="examples">
          <img src="/images/finishedMachine2.jpg" alt="finish machine 2" />
          <p>
            Side view of the Device showing the wiring and cables that extend to
            the end of the computer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SketchUp;
