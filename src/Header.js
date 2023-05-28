import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', background: 'black', color: 'white', height: '70px' }}>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', padding: 0 }}>
          <li style={{ margin: '0 10px' }}>
            <Link
              to="Greetings"
              smooth={true}
              duration={500}
              onClick={() => scrollToSection("Greetings")}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Greetings
            </Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link
              to="Portfolio"
              smooth={true}
              duration={500}
              onClick={() => scrollToSection("Portfolio")}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Portfolio
            </Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link
              to="City"
              smooth={true}
              duration={500}
              onClick={() => scrollToSection("City")}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              City
            </Link>
          </li>
          {/* Add more sections as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
