import React from 'react';
import './sketchUp.css';

const SketchUp = (props) => {
  return (
    <section>
      <h2 className="section-header">Sketches</h2>
      <div>
        Initially I desired to create the device using a piston, or something
        that could push upwards as they received input. However, due to the fact
        that the parts I was looking for were unavailable, I resorted to using
        rotation servos instead. As you received input the servos would rotate
        upwards and give you the same feeling as a piston would give you in my
        initial plan.
      </div>
      <div className="examples">
        <img src="/images/inprogressMachine.jpg" alt="blah" />
        <p>
          Beginning image showing the basic Idea. Microphone input being
          transferred from the computer to the Arduino. From there, transfer
          into the servos to finally convert sound into input.
        </p>
      </div>
    </section>
  );
};

export default SketchUp;
