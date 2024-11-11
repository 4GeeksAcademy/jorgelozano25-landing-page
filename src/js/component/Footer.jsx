import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container text-center py-3">
        <p style={textStyle}>Copyright © Your Website 2019</p>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#333333',  
  color: '#FFFFFF',             
  position: 'fixed',
  width: '100%',
  bottom: 0,
};

const textStyle = {
  fontSize: '14px',
  margin: 0,
};

export default Footer;