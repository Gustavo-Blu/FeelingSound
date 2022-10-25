import React from 'react';
import Typewriter from 'typewriter-effect';
import './navbar.css';

const Navbar = (props) => {
  const toggleMenu = () => {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
  };

  return (
    <div id="navbar">
      <div id="typewriter">
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('Luis Feliz')
              .pauseFor(3000)
              .deleteAll()
              .typeString('Feeling Sound')
              .pauseFor(3000)
              .start();
          }}
        />
      </div>
      <div
        className="menuToggle"
        style={{
          background: '#000 url("/images/menu.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '30px',
        }}
        onClick={toggleMenu}
      ></div>
      <Navigation toggleMenu={toggleMenu} />
    </div>
  );
};

const Navigation = (props) => {
  const { toggleMenu } = props;
  const changeImage = (source, alt) => {
    const navImage = document.getElementById('slider');
    navImage.src = source;
    navImage.alt = alt;
  };

  return (
    <div className="navigation">
      <div className="navArea">
        <ul>
          <li>
            <a
              href="#intro"
              onMouseEnter={() =>
                changeImage('/images/soundImage1.png', 'soundImage1')
              }
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#process"
              onClick={toggleMenu}
              onMouseEnter={() =>
                changeImage('/images/soundImage3.jpg', 'soundImage3')
              }
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#sketches"
              onClick={toggleMenu}
              onMouseEnter={() =>
                changeImage('/images/soundImage2.webp', 'soundImage2')
              }
            >
              Sketches
            </a>
          </li>
          <li>
            <a
              href="#conclusion"
              onClick={toggleMenu}
              onMouseEnter={() =>
                changeImage('/images/soundImage4.jpg', 'soundImage4')
              }
            >
              Conclusion
            </a>
          </li>
          <li>
            <a
              href="#links"
              onClick={toggleMenu}
              onMouseEnter={() =>
                changeImage('/images/soundImage5.webp', 'soundImage5')
              }
            >
              Links
            </a>
          </li>
        </ul>
      </div>
      <div className="imgArea">
        <img src="/images/soundImage1.png" alt="soundImage" id="slider" />
      </div>
    </div>
  );
};

export default Navbar;
