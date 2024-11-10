import React from 'react';
import Button from '@mui/material/Button'

const HeroSection: React.FC = () => {
  return (
    <div className="head-section">
      <img
        src="https://media1.tenor.com/m/XMJ27srdhysAAAAC/spy-x-family-anya-spy-x-family-anime.gif" 
        alt="Header img"
        className="head-background"
      />
      <div className="head-content">
      <img className="head-title" src="https://dnm.nflximg.net/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABZzL9NguUiJUDxYzGAi-8qbVcQDEb3daUMuhplOrXKs-jIBxHPSbckgYaoetEhTqQpBTzEQMIMAErvkHsZVYb5fqaxQwG05lJjU.png?r=464" alt="Family" style={{ display: 'block', width: '80%', height: 'auto', maxWidth: 350}}  />
        <p className="head-description">
          A spy, an assassin and a telepath come together to pose as a family each for their own reasons, hile hiding their true identities from each other.</p>
        <div className="head-buttons">
        <Button variant="contained" style={{
                                            backgroundColor: 'white',
                                            color: 'black',
                                          }}>
        ▶ Play
        </Button>
        <Button variant="contained" style={{
                                            backgroundColor: 'gray',
                                            color: 'white',
                                          }}>
        More Info
        </Button>
        
        </div>
      </div>
    </div>
  );
};


export default HeroSection;
