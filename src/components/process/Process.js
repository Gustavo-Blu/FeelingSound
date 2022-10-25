import React from 'react';
import './process.css';

const Process = () => {
  return (
    <section id="process">
      <h2 className="section-header">Process</h2>
      <p>
        Initially I desired to create the device using a piston, or something
        that could push upwards as they received input. However, due to the fact
        that the parts I was looking for were unavailable, I resorted to using
        rotation servos instead. As you received input the servos would rotate
        upwards and give you the same feeling as a piston would give you in my
        initial plan. There were difficulties from the start, because of where I
        was working the lack of internet reception was making it difficult to
        transfer my code through the internet. Usage and manipulation of Fast
        Fourier Transformation (FFT), learning how to use Arduino and Servos to
        both revive input from sound and rotate the Servos once they receive
        said input.
      </p>
    </section>
  );
};

export default Process;
