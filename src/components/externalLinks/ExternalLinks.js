import React from 'react';
import './externalLinks.css';

const ExternalLinks = () => {
  return (
    <section id="links">
      <h2 className="section-header">External Links</h2>
      <div className="list">
        <ul>
          <li>
            <p>
              How to get the servos to rotate -
              <a href="http://www.circuitbasics.com/controlling-servo-motors-with-arduino/">
                www.circuitbasics.com
              </a>
            </p>
          </li>
          <li>
            <p>
              Website used to learn FFT code -{' '}
              <a href="https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fprocessing.org%2Freference%2Flibraries%2Fsound%2FFFT.html&data=05%7C01%7Clfeli705%40live.kutztown.edu%7C026aed37b7a244e449b908daad4e20cc%7C03c754af89a74b0abd4bdb68146c5fa4%7C1%7C0%7C638012848328054397%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=VskjY8LeYV5bBdXN8Balgs9E9MA6nvwgoDqzbuTQafw%3D&reserved=0">
                www.processing.org
              </a>
            </p>
          </li>
          <li>
            <p>
              Transferring processing code to Arduino code -{' '}
              <a href="https://learn.sparkfun.com/tutorials/connecting-arduino-to-processing/all">
                www.learn.sparkfun.com{' '}
              </a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExternalLinks;
