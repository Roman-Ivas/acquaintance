import React from 'react';

const Portfolio = () => {
  const fullName = 'Roman Ivashchenko';
  const phoneNumber = '+44 079 ## ### ###';
  const emailAddress = 'email@gmail.com';

  const appStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyles = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const infoStyles = {
    marginBottom: '10px',
  };

  return (
    <div style={appStyles} id="Portfolio">
      <h1 style={headingStyles}>My Portfolio</h1>
      <p style={infoStyles}>Full Name: {fullName}</p>
      <p style={infoStyles}>Phone Number: {phoneNumber}</p>
      <p style={infoStyles}>Email: {emailAddress}</p>
    </div>
  );
};

export default Portfolio;
