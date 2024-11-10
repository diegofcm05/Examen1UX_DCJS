import { Button } from '@mui/material';
import React from 'react';

const FooterSct: React.FC = () => {
  return (
    <footer className="footer-section">
      
      <div className="icon-container">
        <a href="https://www.instagram.com/netflix/" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgbIyAxWwj28ZuHOSMkSIxbjx732AjOfXeA&s" alt="Instagram" width={24} height={24} />
        </a>
        <a href="https://www.facebook.com/netflixus/?locale=es_LA" target="_blank" rel="noopener noreferrer">
          <img src="https://png.pngtree.com/element_our/png_detail/20180930/facebook-logo-icon-design-vector-png_115284.jpg" alt="Facebook" width={24} height={24} />
        </a>
        <a href="https://x.com/netflix" target="_blank" rel="noopener noreferrer">
          <img src="https://pbs.twimg.com/profile_images/1683364031921356800/lC0xkPJZ_400x400.jpg" alt="Twitter" width={24} height={24} />
        </a>
        <a href="https://www.youtube.com/@Netflix" target="_blank" rel="noopener noreferrer">
          <img src="https://i.pinimg.com/originals/fc/bf/bc/fcbfbc56928955d093c4e8ec779c3ff5.jpg" alt="YouTube" width={24} height={24} />
        </a>
      </div>

      <div className="links-container">
        <a href="#">Audio Description</a>
        <a href="#">Help Center</a>
        <a href="#">Gift Cards</a>
        <a href="#">Media Center</a>
        <a href="#">Investor Relations</a>
        <a href="#">Jobs</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>
        <a href="#">Legal Notices</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Corporate Information</a>
        <a href="#">Contact Us</a>
      </div>

      
      <div className="bottom-section">
      <Button variant="outlined" style={{ color: 'gray', borderColor:'gray' }}>Service Code</Button>
        <h6>© 1997-2024 Netflix, Inc.</h6>
      </div>
    </footer>
  );
};

export default FooterSct;