import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.85rem' }}>
        Designed & Built by Himanshu Kumar
      </p>
      <p style={{ margin: '0.3rem 0 0', color: 'var(--muted)', fontSize: '0.75rem', opacity: 0.7 }}>
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

const footerStyle = {
  marginTop: '4rem',
  padding: '2rem',
  textAlign: 'center',
  borderTop: '1px solid var(--border)',
};

export default Footer;
