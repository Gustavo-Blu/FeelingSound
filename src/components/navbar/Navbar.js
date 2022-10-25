import React from 'react';
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
      <div>Hello World</div>
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
  const changeImage = (anything) => {
    document.getElementById('slider').src = anything;
  };

  return (
    <div className="navigation">
      <div className="navArea">
        <ul>
          <li>
            <a
              href="#b"
              onMouseEnter={() => changeImage('/images/soundImage1.png')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#l"
              onMouseEnter={() => changeImage('/images/soundImage2.webp')}
            >
              Sketches
            </a>
          </li>
          <li>
            <a
              href="#f"
              onMouseEnter={() => changeImage('/images/soundImage3.jpg')}
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#a"
              onMouseEnter={() => changeImage('/images/soundImage4.jpg')}
            >
              Conclusion
            </a>
          </li>
          <li>
            <a
              href="#r"
              onMouseEnter={() => changeImage('/images/soundImage5.webp')}
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
